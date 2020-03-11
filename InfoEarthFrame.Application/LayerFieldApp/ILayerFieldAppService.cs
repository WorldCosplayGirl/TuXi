using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using InfoEarthFrame.Application.LayerFieldApp.Dtos;

namespace InfoEarthFrame.Application.LayerFieldApp
{
    public interface ILayerFieldAppService : IApplicationService
    {
        #region �Զ�����
        Task<ListResultOutput<LayerFieldDto>> GetAllList();

        Task<LayerFieldOutputDto> GetDetailById(string id);

        ListResultOutput<LayerFieldDto> GetDetailByLayerID(string layerID);

        ListResultOutput<LayerFieldDto> GetFieldDictByLayerID(string layerID);

        Task<LayerFieldDto> Insert(LayerFieldInputDto input);

        bool MultiInsert(List<LayerFieldInputDto> listInput);

        Task<LayerFieldDto> Update(LayerFieldComplexDto input);

        string GetMultiUpdateField(string layerID,string layerName,string user,List<LayerFieldComplexDto> listFieldInput);

        string GetNodeJSServerConfig();

        Task Delete(string id);

        Task DeleteByLayerID(string layerID);
        LayerFieldListDto GetLayerFieldByFileName(string shpFileName);

        #endregion

        bool CreateTable(string layerID);

        bool CheckCalComp(string InputCalComp);

        #region GeoServerRest
        /// <summary>
        /// ����ͼ��
        /// </summary>
        /// <param name="layerId">ͼ����</param>
        /// <returns>true�������ɹ���false������ʧ��</returns>
        bool PublicLayer(string layerId, ListResultOutput<LayerFieldDto> listDto);
        /// <summary>
        /// ɾ��ͼ��
        /// </summary>
        /// <param name="workSpace">����������</param>
        /// <param name="dataStore">���ݴ洢����</param>
        /// <param name="layer">ͼ������</param>
        /// <returns>true��ɾ���ɹ���false��ɾ��ʧ��</returns>
        bool DeleteLayer(string layer);

        #endregion
    }
}

