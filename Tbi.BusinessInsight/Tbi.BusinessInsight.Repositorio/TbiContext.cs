namespace Tbi.BusinessInsight.Repositorio
{
    using System.Data.Entity;
    using Model;

    public class TbiContext : DbContext
    {
        public TbiContext() : base("Tbi")
        {
        }
        public DbSet<Categoria> Categorias { get; set; }
        public DbSet<Produto> Produtos { get; set; }
        public DbSet<UnidadeMedida> UnidadeMedidas { get; set; }
        public DbSet<Empresa> Empresas { get; set; }
    }
}
