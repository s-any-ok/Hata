namespace Hata.BLL.Abstract.IMapper
{
    public interface IMapper<TEntity, TModel>
    {
        TModel Map(TEntity ent);
    }
}
