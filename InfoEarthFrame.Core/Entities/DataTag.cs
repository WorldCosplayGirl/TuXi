using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Domain.Entities;

namespace InfoEarthFrame.Core.Entities
{
    /// <summary>
    /// ʵ����DataTag
    /// </summary>
    [Table("sdms_datatag")]
    public class DataTagEntity : Entity<string>
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
        /// ��ǩ����
        /// </summary>
        [MaxLength(50)]
        [Column("tagname")]
        public string TagName { get; set; }
        /// <summary>
        /// ��ǩ����
        /// </summary>
        [MaxLength(100)]
        [Column("tagdesc")]
        public string TagDesc { get; set; }
        /// <summary>
        /// ��������(��ͼ�࣯ͼ����)
        /// </summary>
        [MaxLength(36)]
        [Column("dictcodeid")]
        public string DictCodeID { get; set; }
    }
}