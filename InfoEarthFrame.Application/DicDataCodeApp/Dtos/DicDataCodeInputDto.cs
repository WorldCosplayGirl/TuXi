using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Application.Services.Dto;

namespace InfoEarthFrame.Application.DicDataCodeApp.Dtos
{
	public class DicDataCodeInputDto : IInputDto
	{
		/// <summary>
		/// 
		/// </summary>
		[StringLength(36)]
		public string Id { get; set; }
		/// <summary>
        /// ������������
		/// </summary>
		[StringLength(50)]
		public string CodeName { get; set; }
		/// <summary>
        /// ��������ֵ
		/// </summary>
		[StringLength(4000)]
		public string CodeValue { get; set; }
		/// <summary>
        /// ��������
		/// </summary>
		[StringLength(100)]
		public string CodeDesc { get; set; }
		/// <summary>
        /// ��������
		/// </summary>
		[StringLength(36)]
		public string DataTypeID { get; set; }
		/// <summary>
        /// ��������
		/// </summary>
		public int? CodeSort { get; set; }
		/// <summary>
        /// ��ע
		/// </summary>
		[StringLength(200)]
		public string Remark { get; set; }
		/// <summary>
        /// �ؼ���
		/// </summary>
		[StringLength(100)]
		public string Keywords { get; set; }

	}
}

