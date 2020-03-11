using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using InfoEarthFrame.Core.Entities;
using InfoEarthFrame.Common.Style;

namespace InfoEarthFrame.Application.DataStyleApp.Dtos
{
    [AutoMapFrom(typeof(DataStyleEntity))]
    public class DataStyleOutputDto : IOutputDto
    {
        /// <summary>
        /// 
        /// </summary>
        public string Id { get; set; }
        /// <summary>
        /// ��ʽ����
        /// </summary>
        public string StyleName { get; set; }
        /// <summary>
        /// ��ʽ����
        /// </summary>
        public string StyleType { get; set; }
        /// <summary>
        /// ��ʽ��������
        /// </summary>
        public string StyleTypeName { get; set; }
        /// <summary>
        /// ��ʽ����
        /// </summary>
        public string StyleContent { get; set; }
        /// <summary>
        /// ��ʽ����
        /// </summary>
        public string StyleDesc { get; set; }
        /// <summary>
        /// ����ʱ��
        /// </summary>
        public DateTime? CreateDT { get; set; }
        /// <summary>
        /// ������
        /// </summary>
        public string CreateBy { get; set; }
        /// <summary>
        /// ��ʽ����
        /// </summary>
        public string StyleDataType { get; set; }
        /// <summary>
        /// ��ʽ��������
        /// </summary>
        public string StyleConfigType { get; set; }
        /// <summary>
        /// ��ʽĬ��ͼ��
        /// </summary>
        public string StyleDefaultLayer { get; set; }
        public string StyleDefaultLayerName { get; set; }
        /// <summary>
        /// ��ʽ��Ⱦ�ֶ�
        /// </summary>
        public string StyleRenderField { get; set; }
        public string StyleRenderFieldName { get; set; }
        /// <summary>
        /// ��ʽ��Ⱦ��ɫ��
        /// </summary>
        public string StyleRenderColorBand { get; set; }
        /// <summary>
        /// ��ʽ��ȾԤ�����
        /// </summary>
        public string StyleRenderRule { get; set; }
        ///// <summary>
        ///// ͼ����������
        ///// </summary>
        //public StyledLayerDescriptor LayerDescriptor { get; set; }

        public InfoEarthFrame.Application.LayerContentApp.Dtos.LayerContentOutputDto LayerContent { get; set; }


        public InfoEarthFrame.Application.DataStyleApp.DataStyleAppService.StyleInfo StyleInfo { get; set; }

        public List<InfoEarthFrame.Application.DataStyleApp.DataStyleAppService.RuleData> RuleDatas { get; set; }
    }
    public class DataStyleOutputImgFileInfo
    {
        /// <summary>
        /// ͼƬ����
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// ͼƬ����·��
        /// </summary>
        public string Path { get; set; }
    }
}

