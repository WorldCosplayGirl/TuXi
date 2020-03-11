using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using InfoEarthFrame.Application.LayerFieldDictApp.Dtos;
using InfoEarthFrame.Core.Repositories;
using InfoEarthFrame.Core.Entities;
using System.Linq;

namespace InfoEarthFrame.Application.LayerFieldDictApp
{
	public class LayerFieldDictAppService : IApplicationService,ILayerFieldDictAppService
	{
		private readonly ILayerFieldDictRepository _ILayerFieldDictRepository;
        private readonly ILayerFieldRepository _ILayerFieldRepository;

		/// <summary>
		/// ���캯��
		/// </summary>
        public LayerFieldDictAppService(ILayerFieldDictRepository iLayerFieldDictRepository, ILayerFieldRepository iLayerFieldRepository)
		{
			_ILayerFieldDictRepository = iLayerFieldDictRepository;
            _ILayerFieldRepository = iLayerFieldRepository;
		}

		#region �Զ�����
		/// <summary>
		/// ��ȡ��������
		/// </summary>
		public async Task<ListResultOutput<LayerFieldDictDto>> GetAllList()
		{
			try
			{
                //var query = await _ILayerFieldDictRepository.GetAllListAsync();
                var query =  _ILayerFieldDictRepository.GetAllList();
                var list = new ListResultOutput<LayerFieldDictDto>(query.MapTo<List<LayerFieldDictDto>>());
				return list;
			}
			catch(Exception ex)
			{
				throw new Exception(ex.Message);
			}
		}

		/// <summary>
		/// ���ݱ�Ż�ȡ����
		/// </summary>
		public async Task<LayerFieldDictOutputDto> GetDetailById(string id)
		{
			try
			{
				var query = await _ILayerFieldDictRepository.GetAsync(id);
				var result = query.MapTo<LayerFieldDictOutputDto>();
				return result;
			}
			catch(Exception ex)
			{
				throw new Exception(ex.Message);
			}
		}

		/// <summary>
		/// ��������
		/// </summary>
		public async Task<LayerFieldDictDto> Insert(LayerFieldDictInputDto input)
		{
			try
			{
                input.Id = Guid.NewGuid().ToString();
				LayerFieldDictEntity entity = new LayerFieldDictEntity
				{
					Id = input.Id,
					AttributeID = input.AttributeID,
					FieldDictName = input.FieldDictName,
					FieldDictDesc = input.FieldDictDesc
				};
				var query = await _ILayerFieldDictRepository.InsertAsync(entity);
                var result = query.MapTo<LayerFieldDictDto>();
				return result;
			}
			catch(Exception ex)
			{
				throw new Exception(ex.Message);
			}
		}

        /// <summary>
        /// ��������
        /// </summary>
        /// <param name="lstInput"></param>
        /// <returns></returns>
        public bool MultiInsert(List<LayerFieldDictInputDto> lstInput)
        {
            try
            {
                string layerId = string.Empty;
                foreach (var input in lstInput)
                {
                    LayerFieldDictDto dto = Insert(input).Result;
                }
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

		/// <summary>
		/// ��������
		/// </summary>
		public async Task<LayerFieldDictDto> Update(LayerFieldDictInputDto input)
		{
			try
			{
				LayerFieldDictEntity entity = new LayerFieldDictEntity
				{
					Id = input.Id,
					AttributeID = input.AttributeID,
					FieldDictName = input.FieldDictName,
					FieldDictDesc = input.FieldDictDesc
				};
				var query = await _ILayerFieldDictRepository.UpdateAsync(entity);
				var result = entity.MapTo<LayerFieldDictDto>();
				return result;
			}
			catch(Exception ex)
			{
				throw new Exception(ex.Message);
			}
		}

        /// <summary>
        /// ͨ��ͼ��ID��ȡ�ֶ��ֵ伯��
        /// </summary>
        /// <param name="layerID"></param>
        /// <returns></returns>
        public ListResultOutput<LayerFieldDictDto> GetFieldDictByLayerID(string layerID)
        {
            try
            {
                List<LayerFieldDictDto> layerFieldDicts = new List<LayerFieldDictDto>();
                var query = _ILayerFieldRepository.GetAll().Where(q => q.LayerID == layerID && q.AttributeDataType == "T").ToList();
                foreach(var item in query)
                {
                    string fieldId = item.Id;
                    var result = _ILayerFieldDictRepository.GetAll().Where(t => t.AttributeID == fieldId).ToList();

                    foreach (var detail in result)
                    {
                        LayerFieldDictDto dto = new LayerFieldDictDto();
                        dto.AttributeID = detail.AttributeID;
                        dto.FieldDictDesc = detail.FieldDictDesc;
                        dto.FieldDictName = detail.FieldDictName;
                        dto.Id = detail.Id;
                        layerFieldDicts.Add(dto);
                    }
                }

                var list = new ListResultOutput<LayerFieldDictDto>(layerFieldDicts);
                return list;
            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

		/// <summary>
		/// ɾ������
		/// </summary>
		public async Task Delete(string id)
		{
			try
			{
				await _ILayerFieldDictRepository.DeleteAsync(id);
			}
			catch(Exception ex)
			{
				throw new Exception(ex.Message);
			}
		}
		#endregion
	}
}

