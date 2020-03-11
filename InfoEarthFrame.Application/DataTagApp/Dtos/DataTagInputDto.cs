using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Application.Services.Dto;

namespace InfoEarthFrame.Application.DataTagApp.Dtos
{
	public class DataTagInputDto : IInputDto
	{
		/// <summary>
		/// 
		/// </summary>
		[StringLength(36)]
		public string Id { get; set; }
		/// <summary>
        /// ��ǩ����
		/// </summary>
		[StringLength(50)]
		public string TagName { get; set; }
		/// <summary>
        /// ��ǩ����
		/// </summary>
		[StringLength(100)]
		public string TagDesc { get; set; }
		/// <summary>
        /// ��������(��ͼ�࣯ͼ����)
		/// </summary>
		[StringLength(36)]
		public string DictCodeID { get; set; }

	}
}

