using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using InfoEarthFrame.Core.Entities;

namespace InfoEarthFrame.Application.MapReleationApp.Dtos
{
	[AutoMapFrom(typeof(MapReleationEntity))]
	public class MapReleationOutputDto : IOutputDto
	{
		/// <summary>
		/// 
		/// </summary>
		public string Id { get; set; }
		/// <summary>
        /// ��ͼID
		/// </summary>
		public string MapID { get; set; }
		/// <summary>
        /// ͼ��Ŀ¼ID
		/// </summary>
		public string DataConfigID { get; set; }
		/// <summary>
        /// ͼ����ʽID
		/// </summary>
		public string DataStyleID { get; set; }
		/// <summary>
        /// ͼ������
		/// </summary>
		public int? DataSort { get; set; }
		/// <summary>
        /// ��������
		/// </summary>
		public DateTime? ConfigDT { get; set; }
		/// <summary>
        /// �޸�����
		/// </summary>
		public DateTime? ModifyDT { get; set; }

	}
}

