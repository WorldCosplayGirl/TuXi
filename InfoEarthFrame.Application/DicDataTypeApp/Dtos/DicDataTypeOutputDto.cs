using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using InfoEarthFrame.Core.Entities;

namespace InfoEarthFrame.Application.DicDataTypeApp.Dtos
{
	[AutoMapFrom(typeof(DicDataTypeEntity))]
	public class DicDataTypeOutputDto : IOutputDto
	{
		/// <summary>
		/// 
		/// </summary>
		public string Id { get; set; }
		/// <summary>
		/// ��������
		/// </summary>
		public string TypeName { get; set; }
		/// <summary>
		/// ��������
		/// </summary>
		public string TypeDesc { get; set; }
		/// <summary>
		/// ���ʹ���
		/// </summary>
		public string TypeCode { get; set; }
		/// <summary>
		/// ��������
		/// </summary>
		public int? TypeSort { get; set; }
		/// <summary>
		/// ������
		/// </summary>
		public string ParentID { get; set; }
		/// <summary>
		/// �ؼ���
		/// </summary>
		public string Keywords { get; set; }

	}
}

