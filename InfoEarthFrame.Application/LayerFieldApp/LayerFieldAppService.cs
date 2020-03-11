using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using InfoEarthFrame.Application.LayerFieldApp.Dtos;
using InfoEarthFrame.Core.Repositories;
using InfoEarthFrame.Core.Entities;
using System.Data.SqlClient;
using System.Linq;
using System.Configuration;
using InfoEarthFrame.GeoServerRest;
using System.Data;
using InfoEarthFrame.Common;
using iTelluro.DataTools.Utility.SHP;
using InfoEarthFrame.LayerFieldApp;
using System.IO;
using System.Text;
using System.Collections;
using InfoEarthFrame.Common.ShpUtility;
using System.Web;
using Abp.Domain.Uow;
//using SocketIOClient;
//using SocketIOClient.Messages;
using InfoEarthFrame.Application.OperateLogApp;

namespace InfoEarthFrame.Application.LayerFieldApp
{
    public class LayerFieldAppService : IApplicationService, ILayerFieldAppService
    {
        private readonly ILayerFieldRepository _ILayerFieldRepository;
        private readonly ILayerContentRepository _ILayerContentRepository;
        private readonly IDicDataCodeRepository _IDicDataCodeRepository;
        private readonly ILayerFieldDictRepository _ILayerFieldDictRepository;
        private GeoServerHelper _geoServerHelper;
        private readonly IOperateLogAppService _IOperateLogAppService;

        /// <summary>
        /// ���캯��
        /// </summary>
        public LayerFieldAppService(ILayerFieldRepository iLayerFieldRepository,
            ILayerContentRepository iLayerContentRepository,
            IDicDataCodeRepository iDicDataCodeRepository,
            ILayerFieldDictRepository iLayerFieldDictRepository,
            IOperateLogAppService iOperateLogAppService)
        {
            _ILayerFieldRepository = iLayerFieldRepository;
            _ILayerContentRepository = iLayerContentRepository;
            _IDicDataCodeRepository = iDicDataCodeRepository;
            _ILayerFieldDictRepository = iLayerFieldDictRepository;
            _geoServerHelper = new GeoServerHelper();
            _IOperateLogAppService = iOperateLogAppService;

        }

        #region �Զ�����
        /// <summary>
        /// ��ȡ��������
        /// </summary>
        public async Task<ListResultOutput<LayerFieldDto>> GetAllList()
        {
            try
            {
                //var query = await _ILayerFieldRepository.GetAllListAsync();
                var query =  _ILayerFieldRepository.GetAllList();
                var list = new ListResultOutput<LayerFieldDto>(query.MapTo<List<LayerFieldDto>>());
                return list;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        /// <summary>
        /// ���ݱ�Ż�ȡ����
        /// </summary>
        public async Task<LayerFieldOutputDto> GetDetailById(string id)
        {
            try
            {
                var query = await _ILayerFieldRepository.GetAsync(id);
                var result = query.MapTo<LayerFieldOutputDto>();
                return result;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        /// <summary>
        /// ����ͼ��Ŀ¼����ͼ������
        /// </summary>
        /// <param name="layerID"></param>
        /// <returns></returns>
        public ListResultOutput<LayerFieldDto> GetDetailByLayerID(string layerID)
        {
            try
            {
                var query = _ILayerFieldRepository.GetAll().Where(q => q.LayerID == layerID).OrderBy(c => c.AttributeSort);
                List<LayerFieldDto> layerFields = query.MapTo<List<LayerFieldDto>>();

                List<string> attributeTypes = layerFields.Select(t => t.AttributeType).ToList();

                string config = ConfigurationManager.AppSettings["DataBase"].ToString();
                int startIndex = config.LastIndexOf(":");
                string dataBaseType = config.Substring(config.LastIndexOf(":") + 1);

                List<DicDataCodeEntity> dicDataCodeEntitys = _IDicDataCodeRepository.GetAll().Where(q => q.DataTypeID == dataBaseType && attributeTypes.Contains(q.Keywords)).ToList();

                layerFields.ForEach(t =>
                {
                    DicDataCodeEntity entity = dicDataCodeEntitys.Find(m => m.Keywords == t.AttributeType);
                    if (entity != null && entity.CodeValue != null)
                    {
                        t.AttributeTypeName = entity.CodeValue;
                        t.CodeName = entity.CodeName;
                    }
                });
                layerFields.Add(new LayerFieldDto
                {
                    AttributeName = "guid",
                     LayerID=layerID
                });
                var list = new ListResultOutput<LayerFieldDto>(layerFields);
                return list;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        /// <summary>
        /// ����ͼ����ֵ�ֵ
        /// </summary>
        /// <param name="layerID"></param>
        /// <returns></returns>
        public ListResultOutput<LayerFieldDto> GetFieldDictByLayerID(string layerID)
        {
            try
            {
                var query = _ILayerFieldRepository.GetAll().Where(q => q.LayerID == layerID && q.AttributeDataType == "T");
                List<LayerFieldDto> layerFields = query.MapTo<List<LayerFieldDto>>();

                var list = new ListResultOutput<LayerFieldDto>(layerFields);
                return list;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        /// <summary>
        /// ��������
        /// </summary>
        public async Task<LayerFieldDto> Insert(LayerFieldInputDto input)
        {
            try
            {
                //input.Id = Guid.NewGuid().ToString();
                LayerFieldEntity entity = new LayerFieldEntity
                {
                    Id = input.Id,
                    LayerID = input.LayerID,
                    AttributeName = input.AttributeName,
                    AttributeDesc = input.AttributeDesc,
                    AttributeType = input.AttributeType,
                    AttributeLength = input.AttributeLength,
                    AttributePrecision = input.AttributePrecision,
                    AttributeInputCtrl = input.AttributeInputCtrl,
                    AttributeInputMax = input.AttributeInputMax,
                    AttributeInputMin = input.AttributeInputMin,
                    AttributeDefault = input.AttributeDefault,
                    AttributeIsNull = input.AttributeIsNull,
                    AttributeInputFormat = input.AttributeInputFormat,
                    AttributeUnit = input.AttributeUnit,
                    AttributeCalComp = input.AttributeCalComp,
                    AttributeDataSource = input.AttributeDataSource,
                    AttributeDataType = input.AttributeDataType,
                    AttributeValueLink = input.AttributeValueLink,
                    Remark = input.Remark,
                    AttributeSort = input.AttributeSort,
                    CreateDT = DateTime.Now
                };
                var query = await _ILayerFieldRepository.InsertAsync(entity);
                var result = entity.MapTo<LayerFieldDto>();
                return result;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        /// <summary>
        /// ��������
        /// </summary>
        /// <param name="listInput"></param>
        /// <returns></returns>
        public bool MultiInsert(List<LayerFieldInputDto> listInput)
        {
            try
            {
                string layerId = string.Empty;
                foreach (var input in listInput)
                {
                    LayerFieldDto dto = Insert(input).Result;
                    layerId = dto.LayerID;
                }
                //CreateTable(layerId);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        /// <summary>
        /// ����MySQL��PostGIS���ݿ�
        /// </summary>
        /// <param name="layerID"></param>
        /// <returns></returns>
        public bool CreateTable(string layerID)
        {
            try
            {
                bool bFlag = false;
                var layerContent = _ILayerContentRepository.Get(layerID);
                string strSql1 = "", strSql2 = "";
                var query = GetDetailByLayerID(layerID);
                if (query.Items.Count > 0)
                {

                    #region[��ȡ����ֵ]

                    string config = ConfigurationManager.AppSettings["DataBase"].ToString();
                    int startIndex = config.LastIndexOf(":");
                    string dataBase = config.Substring(0, config.LastIndexOf(":"));
                    string dataBaseType = config.Substring(config.LastIndexOf(":") + 1);

                    #endregion

                    #region [��ת�������]

                    switch (dataBase)
                    {
                        case "MySQL":
                            strSql1 = MySqlTableCreateSql(query, dataBase, dataBaseType);
                            break;
                        default:
                            break;
                    }

                    #endregion


                    #region [������]

                    if (!string.IsNullOrEmpty(strSql1) && layerContent != null)
                    {
                        var result = _ILayerFieldRepository.ExecuteSql(strSql1 + strSql2, layerContent.LayerAttrTable, layerContent.LayerSpatialTable);

                        string strPostSQL = PostGISTableCreateSql(query, layerContent.LayerAttrTable);
                        PostgrelVectorHelper pvh = new PostgrelVectorHelper();
                        bFlag = pvh.ExceuteSQL(strPostSQL, layerContent.LayerAttrTable);
                    }

                    #endregion
                    //PublicLayer(layerID, query);
                }
                return bFlag;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        /// <summary>
        /// MySql���ݿⴴ�������
        /// </summary>
        /// <param name="listDto"></param>
        /// <param name="dataBase"></param>
        /// <param name="dataBaseType"></param>
        /// <returns></returns>
        public string MySqlTableCreateSql(ListResultOutput<LayerFieldDto> listDto, string dataBase, string dataBaseType)
        {
            string strSql = "";

            #region [ͼ��ҵ���]

            strSql += "CREATE TABLE `@tableName1` (";
            strSql += "`sid` varchar(36) NOT NULL, ";
            foreach (var item in listDto.Items)
            {
                string attrType = item.AttributeType;
                //var entity = _IDicDataCodeRepository.GetAll().Where(q => q.DataTypeID == dataBaseType && q.Keywords == attrType).FirstOrDefault();
                if (!string.IsNullOrEmpty(item.AttributeTypeName))
                {
                    strSql += SqlColumnType(dataBase, item.CodeName, item.AttributeTypeName, item) + ",";
                }
                else
                {
                    strSql += "";
                }
            }
            strSql = strSql.TrimEnd(',');
            strSql += ", PRIMARY KEY (`sid`)) ENGINE=InnoDB DEFAULT CHARSET=utf8;";

            #endregion

            #region [�ռ�ο���]

            strSql += "CREATE TABLE `@tableName2` (";
            strSql += "`sid` varchar(36) NOT NULL, ";
            strSql += "`DataID` varchar(36) NOT NULL, ";
            strSql += "`geom` GEOMETRY NOT NULL";

            strSql += ", PRIMARY KEY (`sid`)) ENGINE=InnoDB DEFAULT CHARSET=utf8;";

            #endregion

            return strSql;
        }

        /// <summary>
        /// PostGIS
        /// </summary>
        /// <param name="listDto"></param>
        /// <param name="tableName"></param>
        /// <returns></returns>
        public string PostGISTableCreateSql(ListResultOutput<LayerFieldDto> listDto, string tableName)
        {

            string config = ConfigurationManager.AppSettings["DataBase"].ToString();
            int startIndex = config.LastIndexOf(":");
            string dataBaseType = config.Substring(config.LastIndexOf(":") + 1);

            string strSql = string.Format("CREATE TABLE \"{0}\"(sid SERIAL primary key,guid varchar,", tableName);
            for (int i = 0; i < listDto.Items.Count; i++)
            {
                string attrType = listDto.Items[i].AttributeType;
                if (!string.IsNullOrEmpty(listDto.Items[i].AttributeTypeName))
                {
                    if (listDto.Items[i].AttributeTypeName.ToLower() == "double" || listDto.Items[i].AttributeTypeName.ToLower() == "float")
                    {
                        listDto.Items[i].AttributeTypeName = "double precision";
                    }
                    else if (listDto.Items[i].AttributeTypeName.ToLower() == "int" || listDto.Items[i].AttributeTypeName.ToLower() == "long integer" || listDto.Items[i].AttributeTypeName.ToLower() == "short integer")
                    {
                        listDto.Items[i].AttributeTypeName = "integer";
                    }
                    else if (listDto.Items[i].AttributeTypeName.ToLower() == "datetime")
                    {
                        listDto.Items[i].AttributeTypeName = "date";
                    }
                    strSql += String.Format("\"{0}\" {1},", listDto.Items[i].AttributeName, listDto.Items[i].AttributeTypeName);
                }
            }

            strSql = strSql.TrimEnd(',');
            strSql += String.Format(",geom geometry)");

            return strSql;
        }

        /// <summary>
        /// ���ݿ�����ת��
        /// </summary>
        /// <param name="dataBase"></param>
        /// <param name="columnType"></param>
        /// <param name="columnCode"></param>
        /// <param name="dto"></param>
        /// <returns></returns>
        public string SqlColumnType(string dataBase, string columnType, string columnCode, LayerFieldDto dto)
        {
            if (UtilityMessageConvert.Get("�ַ���") == columnType)
            {
                if (dataBase == "MySQL")
                    return "`" + dto.AttributeName + "` " + columnCode + "(" + dto.AttributeLength + ") " + dto.AttributeDefault + dto.AttributeIsNull;
                else
                    return "";
            }
            else if (UtilityMessageConvert.Get("������") == columnType)
            {
                if (dataBase == "MySQL")
                    return "`" + dto.AttributeName + "` " + columnCode + "(11)";
                else
                    return "";
            }
            else if (UtilityMessageConvert.Get("������") == columnType)
            {
                if (dataBase == "MySQL")
                    return "`" + dto.AttributeName + "` " + columnCode + "(11)";
                else
                    return "";
            }
            else if (UtilityMessageConvert.Get("��������") == columnType)
            {
                if (dataBase == "MySQL")
                    return "`" + dto.AttributeName + "` " + columnCode + "(" + dto.AttributeLength + "," + dto.AttributePrecision + ")";
                else
                    return "";
            }
            else if (UtilityMessageConvert.Get("˫������") == columnType)
            {
                if (dataBase == "MySQL")
                    return "`" + dto.AttributeName + "` " + columnCode + "(" + dto.AttributeLength + "," + dto.AttributePrecision + ")";
                else
                    return "";
            }
            else if (UtilityMessageConvert.Get("ʱ����") == columnType)
            {
                if (dataBase == "MySQL")
                    return "`" + dto.AttributeName + "` " + columnCode;
                else
                    return "";
            }
            return string.Empty;
        }

        /// <summary>
        /// ��������
        /// </summary>
        public async Task<LayerFieldDto> Update(LayerFieldComplexDto input)
        {
            try
            {
                LayerFieldEntity entity = new LayerFieldEntity
                {
                    Id = input.Id,
                    LayerID = input.LayerID,
                    AttributeName = input.AttributeName,
                    AttributeDesc = input.AttributeDesc,
                    AttributeType = input.AttributeType,
                    AttributeLength = input.AttributeLength,
                    AttributePrecision = input.AttributePrecision,
                    AttributeInputCtrl = input.AttributeInputCtrl,
                    AttributeInputMax = input.AttributeInputMax,
                    AttributeInputMin = input.AttributeInputMin,
                    AttributeDefault = input.AttributeDefault,
                    AttributeIsNull = input.AttributeIsNull,
                    AttributeInputFormat = input.AttributeInputFormat,
                    AttributeUnit = input.AttributeUnit,
                    AttributeCalComp = input.AttributeCalComp,
                    AttributeDataSource = input.AttributeDataSource,
                    AttributeDataType = input.AttributeDataType,
                    AttributeValueLink = input.AttributeValueLink,
                    Remark = input.Remark,
                    AttributeSort = input.AttributeSort
                    //CreateDT = input.CreateDT
                };
                var query = await _ILayerFieldRepository.UpdateAsync(entity);
                var result = entity.MapTo<LayerFieldDto>();
                return result;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }


        [UnitOfWork(isTransactional: false)]
        /// <summary>
        /// ��������
        /// </summary>
        /// <param name="listInput"></param>
        /// <returns></returns>
        public string GetMultiUpdateField(string layerID, string layerName, string user, List<LayerFieldComplexDto> listFieldInput)
        {
            bool success = true;
            string result = string.Empty, message = string.Empty, downloadUrl = string.Empty;

            try
            {
                #region [��֤����]

                DataTable dtValidError = dtValidData(layerID, user, listFieldInput);

                if (dtValidError.Rows.Count > 0)
                {
                    success = false;
                    NpoiExcelUtility excelUtility = new NpoiExcelUtility();
                    excelUtility.CreatExcelSheet(UtilityMessageConvert.Get("�ļ����Լ���쳣ͳ��"), dtValidError);
                    string ExcelPath = Path.Combine(System.Web.HttpContext.Current.Server.MapPath(System.Web.HttpContext.Current.Request.ApplicationPath.ToString() + ConfigurationManager.AppSettings["DownloadFile"].ToString()), "Excel");

                    if (!Directory.Exists(ExcelPath))
                    {
                        Directory.CreateDirectory(ExcelPath);
                    }
                    ExcelPath = Path.Combine(ExcelPath, layerName + ".xls");
                    if (!File.Exists(ExcelPath))
                    {
                        File.Delete(ExcelPath);
                    }
                    bool flag = excelUtility.SaveExcel(ExcelPath);

                    if (!flag)
                    {
                        message = UtilityMessageConvert.Get("�ļ����Լ�����쳣������Excel���쳣");
                    }
                    else
                    {
                        downloadUrl = "http://" + ConfigurationManager.AppSettings["PublishAddress"] + "/" + "DownloadFile" + "/" + "Excel" + "/" + layerName + ".xls";
                    }
                }

                #endregion

                #region [�����߼�]

                if (success)
                {
                    try
                    {
                        foreach (var item in listFieldInput)
                        {
                            LayerFieldDto dto = Update(item).Result;
                            string attributeID = dto.Id;
                            _ILayerFieldDictRepository.Delete(q => q.AttributeID == attributeID);

                            DataTable dtDict = DataTableConvertJson.JsonToDataTable(item.AttributeDict);
                            for (int k = 0; k < dtDict.Rows.Count; k++)
                            {
                                LayerFieldDictEntity layerFieldDict = new LayerFieldDictEntity();
                                layerFieldDict.Id = Guid.NewGuid().ToString();
                                layerFieldDict.AttributeID = dtDict.Rows[k][0].ToString();
                                layerFieldDict.FieldDictName = dtDict.Rows[k][1].ToString();
                                layerFieldDict.FieldDictDesc = dtDict.Rows[k][2].ToString();
                                _ILayerFieldDictRepository.Insert(layerFieldDict);
                            }
                        }
                    }
                    catch (Exception ex)
                    {
                        success = false;
                        message = UtilityMessageConvert.Get("�ļ����Ը����쳣������Excel���쳣");
                    }
                }

                #endregion

                string state = (success) ? UtilityMessageConvert.Get("ͨ��") : UtilityMessageConvert.Get("��ͨ��");

                result = "[{\"result\":\"" + state + "\",\"message\":\"" + message + "\",\"url\":\"" + downloadUrl + "\"}]";

                _IOperateLogAppService.WriteOperateLog(layerID, user, 1001, 1102, 1201, 1361, "(" + layerName + ")");
            }
            catch (Exception ex)
            {
                _IOperateLogAppService.WriteOperateLog(layerID, user, 1001, 1102, 1202, 1362, "(" + layerName + ")");
                Abp.Logging.LogHelper.LogException(ex);
            }
            return result;
        }

        //public static Client SoClient = null;

        /// <summary>
        /// ��ȡ��֤�쳣����
        /// </summary>
        /// <param name="layerID">ͼ��id</param>
        /// <param name="user">�û�</param>
        /// <param name="listField">���º�����Լ���</param>
        /// <returns></returns>
        private DataTable dtValidData(string layerID, string user, List<LayerFieldComplexDto> listField)
        {
            string msg = string.Empty;
            var entity = _ILayerContentRepository.Get(layerID);

            DataTable dtError = CreateErrorOutput(listField);

            try
            {
                if (entity != null)
                {
                    string strSQL = "SELECT * FROM " + entity.LayerAttrTable;

                    //MySqlHelper mySQL = new MySqlHelper();
                    //DataTable dt = mySQL.ExecuteQuery(strSQL);

                    PostgrelVectorHelper postgis = new PostgrelVectorHelper();
                    DataTable dt = postgis.getDataTable(strSQL);

                    if (dt.Rows.Count > 0)
                    {
                        string msgJSON = string.Empty;
                        //string _url = ConfigurationManager.AppSettings["NodeJSSocketServer"];
                        //Client _client = null;
                        string group = "SDMS_VALID";

                        #region [�ļ�����]

                        for (int i = 0; i < dt.Rows.Count; i++)
                        {
                            DataRow drField = dtError.NewRow();
                            msg = "";
                            foreach (LayerFieldComplexDto model in listField)
                            {
                                string colValue = dt.Rows[i][model.AttributeName].ToString();
                                drField["FID"] = i.ToString();
                                drField[model.AttributeName] = colValue;

                                #region [�����ֵ�ֵ]

                                DataTable dtDict = new DataTable();
                                if (!string.IsNullOrEmpty(model.AttributeDict))
                                {
                                    dtDict = DataTableConvertJson.JsonToDataTable(model.AttributeDict);
                                }
                                List<String> lstDetail = new List<string>();
                                string dictValue = string.Empty;
                                for (int j = 0; j < dtDict.Rows.Count; j++)
                                {
                                    dictValue += dtDict.Rows[j][1].ToString() + ",";
                                    lstDetail.Add(dtDict.Rows[j][1].ToString());
                                }

                                if (!string.IsNullOrEmpty(dictValue))
                                {
                                    dictValue = dictValue.TrimEnd(',');
                                }

                                #endregion

                                string dataTypeString = "673e95ba-67a8-11e7-8eb2-005056bb1c7e,7c6aa917-67a8-11e7-8eb2-005056bb1c7e,8f553741-67a8-11e7-8eb2-005056bb1c7e,9ffd11ea-67a8-11e7-8eb2-005056bb1c7e";
                                if (!string.IsNullOrEmpty(model.AttributeIsNull.ToString()) || !string.IsNullOrEmpty(model.AttributeInputCtrl.ToString()) || !string.IsNullOrEmpty(model.AttributeInputFormat.ToString()) || !string.IsNullOrEmpty(model.AttributeDataType.ToString()) || (!string.IsNullOrEmpty(model.AttributeInputMax.ToString()) && !string.IsNullOrEmpty(model.AttributeInputMin.ToString())) || !string.IsNullOrEmpty(model.AttributeCalComp.ToString()))
                                {
                                    if (!string.IsNullOrEmpty(model.AttributeIsNull.ToString()) && model.AttributeIsNull.ToString() == "F" && string.IsNullOrEmpty(colValue))
                                    {
                                        msg += "[" + model.AttributeName + "]" + ":��������֤[��ֵ]����Ϊ�ղ���" + ",";
                                    }
                                    else if (!string.IsNullOrEmpty(model.AttributeDataType.ToString()) && model.AttributeDataType.ToString() == "T" && !string.IsNullOrEmpty(colValue))
                                    {
                                        int count = 0;

                                        if (!string.IsNullOrEmpty(model.AttributeInputFormat.ToString()) && model.AttributeInputFormat.ToString() == "S")
                                        {
                                            foreach (var drrDict in lstDetail)
                                            {
                                                if (drrDict == colValue)
                                                {
                                                    count++;
                                                }
                                            }

                                            if (count > 1)
                                            {
                                                msg += "[" + model.AttributeName + "]" + ":��������֤[�����ʽ]��ѡ�������ֵ�ֵ[" + dictValue + "]����" + ",";
                                            }
                                            else if (count < 1)
                                            {
                                                msg += "[" + model.AttributeName + "]" + ":��������֤[�����ʽ]��ѡ�������ֵ�ֵ[" + dictValue + "]����" + ",";
                                            }
                                        }
                                        else if (!string.IsNullOrEmpty(model.AttributeInputFormat.ToString()) && model.AttributeInputFormat.ToString() == "M")
                                        {
                                            string fieldValue = colValue.Replace(",", ";").Replace("��", ";").Replace("��", ";");
                                            fieldValue = fieldValue.TrimEnd(';');
                                            string[] value = fieldValue.Split(';');
                                            foreach (var drrDict in lstDetail)
                                            {
                                                for (int j = 0; j < value.Length; j++)
                                                {
                                                    if (drrDict.ToString() == value[j])
                                                    {
                                                        count++;
                                                    }
                                                }
                                            }

                                            if (count <= 1 || value.Length == 1)
                                            {
                                                msg += "[" + model.AttributeName + "]" + ":��������֤[�����ʽ]��ѡ����,�ֵ�ֵ[" + dictValue + "]" + ",";
                                            }
                                            else if (count > 1 && count < value.Length)
                                            {
                                                msg += "[" + model.AttributeName + "]" + ":��������֤[�����ʽ]��ѡ����,�ֵ�ֵ[" + dictValue + "]����" + ",";
                                            }
                                        }
                                        else if (!string.IsNullOrEmpty(model.AttributeInputFormat.ToString()) || model.AttributeInputFormat.ToString() == "")
                                        {
                                            string fieldValue = colValue.Replace(",", ";").Replace("��", ";").Replace("��", ";");
                                            fieldValue = fieldValue.TrimEnd(';');
                                            string[] value = fieldValue.Split(';');
                                            foreach (var drrDict in lstDetail)
                                            {
                                                for (int j = 0; j < value.Length; j++)
                                                {
                                                    if (drrDict.ToString() == value[j])
                                                    {
                                                        count++;
                                                    }
                                                }
                                            }

                                            if (count == 0 || count != value.Length)
                                            {
                                                msg += "[" + model.AttributeName + "]" + ":��������֤[�����ʽ]�������ֵ�ֵ[" + dictValue + "]����" + ",";
                                            }
                                        }
                                    }
                                    else if ((string.IsNullOrEmpty(model.AttributeDataType.ToString()) || model.AttributeDataType.ToString() == "F") && (!string.IsNullOrEmpty(model.AttributeInputMax.ToString()) && !string.IsNullOrEmpty(model.AttributeInputMin.ToString()))
                                        && dataTypeString.Contains(model.AttributeType.ToString()))
                                    {
                                        string intType = "673e95ba-67a8-11e7-8eb2-005056bb1c7e,7c6aa917-67a8-11e7-8eb2-005056bb1c7e";
                                        string floatType = "8f553741-67a8-11e7-8eb2-005056bb1c7e,9ffd11ea-67a8-11e7-8eb2-005056bb1c7e";
                                        if (intType.Contains(model.AttributeType.ToString()))
                                        {
                                            if (int.Parse(colValue) < int.Parse(model.AttributeInputMin.ToString()) || int.Parse(colValue) > int.Parse(model.AttributeInputMax.ToString()))
                                            {
                                                msg += "[" + model.AttributeName + "]" + ":��������֤[ֵ������:" + model.AttributeInputMax.ToString() + "��ֵ������:" + model.AttributeInputMin.ToString() + "]ֵ����" + ",";
                                            }
                                        }
                                        else if (floatType.Contains(model.AttributeType.ToString()))
                                        {
                                            if (decimal.Parse(colValue) < decimal.Parse(model.AttributeInputMin.ToString()) || decimal.Parse(colValue) > decimal.Parse(model.AttributeInputMax.ToString()))
                                            {
                                                msg += "[" + model.AttributeName + "]" + ":��������֤[ֵ������:" + model.AttributeInputMax.ToString() + "��ֵ������:" + model.AttributeInputMin.ToString() + "]ֵ����" + ",";
                                            }
                                        }
                                    }
                                    else if (!string.IsNullOrEmpty(model.AttributeCalComp.ToString()) && !string.IsNullOrEmpty(colValue))
                                    {
                                        string express = model.AttributeCalComp.ToString();

                                        foreach (var item in listField)
                                        {
                                            express = express.Replace("{" + item.AttributeName.ToString() + "}", dt.Rows[i][item.AttributeName.ToString()].ToString());
                                        }
                                        string strDataType = "673e95ba-67a8-11e7-8eb2-005056bb1c7e,7c6aa917-67a8-11e7-8eb2-005056bb1c7e,8f553741-67a8-11e7-8eb2-005056bb1c7e,9ffd11ea-67a8-11e7-8eb2-005056bb1c7e";
                                        foreach (var item in listField)
                                        {
                                            if (!strDataType.Contains(item.AttributeType.ToString()) && express.Contains("{" + item.AttributeName.ToString() + "}"))
                                            {
                                                express = express.Replace("{" + item.AttributeName.ToString() + "}", ("\"" + dt.Rows[i][item.AttributeName.ToString()].ToString() + "\""));
                                            }
                                            else
                                            {
                                                express = express.Replace("{" + item.AttributeName.ToString() + "}", dt.Rows[i][item.AttributeName.ToString()].ToString());
                                            }
                                        }

                                        CSScriptHelper css = new CSScriptHelper();
                                        object res = css.Calutrue(express);

                                        if (!colValue.Equals(res.ToString()))
                                        {
                                            string resValue = res.ToString();
                                            if (resValue.Contains("#"))
                                            {
                                                msg += "[" + model.AttributeName + "]" + ":��������֤[��ʽ]��ʽ���쳣" + ",";
                                            }
                                            else
                                            {
                                                msg += "[" + model.AttributeName + "]" + ":��������֤[��ʽ]����ֵ " + resValue + " ����" + ",";
                                            }
                                        }
                                    }
                                }
                                else
                                {
                                    continue;
                                }
                            }

                            if (!string.IsNullOrEmpty(msg))
                            {
                                drField["ErrorMsg"] = msg.TrimEnd(',');
                                dtError.Rows.Add(drField);
                                foreach (DataColumn column in dtError.Columns)
                                {
                                    msgJSON += column.ColumnName + ":" + drField[column.ColumnName].ToString() + " ";
                                }
                                msgJSON += "\t";
                            }

                            //if ((i + 1) % 50 == 0 || ((dt.Rows.Count - i - 1) == 0))
                            //{
                            //    #region [����NodeJS������Ϣ]

                            //    if (SoClient == null || !SoClient.IsConnected)
                            //    {
                            //        SoClient = new Client(_url);
                            //        SoClient.Connect("/" + group);
                            //        //int connTime = 0;
                            //        //while (!_client.IsConnected && connTime <= 50)
                            //        //{
                            //        //    _client.Connect("/" + group);
                            //        //    connTime++;
                            //        //}
                            //    }

                            //    if ((dt.Rows.Count - i - 1) == 0)
                            //    {
                            //        msgJSON += "#finish#";
                            //    }

                            //    System.Threading.Thread.Sleep(100);

                            //    if (SoClient != null && SoClient.IsConnected)
                            //    {
                            //        //����Ϣ
                            //        SoClient.Emit("send", new NodeJSHelper.MessageJSON(group, user, msgJSON).ToJsonString());
                            //        //_client.On("connect", (fn) =>
                            //        //{
                            //        //    //����Ϣ
                            //        //    _client.Emit("send", new NodeJSHelper.MessageJSON(group, user, msgJSON).ToJsonString());
                            //        //});
                            //    }

                            //    msgJSON = "";

                            //    #endregion
                            //}
                        }
                        #endregion
                    }
                }

            }
            catch (Exception ex)
            {
                Abp.Logging.LogHelper.LogException(ex);
            }
            return dtError;
        }

        /// <summary>
        /// �����쳣�����
        /// </summary>
        /// <param name="dtAttField"></param>
        /// <returns></returns>
        private DataTable CreateErrorOutput(List<LayerFieldComplexDto> listField)
        {
            DataTable dt = new DataTable();
            DataColumn dc;

            dc = new DataColumn("ErrorMsg", typeof(System.String));
            dt.Columns.Add(dc);

            dc = new DataColumn("FID", typeof(System.String));
            dt.Columns.Add(dc);

            foreach (var item in listField)
            {
                dc = new DataColumn(item.AttributeName.ToString(), typeof(System.String));
                dt.Columns.Add(dc);
            }

            return dt;
        }

        /// <summary>
        ///Node JS Server����
        /// </summary>
        /// <returns></returns>
        public string GetNodeJSServerConfig()
        {
            //string socketServer = ConfigurationManager.AppSettings["NodeJSSocketServer"];
            //string module = "SDMS_VALID";

            //return socketServer + "##" + module;
            return string.Empty;
        }

        /// <summary>
        /// ��������ļ�
        /// </summary>
        /// <param name="layerID"></param>
        /// <param name="filePath"></param>
        /// <returns></returns>
        public bool ImportLayerData(string layerID, string filePath)
        {
            bool bFlag = false;

            try
            {
                var layer = _ILayerContentRepository.Get(layerID);
                var layerField = _ILayerFieldRepository.GetAll().Where(q => q.LayerID == layerID).ToList();

                if (layer != null)
                {
                    string tableName = layer.LayerAttrTable;
                    string splitalTable = layer.LayerSpatialTable;
                    PostgrelVectorHelper pvh = new PostgrelVectorHelper();
                    int rowCount = pvh.DataRowSQL(tableName) + 1;

                    string strMySQL = "", strPostGIS = "", strMySqlGeo = "";

                    ShpHelper shp = new ShpHelper(filePath);
                    var listLayerData = shp.GetAllFeatures();
                    int RowIndex = 0;
                    Dictionary<string, string> dicAttriList = shp.DataList();

                    ///�ϴ������ļ���λ����Ʊ���λ����
                    if (dicAttriList.Count == layerField.Count)
                    {
                        foreach (var layerData in listLayerData)
                        {
                            string guid = Guid.NewGuid().ToString();

                            string strSql = "insert into {0} ({1}) values({2},";

                            string strColumn = "";
                            string strMiddle = "";

                            foreach (var item in layerField)
                            {
                                strColumn += item.AttributeName + ",";
                                if (string.IsNullOrEmpty(dicAttriList[item.AttributeName]))
                                {
                                    strColumn += item.AttributeName + ",";
                                    string strValue = layerData.GetFieldAsString(item.AttributeName);
                                    if (dicAttriList[item.AttributeName] == "OFTString")
                                    {
                                        if (strValue.Contains("'"))
                                            strValue = strValue.Replace("'", "''");

                                        strMiddle += string.Format("'{0}',", strValue);
                                    }
                                    else
                                    {
                                        if (string.IsNullOrEmpty(strValue))
                                        {
                                            strMiddle += string.Format(" '{0}',", strValue);
                                        }
                                        else
                                        {
                                            strMiddle += string.Format(" {0},", strValue);
                                        }
                                    }

                                    //OSGeo.OGR.FieldType
                                    //    OFTInteger = 0,
                                    //    OFTIntegerList = 1,
                                    //    OFTReal = 2,
                                    //    OFTRealList = 3,
                                    //    OFTString = 4,
                                    //    OFTStringList = 5,
                                    //    OFTWideString = 6,
                                    //    OFTWideStringList = 7,
                                    //    OFTBinary = 8,
                                    //    OFTDate = 9,
                                    //    OFTTime = 10,
                                    //    OFTDateTime = 11,
                                }
                            }

                            if (strColumn.Length > 0)
                            {
                                strColumn = strColumn.Substring(0, strColumn.Length - 1);
                            }

                            #region [MySQL]

                            strMySQL += String.Format(strSql, tableName, strColumn, guid);

                            strMySQL += ")";

                            string geoGuid = Guid.NewGuid().ToString();

                            strMySqlGeo = string.Format("insert into {0} values({1},{2},{3})", splitalTable, strColumn, geoGuid, guid, layerData.GetGeometryRef());

                            #endregion

                            #region [PostGIS]

                            strPostGIS += String.Format(strSql, tableName, strColumn, rowCount + RowIndex);
                            strPostGIS += String.Format("'{0}'", layerData.GetGeometryRef());
                            strPostGIS += ")";

                            #endregion

                            RowIndex++;
                        }

                        var result = _ILayerFieldRepository.ExecuteSql(strMySQL + strMySqlGeo, tableName, splitalTable);
                        bFlag = pvh.ExceuteSQL(strPostGIS, tableName);
                    }

                }
            }
            catch (Exception ex)
            {
                bFlag = false;
            }
            return bFlag;
        }

        /// <summary>
        /// ɾ������
        /// </summary>
        public async Task Delete(string id)
        {
            try
            {
                await _ILayerFieldRepository.DeleteAsync(id);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task DeleteByLayerID(string layerID)
        {
            #region[ɾ�����ñ�����]

            await _ILayerFieldRepository.DeleteAsync(q => q.LayerID == layerID);

            #endregion
        }

        /// <summary>
        /// ����shpFile
        /// </summary>
        /// <param name="shpFileName"></param>
        /// <returns></returns>
        public LayerFieldListDto GetLayerFieldByFileName(string shpFileName)
        {
            bool Status = false;
            string Message = "";
            List<LayerFieldDto> listDTO = new List<LayerFieldDto>();
            if (IsFileExist(shpFileName, ref shpFileName))
            {
                try
                {
                    InfoEarthFrame.Common.ShpUtility.ShpReader shpReader = new InfoEarthFrame.Common.ShpUtility.ShpReader(shpFileName);
                    // ���ʸ���ļ�����Ч��
                    if (!shpReader.IsValidDataSource())
                    {
                        Status = true;
                        Message = UtilityMessageConvert.Get("�ϴ��ļ������쳣(�ϴ���ʸ���ļ���Ч)");
                    }
                    else
                    {
                        string csSrc = shpReader.GetSridWkt();
                        string SpatialRefence = System.Configuration.ConfigurationManager.AppSettings["SpatialRefence"].ToString();

                        if (!csSrc.Contains(SpatialRefence))
                        {
                            Status = true;
                            Message = UtilityMessageConvert.Get("�ϴ��ļ������쳣(��ϵͳĬ������ϵ��ƥ��)");
                        }
                        else
                        {
                            var listDataType = _IDicDataCodeRepository.GetAll().Where(q => q.DataTypeID == "73160096-67a5-11e7-8eb2-005056bb1c7e").ToList();

                            //����
                            Dictionary<string, string> attr = shpReader.GetAttributeType();

                            List<AttributeModel> lstattr = shpReader.GetOneFeatureAttributeModel(0);

                            foreach (AttributeModel item in lstattr)
                            {
                                LayerFieldDto dto = new LayerFieldDto();
                                dto.AttributeName = item.AttributeName;
                                string dataType = item.AttributeType.ToString();
                                dto.AttributeLength = item.AttributeWidth.ToString();
                                dto.AttributePrecision = (item.AttributePrecision.ToString() == "11") ? "6" : item.AttributePrecision.ToString();

                                switch (dataType)
                                {
                                    case "OFTDate":
                                        dto.AttributeTypeName = UtilityMessageConvert.Get("ʱ����");
                                        break;
                                    case "OFTDateTime":
                                        dto.AttributeTypeName = UtilityMessageConvert.Get("ʱ����");
                                        break;
                                    case "OFTInteger":
                                        dto.AttributeTypeName = UtilityMessageConvert.Get("������");
                                        break;
                                    case "OFTIntegerList":
                                        dto.AttributeTypeName = UtilityMessageConvert.Get("������");
                                        break;
                                    case "OFTReal":
                                        if (item.AttributeWidth <= 13)
                                        {
                                            dto.AttributeTypeName = UtilityMessageConvert.Get("��������");
                                        }
                                        else
                                        {
                                            dto.AttributeTypeName = UtilityMessageConvert.Get("˫������");
                                        }
                                        break;
                                    case "OFTString":
                                        dto.AttributeTypeName = UtilityMessageConvert.Get("�ַ���");
                                        break;
                                    case "OFTTime":
                                        dto.AttributeTypeName = UtilityMessageConvert.Get("ʱ����");
                                        break;
                                    default:
                                        dto.AttributeTypeName = UtilityMessageConvert.Get("�ַ���");
                                        break;
                                }
                                Predicate<DicDataCodeEntity> dataTypeEntity = delegate (DicDataCodeEntity entity)
                                {
                                    return entity.CodeName.Equals(dto.AttributeTypeName);
                                };

                                DicDataCodeEntity dicEntity = listDataType.Find(dataTypeEntity);

                                if (dicEntity != null)
                                {
                                    dto.AttributeType = dicEntity.Id;
                                }

                                listDTO.Add(dto);
                            }
                        }
                    }
                }
                catch (Exception ex)
                {
                    Status = true;
                    Message = UtilityMessageConvert.Get("�ϴ��ļ������쳣(�ϴ���ʸ���ļ���Ч)");
                }
            }
            else
            {
                Status = true;
                Message = UtilityMessageConvert.Get("�ϴ��ļ������쳣(�ϴ���Ҫ�ļ������ڻ�����)");
            }
            LayerFieldListDto lstDTO = new LayerFieldListDto();
            lstDTO.LayerField = listDTO;
            lstDTO.Message = Message;
            lstDTO.IsError = Status;
            return lstDTO;
        }

        public bool IsFileExist(string filePath, ref string filePhysicPath)
        {
            string name = filePath.Substring(0, filePath.LastIndexOf("."));

            string fileFullName = ConfigurationManager.AppSettings["UploadFilePath"].ToString();
            //string path = uploadFilePath + "/" + filePath.Substring(0, filePath.Length-4);

            filePhysicPath = Path.Combine(fileFullName, Path.GetFileName(filePath));
            var list = _IDicDataCodeRepository.GetAll().Where(q => q.DataTypeID == "b9ef9c7c-67b3-11e7-8eb2-005056bb1c7e").ToList();

            if (list.Count > 0)
            {
                foreach (var item in list)
                {
                    string fileName = name + "." + item.CodeValue;
                    string uploadFilePath = "";
                    if (!fileName.Contains(fileFullName))
                    {
                        uploadFilePath = Path.Combine(fileFullName, Path.GetFileName(fileName));
                    }
                    if (!File.Exists(uploadFilePath))
                    {
                        return false;
                    }
                }
                return true;
            }
            else
            {
                return false;
            }
        }

        /// <summary>
        /// ��֤���Ա��ʽ
        /// </summary>
        /// <param name="InputCalComp">���ʽ�ַ���</param>
        /// <returns>���ʽ��������true,�쳣����false</returns>
        public bool CheckCalComp(string InputCalComp)
        {
            string express = string.Empty;
            if (!string.IsNullOrEmpty(InputCalComp))
            {
                express = HttpContext.Current.Server.UrlDecode(InputCalComp);
                express = express.Replace("%#", "+");
            }
            try
            {
                CSScriptHelper css = new CSScriptHelper();
                object res = css.Calutrue(express);

                if (res.ToString().Contains("#"))
                {
                    return false;
                }
                else
                {
                    return true;
                }
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        #endregion

        #region GeoServerRest
        /// <summary>
        /// ����ͼ��
        /// </summary>
        /// <param name="layerId">ͼ����</param>
        /// <returns>true�������ɹ���false������ʧ��</returns>
        public bool PublicLayer(string layerId, ListResultOutput<LayerFieldDto> listDto)
        {
            string layerType = string.Empty;
            string layerName = string.Empty;
            var layer = _ILayerContentRepository.Get(layerId);
            if (layer != null)
            {
                layerName = layer.LayerAttrTable;
            }
            var dic = _IDicDataCodeRepository.Get(layer.DataType);
            if (dic != null)
            {
                layerType = dic.CodeName;
            }
            return _geoServerHelper.PublicLayer(layerName, layer.LayerName, listDto, layerType);
        }

        /// <summary>
        /// ɾ��ͼ��
        /// </summary>
        /// <param name="workSpace">����������</param>
        /// <param name="dataStore">���ݴ洢����</param>
        /// <param name="layer">ͼ������</param>
        /// <returns>true��ɾ���ɹ���false��ɾ��ʧ��</returns>
        public bool DeleteLayer(string layer)
        {
            return _geoServerHelper.DeleteLayer(layer);
        }

        #endregion
    }
}

