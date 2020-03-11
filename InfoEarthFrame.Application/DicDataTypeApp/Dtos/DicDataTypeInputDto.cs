using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Application.Services.Dto;

namespace InfoEarthFrame.Application.DicDataTypeApp.Dtos
{
	public class DicDataTypeInputDto : IInputDto
	{
		/// <summary>
		/// 
		/// </summary>
		[StringLength(36)]
		public string Id { get; set; }
		/// <summary>
		/// ��������
		/// </summary>
		[StringLength(50)]
		public string TypeName { get; set; }
		/// <summary>
		/// ��������
		/// </summary>
		[StringLength(100)]
		public string TypeDesc { get; set; }
		/// <summary>
		/// ���ʹ���
		/// </summary>
		[StringLength(36)]
		public string TypeCode { get; set; }
		/// <summary>
		/// ��������
		/// </summary>
		public int? TypeSort { get; set; }
		/// <summary>
		/// ������
		/// </summary>
		[StringLength(36)]
		public string ParentID { get; set; }
		/// <summary>
        /// �ؼ���
		/// </summary>
		[StringLength(100)]
		public string Keywords { get; set; }

	}
}

