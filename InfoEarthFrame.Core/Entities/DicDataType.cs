using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Domain.Entities;

namespace InfoEarthFrame.Core.Entities
{
    /// <summary>
    /// ʵ����DicDataType
    /// </summary>
    [Table("sdms_dictdatatype")]
    public class DicDataTypeEntity : Entity<string>
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
        /// ��������
        /// </summary>
        [MaxLength(50)]
        [Column("typename")]
        public string TypeName { get; set; }
        /// <summary>
        /// ��������
        /// </summary>
        [MaxLength(100)]
        [Column("typedesc")]
        public string TypeDesc { get; set; }
        /// <summary>
        /// ���ʹ���
        /// </summary>
        [MaxLength(36)]
        [Column("typecode")]
        public string TypeCode { get; set; }
        /// <summary>
        /// ��������
        /// </summary>
        [Column("typesort")]
        public int? TypeSort { get; set; }
        /// <summary>
        /// ������
        /// </summary>
        [MaxLength(36)]
        [Column("parentid")]
        public string ParentID { get; set; }
        /// <summary>
        /// �ؼ���
        /// </summary>
        [MaxLength(100)]
        [Column("keywords")]
        public string Keywords { get; set; }
    }
}