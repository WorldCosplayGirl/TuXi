using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using InfoEarthFrame.Core.Entities;

namespace InfoEarthFrame.Application.LayerContentApp.Dtos
{
	[AutoMapFrom(typeof(LayerContentEntity))]
	public class LayerContentOutputDto : IOutputDto
	{
		/// <summary>
		/// 
		/// </summary>
		public string Id { get; set; }
		/// <summary>
        /// ͼ������
		/// </summary>
		public string LayerName { get; set; }
		/// <summary>
        /// ͼ������(������)
		/// </summary>
		public string DataType { get; set; }
		/// <summary>
        /// ͼ��߽�ռ�
		/// </summary>
		public string LayerBBox { get; set; }
		/// <summary>
        /// ͼ�����
		/// </summary>
		public string LayerType { get; set; }
		/// <summary>
        /// ͼ���ǩ
		/// </summary>
		public string LayerTag { get; set; }
		/// <summary>
        /// ͼ������
		/// </summary>
		public string LayerDesc { get; set; }
		/// <summary>
        /// ͼ��ҵ���
		/// </summary>
		public string LayerAttrTable { get; set; }
		/// <summary>
        /// ͼ��ռ��
		/// </summary>
		public string LayerSpatialTable { get; set; }
		/// <summary>
        /// �ռ�ο�
		/// </summary>
		public string LayerRefence { get; set; }

        /// <summary>
        /// ����ʱ��
        /// </summary>
        public DateTime? CreateDT { get; set; }
        /// <summary>
		/// ͼ����ʽID
		/// </summary>
		public string DataStyleID { get; set; }
        /// <summary>
        /// ͼ����ʽ����
        /// </summary>
        public string DataStyleName { get; set; }
        /// <summary>
        /// ͼ������
        /// </summary>
        public int? DataSort { get; set; }
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
        public string UploadStatus { get; set; }
        /// <summary>
        /// ӵ����
        /// </summary>
        public string CreateBy { get; set; }
        /// <summary>
        /// ͼ��Ĭ����ʽ
        /// </summary>
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

        public string CreateUser { get; set; }

     
    }
}

