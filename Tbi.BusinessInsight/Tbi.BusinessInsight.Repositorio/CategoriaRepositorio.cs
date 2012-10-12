using System.Linq;

namespace Tbi.BusinessInsight.Repositorio
{
    using Model;

    public class CategoriaRepositorio
    {
        public IQueryable<Categoria> ObterCategorias()
        {
            IQueryable<Categoria> query;
            using (var db = new TbiContext())
            {
                query = db.Categorias;
            }
            return query;
        }

        public void IncluirCategoria(Categoria categoria)
        {
            var novaCategoria = new Categoria()
                {
                    CategoriaDescricao = categoria.CategoriaDescricao,
                };

            using (TbiContext db = new TbiContext())
            {
                db.Categorias.Add(novaCategoria);
                db.SaveChanges();
            }
        }
    }
}
