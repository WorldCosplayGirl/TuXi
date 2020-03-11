using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using InfoEarthFrame.Application.MapReleationApp.Dtos;

namespace InfoEarthFrame.Application.MapReleationApp
{
    public interface IMapReleationAppService : IApplicationService
    {
        #region �Զ�����
        Task<ListResultOutput<MapReleationDto>> GetAllList();

        Task<MapReleationOutputDto> GetDetailById(string id);

        bool GetMapReleationByStyle(string styleID);

        ListResultOutput<MapReleationDto> GetAllListByMapId(string mapId);

        ListResultOutput<MapReleationDto> GetAllListBylayerID(string layerId);

        MapReleationDto Insert(MapReleationInputDto input);

        bool MultiInsert(List<MapReleationInputDto> listInput);

        Task<MapReleationDto> Update(MapReleationInputDto input, string user);

        Task<bool> MultiDelete(List<MapReleationInputDto> listInput);

        Task Delete(string id, string user);

        Task DeleteByMapID(string mapID);
        #endregion

        #region GeoServerRest
        /// <summary>
        /// ������ͼ
        /// </summary>
        /// <param name="mapId">��ͼ���</param>
        /// <returns></returns>
        bool PublicMap(string mapId);

        /// <summary>
        /// �ı�ͼ������ʽ
        /// </summary>
        /// <param name="mapid">��ͼid</param>
        /// <param name="layersId">ͼ��id����</param>
        /// <param name="stylesId">��ʽid����</param>
        /// <returns></returns>
        bool ChangeStyle(string mapid, string layersId, string stylesId);

        bool ChangeStyleObject(StyleInputDto inputDto);

        /// <summary>
        /// �ı�ͼ���ϵ
        /// </summary>
        bool MultiUpdate(string mapId, List<MapReleationInputDto> listInput, string user);

        bool RefreshMap(string mapId, string user);

        /// <summary>
        /// ��ѯ��ͼ�Ƿ�����Ƭ����
        /// </summary>
        /// <param name="mapId"></param>
        /// <returns></returns>
        bool IsExistTilesTask(string mapId);
        #endregion
    }
}

