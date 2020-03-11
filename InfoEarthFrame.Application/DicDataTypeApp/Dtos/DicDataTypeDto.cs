using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Application.Services.Dto;

namespace InfoEarthFrame.Application.DicDataTypeApp.Dtos
{
	public class DicDataTypeDto : EntityDto
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

