using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Application.Services.Dto;

namespace InfoEarthFrame.Application.LayerFieldApp.Dtos
{
	public class LayerFieldInputDto : IInputDto
	{
		/// <summary>
		/// 
		/// </summary>
		[StringLength(36)]
		public string Id { get; set; }
		/// <summary>
        /// ͼ��Ŀ¼ID
		/// </summary>
		[StringLength(36)]
		public string LayerID { get; set; }
		/// <summary>
        /// ��������
		/// </summary>
		[StringLength(50)]
		public string AttributeName { get; set; }
		/// <summary>
        /// ��������
		/// </summary>
		[StringLength(100)]
		public string AttributeDesc { get; set; }
		/// <summary>
        /// ��������
		/// </summary>
		[StringLength(36)]
		public string AttributeType { get; set; }
		/// <summary>
        /// ���Գ���
		/// </summary>
		[StringLength(5)]
		public string AttributeLength { get; set; }
		/// <summary>
        /// ����С��λ
		/// </summary>
		[StringLength(5)]
		public string AttributePrecision { get; set; }
		/// <summary>
        /// �������
		/// </summary>
		[StringLength(50)]
		public string AttributeInputCtrl { get; set; }
		/// <summary>
        /// ���ֵ
		/// </summary>
		[StringLength(10)]
		public string AttributeInputMax { get; set; }
		/// <summary>
        /// ��Сֵ
		/// </summary>
		[StringLength(10)]
		public string AttributeInputMin { get; set; }
		/// <summary>
        /// Ĭ��ֵ
		/// </summary>
		[StringLength(30)]
		public string AttributeDefault { get; set; }
		/// <summary>
        /// �Ƿ�Ϊ��
		/// </summary>
		[StringLength(1)]
		public string AttributeIsNull { get; set; }
		/// <summary>
        /// �����ʽ
		/// </summary>
		[StringLength(50)]
		public string AttributeInputFormat { get; set; }
		/// <summary>
        /// ��ע
		/// </summary>
		[StringLength(200)]
		public string Remark { get; set; }
		/// <summary>
        /// ����ʱ��
		/// </summary>
        public DateTime? CreateDT { get; set; }
        /// <summary>
        /// ��λ
        /// </summary>
        [StringLength(50)]
        public string AttributeUnit { get; set; }
        /// <summary>
        /// ���ݷ���
        /// </summary>
        [StringLength(50)]
        public string AttributeDataType { get; set; }
        /// <summary>
        /// ���ַ�����
        /// </summary>
        [StringLength(50)]
        public string AttributeValueLink { get; set; }
        /// <summary>
        /// ����Դ
        /// </summary>
        [StringLength(50)]
        public string AttributeDataSource { get; set; }
        /// <summary>
        /// ���㹫ʽ
        /// </summary>
        [StringLength(50)]
        public string AttributeCalComp { get; set; }
        /// <summary>
        /// ��������
        /// </summary>
        public int? AttributeSort { get; set; }

	}
}

