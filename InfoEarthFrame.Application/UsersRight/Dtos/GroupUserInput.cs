using System;
using Abp.Application.Services.Dto;

namespace InfoEarthFrame.Application
{
    public class GroupUserInput : IInputDto
    {
        /// <summary>
        /// Id
        /// </summary>
        public string Id { get; set; }
        /// <summary>
        /// ����ID
        /// </summary>
        public string GroupId { get; set; }

        /// <summary>
        /// �û�ID
        /// </summary>
        public string UserId { get; set; }  
    }
}