using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Domain.Entities;

namespace InfoEarthFrame.Core.Entities
{
    /// <summary>
    /// ʵ����TagReleation
    /// </summary>
    [Table("sdms_tag_releation")]
    public class TagReleationEntity : Entity<string>
    {
        /// <summary>
        /// ��ǩ��ϵID
        /// </summary>
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
        /// ��ǩID
        /// </summary>
        [MaxLength(36)]
        [Column("datatagid")]
        public string DataTagID { get; set; }
        /// <summary>
        /// ��ͼ��ͼ��ID
        /// </summary>
        [MaxLength(36)]
        [Column("mapid")]
        public string MapID { get; set; }

    }
}