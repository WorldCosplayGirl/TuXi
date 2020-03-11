using System;
using Abp.Application.Services.Dto;
using System.Collections.Generic;

namespace InfoEarthFrame.Application
{
    public class GroupUserComparaInput : IInputDto
    {
        /// <summary>
        /// �Ѵ����û�
        /// </summary>
        public List<GroupUserInput> ExistUser { get; set; }

        /// <summary>
        /// ������û�
        /// </summary>
        public List<GroupUserInput> InputArr { get; set; }  
    }

    public class GroupUserDto
    {


        public string GroupId { get; set; }

        public List<string> UserIds { get; set; }
    }
}