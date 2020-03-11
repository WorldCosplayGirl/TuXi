using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Domain.Entities;

namespace InfoEarthFrame.Core.Entities
{
    /// <summary>
    /// ʵ����DicDataCode
    /// </summary>
    [Table("sdms_dictdatacode")]
    public class DicDataCodeEntity : Entity<string>
    {
        [Column("id")]
        [MaxLength(36)]
        public override string Id
        {
            get
            {
                return base.Id;
            }
            set
            {
                base.Id = value;
            }
        }
        /// <summary>
        /// ������������
        /// </summary>
        [MaxLength(50)]
        [Column("codename")]
        public string CodeName { get; set; }
        /// <summary>
        /// ��������ֵ
        /// </summary>
        [MaxLength(4000)]
        [Column("codevalue")]
        public string CodeValue { get; set; }
        /// <summary>
        /// ��������
        /// </summary>
        [MaxLength(100)]
        [Column("codedesc")]
        public string CodeDesc { get; set; }
        /// <summary>
        /// ��������
        /// </summary>
        [MaxLength(36)]
        [Column("datatypeid")]
        public string DataTypeID { get; set; }
        /// <summary>
        /// ��������
        /// </summary>
        [Column("codesort")]
        public int? CodeSort { get; set; }
        /// <summary>
        /// ��ע
        /// </summary>
        [MaxLength(200)]
        [Column("remark")]
        public string Remark { get; set; }
        /// <summary>
        /// �ؼ���
        /// </summary>
        [MaxLength(100)]
        [Column("keywords")]
        public string Keywords { get; set; }
    }
}