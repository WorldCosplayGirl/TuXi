using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Application.Services.Dto;

namespace InfoEarthFrame.Application.DataTypeApp.Dtos
{
	public class DataTypeDto : EntityDto
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

