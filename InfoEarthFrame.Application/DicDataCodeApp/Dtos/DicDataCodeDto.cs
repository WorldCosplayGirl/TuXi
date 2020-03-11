using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Application.Services.Dto;

namespace InfoEarthFrame.Application.DicDataCodeApp.Dtos
{
	public class DicDataCodeDto : EntityDto
	{
		/// <summary>
		/// 
		/// </summary>
		public string Id { get; set; }
		/// <summary>
		/// ������������
		/// </summary>
		public string CodeName { get; set; }
		/// <summary>
        /// ��������ֵ
		/// </summary>
		public string CodeValue { get; set; }
		/// <summary>
        /// ��������
		/// </summary>
		public string CodeDesc { get; set; }
		/// <summary>
		/// ��������
		/// </summary>
		public string DataTypeID { get; set; }
		/// <summary>
		/// ��������
		/// </summary>
		public int? CodeSort { get; set; }
		/// <summary>
		/// ��ע
		/// </summary>
		public string Remark { get; set; }
		/// <summary>
		/// �ؼ���
		/// </summary>
		public string Keywords { get; set; }

	}
}

