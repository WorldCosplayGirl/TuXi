using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Domain.Entities;

namespace InfoEarthFrame.Core.Entities
{
    /// <summary>
    /// ʵ����LayerContent
    /// </summary>
    [Table("sdms_layer")]
    public class LayerContentEntity : Entity<string>
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
        /// ͼ������
        /// </summary>
        [MaxLength(50)]
        [Column("layername")]
        public string LayerName { get; set; }
        /// <summary>
        /// ͼ������(������)
        /// </summary>
        [MaxLength(36)]
        [Column("datatype")]
        public string DataType { get; set; }
        /// <summary>
        /// ͼ��߽�ռ�
        /// </summary>
        [MaxLength(100)]
        [Column("layerbbox")]
        public string LayerBBox { get; set; }
        /// <summary>
        /// ͼ�����
        /// </summary>
        [MaxLength(200)]
        [Column("layertype")]
        public string LayerType { get; set; }
        /// <summary>
        /// ͼ���ǩ
        /// </summary>
        [MaxLength(100)]
        [Column("layertag")]
        public string LayerTag { get; set; }
        /// <summary>
        /// ͼ������
        /// </summary>
        [MaxLength(100)]
        [Column("layerdesc")]
        public string LayerDesc { get; set; }
        /// <summary>
        /// ͼ��ҵ���
        /// </summary>
        [MaxLength(30)]
        [Column("layerattrtable")]
        public string LayerAttrTable { get; set; }
        /// <summary>
        /// ͼ��ռ��
        /// </summary>
        [MaxLength(30)]
        [Column("layerspatialtable")]
        public string LayerSpatialTable { get; set; }
        /// <summary>
        /// �ռ�ο�
        /// </summary>
        [MaxLength(100)]
        [Column("layerrefence")]
        public string LayerRefence { get; set; }
        /// <summary>
        /// ����ʱ��
        /// </summary>
        [Column("createdt")]
        public DateTime? CreateDT { get; set; }
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
        /// �ϴ�״̬
        /// </summary>
        [MaxLength(1)]
        [Column("uploadstatus")]
        public string UploadStatus { get; set; }
        /// <summary>
        /// ӵ����
        /// </summary>
        [MaxLength(50)]
        [Column("createby")]
        public string CreateBy { get; set; }
        /// <summary>
        /// ͼ��Ĭ����ʽ
        /// </summary>
        [MaxLength(36)]
        [Column("layerdefaultstyle")]
        public string LayerDefaultStyle { get; set; }


        /// <summary>
        /// �ϴ�ͼ����ʽ��1-ʸ��ͼ�㣻2-Ӱ��ͼ�㣩
        /// </summary>
        [MaxLength(1)]
        [Column("uploadfiletype")]
        public string UploadFileType { get; set; }

        /// <summary>
        /// �ϴ��ļ�����
        /// </summary>
        [MaxLength(200)]
        [Column("uploadfilename")]
        public string UploadFileName { get; set; }

        [Column("mainid")]
        public string MainId { get; set; }

    }
}

