using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Application.Services.Dto;

namespace InfoEarthFrame.Application.DataTagApp.Dtos
{
	public class DataTagDto : EntityDto
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

