using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Application.Services.Dto;

namespace InfoEarthFrame.Application.MapReleationApp.Dtos
{
	public class MapReleationInputDto : IInputDto
	{
		/// <summary>
		/// 
		/// </summary>
		[StringLength(36)]
		public string Id { get; set; }
		/// <summary>
        /// ��ͼID
		/// </summary>
		[StringLength(36)]
		public string MapID { get; set; }
		/// <summary>
        /// ͼ��Ŀ¼ID
		/// </summary>
		[StringLength(36)]
		public string DataConfigID { get; set; }
		/// <summary>
        /// ͼ����ʽID
		/// </summary>
		[StringLength(36)]
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

    public class StyleInputDto : IInputDto
    {
        /// <summary>
        /// ��ͼID
        /// </summary>
        public string MapId { get; set; }
        /// <summary>
        /// ͼ��ID
        /// </summary>
        public string LayerStr { get; set; }
        /// <summary>
        /// ��ʽID
        /// </summary>
        public string StyleStr { get; set; }
    }
}

