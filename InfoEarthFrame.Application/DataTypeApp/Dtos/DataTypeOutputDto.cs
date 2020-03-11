using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using InfoEarthFrame.Core.Entities;

namespace InfoEarthFrame.Application.DataTypeApp.Dtos
{
	[AutoMapFrom(typeof(DataTypeEntity))]
	public class DataTypeOutputDto : IOutputDto
	{
		/// <summary>
		/// 
		/// </summary>
		public string Id { get; set; }
		/// <summary>
		/// �������
		/// </summary>
		public string TypeName { get; set; }
		/// <summary>
		/// �������
		/// </summary>
		public string TypeDesc { get; set; }
		/// <summary>
        /// ��������(��ͼ�࣯ͼ����)
		/// </summary>
		public string DictCodeID { get; set; }
		/// <summary>
		/// �����
		/// </summary>
		public string ParentID { get; set; }

	}
}

