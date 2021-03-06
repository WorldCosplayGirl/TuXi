﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml.Serialization;

namespace InfoEarthFrame.Common
{
    public class maintCont
    {
        [XmlElement]
        public string rpIndName { get; set; }
        [XmlElement]
        public string rpOrgName { get; set; }
        [XmlElement]
        public string rpPosName { get; set; }
        [XmlElement]
        public string role { get; set; }

        private rpCntInfo _rpCntInfo;
        [XmlElement]
        public rpCntInfo rpCntInfo
        {
            get
            {
                if (_rpCntInfo == null)
                {
                    _rpCntInfo = new rpCntInfo();
                }
                return _rpCntInfo;
            }
            set
            {
                _rpCntInfo = value;
            }
        }
    }
}
