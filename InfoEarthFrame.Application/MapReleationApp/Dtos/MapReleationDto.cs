using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Application.Services.Dto;

namespace InfoEarthFrame.Application.MapReleationApp.Dtos
{
	public class MapReleationDto : EntityDto
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
        /// ��ͼ����
        /// </summary>
        public string MapName { get; set; }
		/// <summary>
		/// ͼ��Ŀ¼ID
		/// </summary>
		public string DataConfigID { get; set; }
        /// <summary>
        /// ͼ��Ŀ¼����
        /// </summary>
        public string DataConfigName { get; set; }
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
		/// ��������
		/// </summary>
		public DateTime? ConfigDT { get; set; }
		/// <summary>
		/// �޸�����
		/// </summary>
		public DateTime? ModifyDT { get; set; }

	}
}

