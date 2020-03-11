using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Configuration;
using System.Data;
using System.Text;
using Newtonsoft.Json;
using Abp.Application.Services;

namespace InfoEarthFrame.Application.GetConfig
{
    public class GetConfigAppService : ApplicationService, IGetConfigAppService
    {
        public string GetGeoServiceDictionary()
        {
            string GeoServerIp = ConfigurationManager.AppSettings["GeoServerIp"].ToString();
            string GeoServerPort = ConfigurationManager.AppSettings["GeoServerPort"].ToString();
            string GeoWorkSpace = ConfigurationManager.AppSettings["GeoWorkSpace"].ToString();
            string GeoiTelluro = ConfigurationManager.AppSettings["PublishAddress"].ToString();

            Dictionary<string, string> dict = new Dictionary<string, string>();
            dict.Add("GEOSERVERIP", GeoServerIp);
            dict.Add("GEOSERVERPORT", GeoServerPort);
            dict.Add("GEOWORKSPACE", GeoWorkSpace);
            dict.Add("GEOITELLURO", GeoiTelluro);

            return JsonConvert.SerializeObject(dict);
        }

        /// <summary>
        /// ���ݽڵ����ƻ�ȡweb.config �����ļ� AppSettings �ڵ������Ϣ
        /// </summary>
        /// <param name="nodeName">�ڵ�����</param>
        /// <returns></returns>
        public string GetAppSettingsNode(string nodeName)
        {
            return ConfigurationManager.AppSettings.Get(nodeName);
        }

        /// <summary>
        /// ��ȡ����ͼ��ŵ�ַ���·��
        /// </summary>
        /// <returns></returns>
        public string GetMapThumbnailRelativelyPath()
        {
            string relativelyPath = ConfigurationManager.AppSettings["ThumbnailPath"].ToString().Replace(AppDomain.CurrentDomain.BaseDirectory, "");

            return relativelyPath + "/map";
        }
    }
}

