using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Application.Services.Dto;

namespace InfoEarthFrame.Application.TagReleationApp.Dtos
{
	public class TagReleationDto : EntityDto
	{
		/// <summary>
		/// 
		/// </summary>
		public string Id { get; set; }
		/// <summary>
		/// ��ǩID
		/// </summary>
		public string DataTagID { get; set; }
		/// <summary>
		/// ��ͼ��ͼ��ID
		/// </summary>
		public string MapID { get; set; }

	}
}

