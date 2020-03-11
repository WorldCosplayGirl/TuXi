using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Domain.Entities;

namespace InfoEarthFrame.Core.Entities
{
    /// <summary>
    /// ʵ����DataType
    /// </summary>
    [Table("sdms_datatype")]
    public class DataTypeEntity : Entity<string>
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
        /// �������
        /// </summary>
        [MaxLength(50)]
        [Column("typename")]
        public string TypeName { get; set; }
        /// <summary>
        /// �������
        /// </summary>
        [MaxLength(100)]
        [Column("typedesc")]
        public string TypeDesc { get; set; }
        /// <summary>
        /// ��������(��ͼ�࣯ͼ����)
        /// </summary>
        [MaxLength(36)]
        [Column("dictcodeid")]
        public string DictCodeID { get; set; }
        /// <summary>
        /// �����
        /// </summary>
        [MaxLength(36)]
        [Column("parentid")]
        public string ParentID { get; set; }
    }
}