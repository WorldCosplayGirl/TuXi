using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Domain.Entities;

namespace InfoEarthFrame.Core.Entities
{
    /// <summary>
    /// ʵ����Map
    /// </summary>
    [Table("sdms_map")]
    public class MapEntity : Entity<string>
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
        /// ��ͼ����
        /// </summary>
        [MaxLength(50)]
        [Column("mapname")]
        public string MapName { get; set; }

        /// <summary>
        /// ��ͼӢ������
        /// </summary>
        [MaxLength(50)]
        [Column("mapenname")]
        public string MapEnName { get; set; }

        /// <summary>
        /// �߽緶Χ
        /// </summary>
        [MaxLength(100)]
        [Column("mapbbox")]
        public string MapBBox { get; set; }
        /// <summary>
        /// ��ͼ������ַ
        /// </summary>
        [MaxLength(200)]
        [Column("mappublishaddress")]
        public string MapPublishAddress { get; set; }
        /// <summary>
        /// ��ͼ״̬
        /// </summary>
        [MaxLength(36)]
        [Column("mapstatus")]
        public string MapStatus { get; set; }
        /// <summary>
        /// ��ͼ����
        /// </summary>
        [MaxLength(100)]
        [Column("mapdesc")]
        public string MapDesc { get; set; }
        /// <summary>
        /// ��ͼ����
        /// </summary>
        [MaxLength(50)]
        [Column("maptype")]
        public string MapType { get; set; }
        /// <summary>
        /// ��ͼ��ǩ
        /// </summary>
        [MaxLength(200)]
        [Column("maptag")]
        public string MapTag { get; set; }
        /// <summary>
        /// ����ʱ��
        /// </summary>
        [Column("publishdt")]
        public DateTime? PublishDT { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [Column("sortcode")]
        public int? SortCode { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [Column("enabledmark")]
        public int? EnabledMark { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [Column("deletemark")]
        public int? DeleteMark { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [MaxLength(50)]
        [Column("createuserid")]
        public string CreateUserId { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [MaxLength(50)]
        [Column("createusername")]
        public string CreateUserName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [Column("createdt")]
        public DateTime? CreateDT { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [MaxLength(50)]
        [Column("modifyuserid")]
        public string ModifyUserId { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [MaxLength(50)]
        [Column("modifyusername")]
        public string ModifyUserName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        [Column("modifydate")]
        public DateTime? ModifyDate { get; set; }
        /// <summary>
        /// ������
        /// </summary>
        [MaxLength(36)]
        [Column("mapscale")]
        public string MapScale { get; set; }
        /// <summary>
        /// �ռ�ο�
        /// </summary>
        [MaxLength(100)]
        [Column("spatialrefence")]
        public string SpatialRefence { get; set; }
        /// <summary>
        /// north(��)
        /// </summary>
        [Column("maxy")]
        public decimal? MaxY { get; set; }
        /// <summary>
        /// south(��)
        /// </summary>
        [Column("miny")]
        public decimal? MinY { get; set; }
        /// <summary>
        /// west(��)
        /// </summary>
        [Column("minx")]
        public decimal? MinX { get; set; }
        /// <summary>
        /// east(��)
        /// </summary>
        [Column("maxx")]
        public decimal? MaxX { get; set; }
        /// <summary>
        /// ��ͼͼ��
        /// </summary>
        [MaxLength(200)]
        [Column("maplegend")]
        public string MapLegend { get; set; }
    }
}