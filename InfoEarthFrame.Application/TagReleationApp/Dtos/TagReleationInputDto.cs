using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Application.Services.Dto;

namespace InfoEarthFrame.Application.TagReleationApp.Dtos
{
	public class TagReleationInputDto : IInputDto
	{
		/// <summary>
		/// 
		/// </summary>
		[StringLength(36)]
		public string Id { get; set; }
		/// <summary>
        /// ��ǩID
		/// </summary>
		[StringLength(36)]
		public string DataTagID { get; set; }
		/// <summary>
        /// ��ͼ��ͼ��ID
		/// </summary>
		[StringLength(36)]
		public string MapID { get; set; }

	}
}

