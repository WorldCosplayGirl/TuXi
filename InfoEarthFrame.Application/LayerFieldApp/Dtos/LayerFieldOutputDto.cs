using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using InfoEarthFrame.Core.Entities;

namespace InfoEarthFrame.Application.LayerFieldApp.Dtos
{
	[AutoMapFrom(typeof(LayerFieldEntity))]
	public class LayerFieldOutputDto : IOutputDto
	{
		/// <summary>
		/// 
		/// </summary>
		public string Id { get; set; }
		/// <summary>
        /// ͼ��Ŀ¼ID
		/// </summary>
		public string LayerID { get; set; }
		/// <summary>
        /// ��������
		/// </summary>
		public string AttributeName { get; set; }
		/// <summary>
        /// ��������
		/// </summary>
		public string AttributeDesc { get; set; }
		/// <summary>
        /// ��������
		/// </summary>
		public string AttributeType { get; set; }
		/// <summary>
        /// ���Գ���
		/// </summary>
		public string AttributeLength { get; set; }
		/// <summary>
        /// ����С��λ
		/// </summary>
		public string AttributePrecision { get; set; }
		/// <summary>
        /// �������
		/// </summary>
		public string AttributeInputCtrl { get; set; }
		/// <summary>
        /// ���ֵ
		/// </summary>
		public string AttributeInputMax { get; set; }
		/// <summary>
        /// ��Сֵ
		/// </summary>
		public string AttributeInputMin { get; set; }
		/// <summary>
        /// Ĭ��ֵ
		/// </summary>
		public string AttributeDefault { get; set; }
		/// <summary>
        /// �Ƿ�Ϊ��
		/// </summary>
		public string AttributeIsNull { get; set; }
		/// <summary>
        /// �����ʽ
		/// </summary>
		public string AttributeInputFormat { get; set; }
		/// <summary>
        /// ��ע
		/// </summary>
		public string Remark { get; set; }
		/// <summary>
        /// ����ʱ��
		/// </summary>
        public DateTime? CreateDT { get; set; }
        /// <summary>
        /// ��λ
        /// </summary>
        public string AttributeUnit { get; set; }
        /// <summary>
        /// ���ݷ���
        /// </summary>
        public string AttributeDataType { get; set; }
        /// <summary>
        /// ���ַ�����
        /// </summary>
        public string AttributeValueLink { get; set; }
        /// <summary>
        /// ����Դ
        /// </summary>
        public string AttributeDataSource { get; set; }
        /// <summary>
        /// ���㹫ʽ
        /// </summary>
        public string AttributeCalComp { get; set; }
        /// <summary>
        /// ��������
        /// </summary>
        public int? AttributeSort { get; set; }

	}
}

