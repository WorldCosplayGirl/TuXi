using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using InfoEarthFrame.Core.Entities;

namespace InfoEarthFrame.Application.DicDataCodeApp.Dtos
{
	[AutoMapFrom(typeof(DicDataCodeEntity))]
	public class DicDataCodeOutputDto : IOutputDto
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

