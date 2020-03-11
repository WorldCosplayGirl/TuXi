using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using InfoEarthFrame.Application.DataStyleApp.Dtos;
using InfoEarthFrame.Common;
using InfoEarthFrame.Core.Entities;

namespace InfoEarthFrame.Application.DataStyleApp
{
    public interface IDataStyleAppService : IApplicationService
    {
        #region �Զ�����
        ListResultOutput<DataStyleDto> GetAllList(string name);

        bool IsExists(string name);

        PagedResultOutput<DataStyleDto> GetAllListPage(DataStyleInputDto input, int PageSize, int PageIndex);

        Task<DataStyleOutputDto> GetDetailById(string id);

        Task<DataStyleOutputDto> GetDetailByLayerID(string layerID);

        Task<DataStyleDto> Insert(DataStyleInputDto input);

        Task<DataStyleDto> Update(DataStyleInputDto input);

        Task<bool> Delete(string id, string user);

        ListResultOutput<ColorRampInfo> GetRandomColorRamps();

        ColorRampInfo GetRandomColorRampsByName(string colorName, int count);

        ListResultOutput<ColorRampInfo> GetLinearColorRamps();

        /// <summary>
        /// ��ȡ������ɫ��
        /// </summary>
        /// <returns></returns>
        ColorRampInfo GetLinearColorRampsByName(string colorName, int count);

        /// <summary>
        /// ��ȡ�����ļ���Ŀ¼
        /// </summary>
        List<string> GetAllFolders();

        /// <summary>
        /// �����ļ���
        /// </summary>
        /// <param name="folderName">�ļ�������</param>
        /// <returns></returns>
        bool AddFolder(string folderName);

        /// <summary>
        /// �޸��ļ�������
        /// </summary>
        /// <param name="oldName">������</param>
        /// <param name="newName">������</param>
        /// <returns></returns>
        bool UpdateFolder(string oldName, string newName);

        /// <summary>
        /// ɾ���ļ���
        /// </summary>
        /// <param name="folderName">�ļ�������</param>
        /// <returns></returns>
        bool DeleteFolder(string folderName);

        /// <summary>
        /// ��ȡָ��Ŀ¼�����ļ�
        /// </summary>
        /// <param name="folder">�ļ�������</param>
        /// <returns></returns>
        List<DataStyleOutputImgFileInfo> GetAllFiles(string folderName);

        /// <summary>
        /// �޸��ļ�����
        /// </summary>
        /// <param name="folderName">�ļ�������</param>
        /// <param name="oldName">���ļ�����</param>
        /// <param name="newName">���ļ�����</param>
        /// <returns></returns>
        bool UpdateFile(string folderName, string oldName, string newName);

        /// <summary>
        ///  ɾ��ָ���ļ�
        /// </summary>
        /// <param name="folder">�ļ�������</param>
        /// <param name="fileName">�ļ�����</param>
        /// <returns></returns>
        bool DeleteFile(string folderName, string fileName);
        #endregion

        /// <summary>
        /// ��ҳ��ȡͼ����������
        /// </summary>
        /// <param name="layerId">ͼ��id</param>
        /// <param name="layerAttr">������</param>
        /// <param name="colorName">ɫ������</param>
        /// <param name="colorType">ɫ������</param>
        /// <param name="style">��ɫ�ַ���</param>
        /// <returns></returns>
        string GetDataAttributesPage(string layerId, string layerAttr, string colorName, string style, int PageSize, int PageIndex);

        /// <summary>
        /// ��ȡͼ����������
        /// </summary>
        /// <param name="layerId">ͼ��id</param>
        /// <param name="layerAttr">������</param>
        /// <param name="colorName">ɫ������</param>
        /// <param name="colorType">ɫ������</param>
        /// <param name="style">��ɫ�ַ���</param>
        /// <returns></returns>
        object GetDataAttributes(string layerId, string layerAttr, string colorName, string style);

        /// <summary>
        /// ��ȡͼ����������
        /// </summary>
        /// <param name="styleId">��ʽID</param>
        /// <returns></returns>
        object GetDataAttributesById(string styleId);
        string GetXmlContent(DataStyleInputDto input);

        void InsertGeoServerStyle(DataStyleInputDto input);

        void InsertStyle(string styleName, string styleContent);

        Task<PagedResultOutput<DataStyleOutputDto>> GetDataStylePageListByCondition(QueryDataStyleInputParamDto input);

        //Task<DataStyleDto> Insert(DataStyleDto input);
        //Task<DataStyleDto> Update(DataStyleDto input);

        string GetSLDContentByLayerIdOrTableName(string layerId,string tableName);

        bool IsDataStyleExists(string styleName);
    }
}

