using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Application.Services.Dto;
using InfoEarthFrame.Common.Style;

namespace InfoEarthFrame.Application.DataStyleApp.Dtos
{
	public class DataStyleDto : EntityDto
	{
        public string CurrentStyleId { get; set; }
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
        /// <summary>
        /// ��ʽ��Ⱦ�ֶ�
        /// </summary>
        public string StyleRenderField { get; set; }
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

        public bool LAY_CHECKED
        {
            get {
                return CurrentStyleId == Id;
            }
        }

	}
}

