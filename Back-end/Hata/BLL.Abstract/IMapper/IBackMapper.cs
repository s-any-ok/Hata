namespace Hata.BLL.Abstract.IMapper
{
    public interface IBackMapper<TEntity, TModel> : IMapper<TEntity, TModel>
    {
        TEntity MapBack(TModel mdl);
    }
}
