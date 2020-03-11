using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using InfoEarthFrame.Application.DicDataTypeApp.Dtos;

namespace InfoEarthFrame.Application.DicDataTypeApp
{
	public interface IDicDataTypeAppService : IApplicationService
	{
		#region �Զ�����
		Task<ListResultOutput<DicDataTypeDto>> GetAllList();

		Task<DicDataTypeOutputDto> GetDetailById(string id);

		Task<DicDataTypeDto> Insert(DicDataTypeInputDto input);

		Task<DicDataTypeDto> Update(DicDataTypeInputDto input);

		Task Delete(string id);
		#endregion
	}
}

