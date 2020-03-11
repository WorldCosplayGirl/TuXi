using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Application.Services.Dto;

namespace InfoEarthFrame.Application.MapApp.Dtos
{
	public class MapInputDto : IInputDto
	{
		/// <summary>
		/// 
		/// </summary>
		[StringLength(36)]
		public string Id { get; set; }
		/// <summary>
        /// ��ͼ����
		/// </summary>
		[StringLength(50)]
		public string MapName { get; set; }
		/// <summary>
        /// �߽緶Χ
		/// </summary>
		[StringLength(100)]
		public string MapBBox { get; set; }
		/// <summary>
        /// ��ͼ������ַ
		/// </summary>
		[StringLength(200)]
		public string MapPublishAddress { get; set; }
		/// <summary>
        /// ��ͼ״̬
		/// </summary>
		[StringLength(36)]
		public string MapStatus { get; set; }
		/// <summary>
        /// ��ͼ����
		/// </summary>
		[StringLength(100)]
		public string MapDesc { get; set; }
		/// <summary>
        /// ��ͼ����
		/// </summary>
		[StringLength(50)]
		public string MapType { get; set; }
		/// <summary>
        /// ��ͼ��ǩ
		/// </summary>
		[StringLength(200)]
		public string MapTag { get; set; }
		/// <summary>
        /// ����ʱ��
		/// </summary>
		public DateTime? PublishDT { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int? SortCode { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int? EnabledMark { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public int? DeleteMark { get; set; }
		/// <summary>
		/// 
		/// </summary>
		[StringLength(50)]
		public string CreateUserId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		[StringLength(50)]
		public string CreateUserName { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DateTime? CreateDT { get; set; }
		/// <summary>
		/// 
		/// </summary>
		[StringLength(50)]
		public string ModifyUserId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		[StringLength(50)]
		public string ModifyUserName { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DateTime? ModifyDate { get; set; }
        /// <summary>
        /// ������
        /// </summary>
        [StringLength(36)]
        public string MapScale { get; set; }
        /// <summary>
        /// �ռ�ο�
        /// </summary>
        [StringLength(100)]
        public string SpatialRefence { get; set; }
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
        /// ��ͼͼ��
        /// </summary>
        [StringLength(200)]
        public string MapLegend { get; set; } 

	}
}

