using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using InfoEarthFrame.Core.Entities;

namespace InfoEarthFrame.Application.MapApp.Dtos
{
	[AutoMapFrom(typeof(MapEntity))]
	public class MapOutputDto : IOutputDto
	{
		/// <summary>
		/// 
		/// </summary>
		public string Id { get; set; }
		/// <summary>
        /// ��ͼ����
		/// </summary>
		public string MapName { get; set; }


        /// <summary>
        /// ��ͼӢ������
        /// </summary>
        public string MapEnName { get; set; }

		/// <summary>
        /// �߽緶Χ
		/// </summary>
		public string MapBBox { get; set; }
		/// <summary>
        /// ��ͼ������ַ
		/// </summary>
		public string MapPublishAddress { get; set; }
		/// <summary>
        /// ��ͼ״̬
		/// </summary>
		public string MapStatus { get; set; }
		/// <summary>
        /// ��ͼ����
		/// </summary>
		public string MapDesc { get; set; }
		/// <summary>
        /// ��ͼ����
		/// </summary>
		public string MapType { get; set; }
		/// <summary>
        /// ��ͼ��ǩ
		/// </summary>
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
		public string CreateUserId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string CreateUserName { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DateTime? CreateDT { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string ModifyUserId { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public string ModifyUserName { get; set; }
		/// <summary>
		/// 
		/// </summary>
		public DateTime? ModifyDate { get; set; }
        /// <summary>
        /// ������
        /// </summary>
        public string MapScale { get; set; }
        /// <summary>
        /// ����������
        /// </summary>
        public string MapScaleName { get; set; }
        /// <summary>
        /// �ռ�ο�
        /// </summary>
        public string SpatialRefence { get; set; }
        /// <summary>
        /// �ռ�ο�����
        /// </summary>
        public string SpatialRefenceName { get; set; }
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
        public string MapLegend { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string MaxYName { get; set; }
        /// <summary>
        /// south(��)
        /// </summary>
        public string MinYName { get; set; }
        /// <summary>
        /// west(��)
        /// </summary>
        public string MinXName { get; set; }
        /// <summary>
        /// east(��)
        /// </summary>
        public string MaxXName { get; set; }

	}
}

