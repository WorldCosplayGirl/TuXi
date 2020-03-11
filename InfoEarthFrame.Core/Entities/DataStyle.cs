using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Domain.Entities;

namespace InfoEarthFrame.Core.Entities
{
    /// <summary>
    /// ʵ����DataStyle
    /// </summary>
    [Table("sdms_datastyle")]
    public class DataStyleEntity : Entity<string>
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
        /// ��ʽ����
        /// </summary>
        [MaxLength(50)]
        [Column("stylename")]
        public string StyleName { get; set; }
        /// <summary>
        /// ��ʽ����
        /// </summary>
        [MaxLength(36)]
        [Column("styletype")]
        public string StyleType { get; set; }
        /// <summary>
        /// ��ʽ����
        /// </summary>
        [MaxLength(int.MaxValue)]
        [Column("stylecontent")]
        public string StyleContent { get; set; }
        /// <summary>
        /// ��ʽ����
        /// </summary>
        [MaxLength(100)]
        [Column("styledesc")]
        public string StyleDesc { get; set; }
        /// <summary>
        /// ����ʱ��
        /// </summary>
        [Column("createdt")]
        public DateTime? CreateDT { get; set; }
        /// <summary>
        /// ������
        /// </summary>
        [MaxLength(36)]
        [Column("createby")]
        public string CreateBy { get; set; }
        /// <summary>
        /// ��ʽ����
        /// </summary>
        [MaxLength(36)]
        [Column("styledatatype")]
        public string StyleDataType { get; set; }

        /// <summary>
        /// ��ʽ��������
        /// </summary>
        [MaxLength(36)]
        [Column("styleconfigtype")]
        public string StyleConfigType { get; set; }

        /// <summary>
        /// ��ʽĬ��ͼ��
        /// </summary>
        [MaxLength(36)]
        [Column("styledefaultlayer")]
        public string StyleDefaultLayer { get; set; }
        /// <summary>
        /// ��ʽ��Ⱦ�ֶ�
        /// </summary>
        [MaxLength(50)]
        [Column("stylerenderfield")]
        public string StyleRenderField { get; set; }
        /// <summary>
        /// ��ʽ��Ⱦ��ɫ��
        /// </summary>
        [MaxLength(100)]
        [Column("stylerendercolorband")]
        public string StyleRenderColorBand { get; set; }
        /// <summary>
        /// ��ʽ��ȾԤ�����
        /// </summary>
        [MaxLength(500)]
        [Column("stylerenderrule")]
        public string StyleRenderRule { get; set; }

    }
}

