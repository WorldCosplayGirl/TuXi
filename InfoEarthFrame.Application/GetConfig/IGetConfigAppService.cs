using Abp.Application.Services;
using System;

namespace InfoEarthFrame.Application.GetConfig
{
    public interface IGetConfigAppService : IApplicationService
    {
        #region �Զ�����
        string GetGeoServiceDictionary();

        /// <summary>
        /// ���ݽڵ����ƻ�ȡweb.config �����ļ� AppSettings �ڵ������Ϣ
        /// </summary>
        /// <param name="nodeName"></param>
        /// <returns></returns>
        string GetAppSettingsNode(string nodeName);

        /// <summary>
        /// ��ȡ����ͼ��ŵ�ַ���·��
        /// </summary>
        /// <returns></returns>
        string GetMapThumbnailRelativelyPath();
        #endregion
    }
}

