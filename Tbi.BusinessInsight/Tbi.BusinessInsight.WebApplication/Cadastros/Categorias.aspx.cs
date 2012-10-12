using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.ComponentModel.DataAnnotations;

namespace Tbi.BusinessInsight.WebApplication.Cadastros
{
    using Model;
    using Repositorio;

    public partial class Categorias : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }


        
        public IQueryable<Categoria> ObterCategorias()
        {
            CategoriaRepositorio categoriaRepositorio = new CategoriaRepositorio();
            var categorias = categoriaRepositorio.ObterCategorias();

            return categorias;
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            
        }

    }
}