using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Domain.Entities;

namespace InfoEarthFrame.Core.Entities
{
    /// <summary>
    /// ʵ����LayerField
    /// </summary>
    [Table("sdms_layerfield")]
    public class LayerFieldEntity : Entity<string>
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
        /// ͼ��Ŀ¼ID
        /// </summary>
        [MaxLength(36)]
        [Column("layerid")]
        public string LayerID { get; set; }
        /// <summary>
        /// ��������
        /// </summary>
        [MaxLength(50)]
        [Column("attributename")]
        public string AttributeName { get; set; }
        /// <summary>
        /// ��������
        /// </summary>
        [MaxLength(100)]
        [Column("attributedesc")]
        public string AttributeDesc { get; set; }
        /// <summary>
        /// ��������
        /// </summary>
        [MaxLength(36)]
        [Column("attributetype")]
        public string AttributeType { get; set; }
        /// <summary>
        /// ���Գ���
        /// </summary>
        [MaxLength(5)]
        [Column("attributelength")]
        public string AttributeLength { get; set; }
        /// <summary>
        /// ����С��λ
        /// </summary>
        [MaxLength(5)]
        [Column("attributeprecision")]
        public string AttributePrecision { get; set; }
        /// <summary>
        /// �������
        /// </summary>
        [MaxLength(50)]
        [Column("attributeinputctrl")]
        public string AttributeInputCtrl { get; set; }
        /// <summary>
        /// ���ֵ
        /// </summary>
        [MaxLength(10)]
        [Column("attributeinputmax")]
        public string AttributeInputMax { get; set; }
        /// <summary>
        /// ��Сֵ
        /// </summary>
        [MaxLength(10)]
        [Column("attributeinputmin")]
        public string AttributeInputMin { get; set; }
        /// <summary>
        /// Ĭ��ֵ
        /// </summary>
        [MaxLength(30)]
        [Column("attributedefault")]
        public string AttributeDefault { get; set; }
        /// <summary>
        /// �Ƿ�Ϊ��
        /// </summary>
        [MaxLength(1)]
        [Column("attributeisnull")]
        public string AttributeIsNull { get; set; }
        /// <summary>
        /// �����ʽ
        /// </summary>
        [MaxLength(50)]
        [Column("attributeinputformat")]
        public string AttributeInputFormat { get; set; }
        /// <summary>
        /// ��ע
		/// </summary>
		[MaxLength(200)]
        [Column("remark")]
        public string Remark { get; set; }
        /// <summary>
        /// ����ʱ��
        /// </summary>
        [Column("createdt")]
        public DateTime? CreateDT { get; set; }
        /// <summary>
        /// ��λ
        /// </summary>
        [MaxLength(50)]
        [Column("attributeunit")]
        public string AttributeUnit { get; set; }
        /// <summary>
        /// ���ݷ���
        /// </summary>
        [MaxLength(50)]
        [Column("attributedatatype")]
        public string AttributeDataType { get; set; }
        /// <summary>
        /// ���ַ�����
        /// </summary>
        [MaxLength(50)]
        [Column("attributevaluelink")]
        public string AttributeValueLink { get; set; }
        /// <summary>
        /// ����Դ
        /// </summary>
        [MaxLength(50)]
        [Column("attributedatasource")]
        public string AttributeDataSource { get; set; }
        /// <summary>
        /// ���㹫ʽ
        /// </summary>
        [MaxLength(50)]
        [Column("attributecalcomp")]
        public string AttributeCalComp { get; set; }
        /// <summary>
        /// ��������
        /// </summary>
        [Column("attributesort")]
        public int? AttributeSort { get; set; }

    }
}