using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using InfoEarthFrame.Core.Entities;

namespace InfoEarthFrame.Application.DataTagApp.Dtos
{
	[AutoMapFrom(typeof(DataTagEntity))]
	public class DataTagOutputDto : IOutputDto
	{
		/// <summary>
		/// 
		/// </summary>
		public string Id { get; set; }
		/// <summary>
        /// ��ǩ����
		/// </summary>
		public string TagName { get; set; }
		/// <summary>
        /// ��ǩ����
		/// </summary>
		public string TagDesc { get; set; }
		/// <summary>
        /// ��������(��ͼ�࣯ͼ����)
		/// </summary>
		public string DictCodeID { get; set; }

	}
}

