using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Application.Services.Dto;

namespace InfoEarthFrame.Application.LayerContentApp.Dtos
{
	public class LayerContentInputDto : IInputDto
	{
		/// <summary>
		/// 
		/// </summary>
		[StringLength(36)]
		public string Id { get; set; }
		/// <summary>
        /// ͼ������
		/// </summary>
		[StringLength(50)]
		public string LayerName { get; set; }
		/// <summary>
        /// ͼ������(������)
		/// </summary>
		[StringLength(36)]
		public string DataType { get; set; }
		/// <summary>
        /// ͼ��߽�ռ�
		/// </summary>
		[StringLength(100)]
		public string LayerBBox { get; set; }
		/// <summary>
        /// ͼ�����
		/// </summary>
		[StringLength(200)]
		public string LayerType { get; set; }
		/// <summary>
        /// ͼ���ǩ
		/// </summary>
		[StringLength(100)]
		public string LayerTag { get; set; }
		/// <summary>
        /// ͼ������
		/// </summary>
		[StringLength(100)]
		public string LayerDesc { get; set; }
		/// <summary>
        /// ͼ��ҵ���
		/// </summary>
		[StringLength(30)]
		public string LayerAttrTable { get; set; }
		/// <summary>
        /// ͼ��ռ��
		/// </summary>
		[StringLength(30)]
		public string LayerSpatialTable { get; set; }
		/// <summary>
        /// �ռ�ο�
		/// </summary>
		[StringLength(100)]
		public string LayerRefence { get; set; }

        /// <summary>
        /// ����ʱ��
        /// </summary>
        public DateTime? CreateDT { get; set; }
        /// <summary>
        /// north(��)
        /// </summary>
        public decimal? MaxY { get; set; }
        /// <summary>
        /// south(��)
        /// </summary>
        public decimal? MinY { get; set; }
        /// <summary>
        /// west(��)
        /// </summary>
        public decimal? MinX { get; set; }
        /// <summary>
        /// east(��)
        /// </summary>
        public decimal? MaxX { get; set; }
        /// <summary>
        /// �ϴ�״̬
        /// </summary>
        [StringLength(1)]
        public string UploadStatus { get; set; }
        /// <summary>
        /// ӵ����
        /// </summary>
        [StringLength(50)]
        public string CreateBy { get; set; }
        /// <summary>
        /// ͼ��Ĭ����ʽ
        /// </summary>
        [MaxLength(36)]
        public string LayerDefaultStyle { get; set; }

        /// <summary>
        /// �ϴ�ͼ����ʽ��1-ʸ��ͼ�㣻2-Ӱ��ͼ�㣩
        /// </summary>
        [MaxLength(1)]
        public string UploadFileType { get; set; }

        /// <summary>
        /// �ϴ��ļ�����
        /// </summary>
        [MaxLength(200)]
        public string UploadFileName { get; set; }
	}
}

