using System.Collections.Generic;
using Hata.Models.Enums;

namespace Hata.Models
{
    public class GenericPaginatedModel<TModel>
    {
        public List<TModel> Models { get; set; }
        public PaginationModel Pagination { get; set; }
        public string NextDataUrl { get; set; }
    }

    public class GenericPaginatedModelWithSorting<TEnum, TModel> : GenericPaginatedModel<TModel>
    {
        public Dictionary<TEnum, SortType> SortedFields { get; set; }
    }
}
