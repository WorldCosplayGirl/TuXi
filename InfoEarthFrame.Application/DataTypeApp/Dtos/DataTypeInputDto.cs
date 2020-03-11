using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Application.Services.Dto;

namespace InfoEarthFrame.Application.DataTypeApp.Dtos
{
	public class DataTypeInputDto : IInputDto
	{
		/// <summary>
		/// 
		/// </summary>
		[StringLength(36)]
		public string Id { get; set; }
		/// <summary>
		/// �������
		/// </summary>
		[StringLength(50)]
		public string TypeName { get; set; }
		/// <summary>
		/// �������
		/// </summary>
		[StringLength(100)]
		public string TypeDesc { get; set; }
		/// <summary>
        /// ��������(��ͼ�࣯ͼ����)
		/// </summary>
		[StringLength(36)]
		public string DictCodeID { get; set; }
		/// <summary>
		/// 
		/// </summary>
		[StringLength(36)]
		public string ParentID { get; set; }

	}
}

