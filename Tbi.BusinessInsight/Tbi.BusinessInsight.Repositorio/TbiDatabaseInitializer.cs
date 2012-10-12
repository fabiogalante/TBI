using System.Collections.Generic;

namespace Tbi.BusinessInsight.Repositorio
{
    using System.Data.Entity;
    using Model;

    public class TbiDatabaseInitializer : DropCreateDatabaseIfModelChanges<TbiContext>
    {
        protected override void Seed(TbiContext context)
        {
            ObterCategoria().ForEach(c => context.Categorias.Add(c));
            ObterUnidadeMedida().ForEach(u => context.UnidadeMedidas.Add(u));
            ObterProdutos().ForEach(p => context.Produtos.Add(p));
        }

        private static List<UnidadeMedida> ObterUnidadeMedida()
        {
            var unidadeMedida = new List<UnidadeMedida>
                {
                    new UnidadeMedida
                        {
                            UnidadeMedidaId = 1,
                            UnidadeMedidaDescricao = "Peça"
                        },
                    new UnidadeMedida
                        {
                            UnidadeMedidaId = 2,
                            UnidadeMedidaDescricao = "Litro"
                        }
                };
            return unidadeMedida;
        }

        private static List<Categoria> ObterCategoria()
        {
            var categorias = new List<Categoria>
                {
                    new Categoria
                        {
                            CategoriaId = 1,
                            CategoriaDescricao = "Câmaras e Filmadoras"
                        },
                    new Categoria
                        {
                            CategoriaId = 2,
                            CategoriaDescricao = "TV's e Audio"
                        },
                };

            return categorias;
        }

        private static List<Produto> ObterProdutos()
        {
            var produtos = new List<Produto>
                {
                    new Produto
                        {
                            ProdutoId = 1,
                            ProdutoDescricao = "Câmara Digital 3D 18.2 MP",
                            CategoriaId = 1,
                            UnidadeMedidaId = 1
                        }
                };

            return produtos;

        }
    }
}
