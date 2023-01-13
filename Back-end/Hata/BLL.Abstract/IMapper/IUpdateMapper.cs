namespace Hata.BLL.Abstract.IMapper
{
    public interface IUpdateMapper<TEntity, TModel> : IBackMapper<TEntity, TModel>
    {
        TEntity MapBackInto(TEntity existingEntity, TModel mdl);
    }
}
