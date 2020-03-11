using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Application.Services.Dto;
using InfoEarthFrame.Common.Style;

namespace InfoEarthFrame.Application.DataStyleApp.Dtos
{
    public class QueryDataStyleInputParamDto
    {
        public string StyleName { get; set; }
        public string StyleType { get; set; }
        public string Createby { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public int pageIndex { get; set; }
        public int pageSize { get; set; }
    }

    public class UpdateDefaultStyleDto
    {
        public string layerID { get; set; }

        public string styleID { get; set; }

        public string user { get; set; }
    }
	public class DataStyleInputDto : IInputDto
	{
		/// <summary>
		/// 
		/// </summary>
		[StringLength(36)]
		public string Id { get; set; }
		/// <summary>
        /// ��ʽ����
		/// </summary>
		[StringLength(50)]
		public string StyleName { get; set; }
        /// <summary>
        /// ��ʽ����
        /// </summary>
        [StringLength(36)]
        public string StyleType { get; set; }
		/// <summary>
        /// ��ʽ����
		/// </summary>
		//[StringLength(40000)]
		public string StyleContent { get; set; }
		/// <summary>
        /// ��ʽ����
		/// </summary>
		[StringLength(100)]
		public string StyleDesc { get; set; }
		/// <summary>
        /// ����ʱ��
		/// </summary>
		public DateTime? CreateDT { get; set; }
		/// <summary>
        /// ������
		/// </summary>
		[StringLength(36)]
		public string CreateBy { get; set; }
        /// <summary>
        /// ��ʽ����
        /// </summary>
        [StringLength(36)]
        public string StyleDataType { get; set; }

        /// <summary>
        /// ��ʽ��������
        /// </summary>
        [StringLength(36)]
        public string StyleConfigType { get; set; }
        /// <summary>
        /// ��ʽĬ��ͼ��
        /// </summary>
        [StringLength(36)]
        public string StyleDefaultLayer { get; set; }
        /// <summary>
        /// ��ʽ��Ⱦ�ֶ�
        /// </summary>
        [StringLength(50)]
        public string StyleRenderField { get; set; }

        public string StyleRenderFieldName { get; set; }

        /// <summary>
        /// ��ʽ��Ⱦ��ɫ��
        /// </summary>
        [StringLength(100)]
        public string StyleRenderColorBand { get; set; }
        /// <summary>
        /// ��ʽ��ȾԤ�����
        /// </summary>
        [StringLength(500)]
        public string StyleRenderRule { get; set; }

        public string DefaultStyleId { get; set; }
        ///// <summary>
        ///// ͼ����������
        ///// </summary>
        //public StyledLayerDescriptor LayerDescriptor { get; set; }

        public InfoEarthFrame.Application.DataStyleApp.DataStyleAppService.StyleInfo StyleInfo { get; set; }

        public List<InfoEarthFrame.Application.DataStyleApp.DataStyleAppService.RuleData> RuleDatas { get; set; }
    }
}

