using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Domain.Entities;

namespace InfoEarthFrame.Core.Entities
{
    /// <summary>
    /// ʵ����MapReleation
    /// </summary>
    [Table("sdms_map_releation")]
    public class MapReleationEntity : Entity<string>
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
        /// ��ͼID
        /// </summary>
        [MaxLength(36)]
        [Column("mapid")]
        public string MapID { get; set; }
        /// <summary>
        /// ͼ��Ŀ¼ID
        /// </summary>
        [MaxLength(36)]
        [Column("dataconfigid")]
        public string DataConfigID { get; set; }
        /// <summary>
        /// ͼ����ʽID
        /// </summary>
        [MaxLength(36)]
        [Column("datastyleid")]
        public string DataStyleID { get; set; }
        /// <summary>
        /// ͼ������
        /// </summary>
        [Column("datasort")]
        public int? DataSort { get; set; }
        /// <summary>
        /// ��������
        /// </summary>
        [Column("configdt")]
        public DateTime? ConfigDT { get; set; }
        /// <summary>
        /// �޸�����
        /// </summary>
        [Column("modifydt")]
        public DateTime? ModifyDT { get; set; }
    }
}