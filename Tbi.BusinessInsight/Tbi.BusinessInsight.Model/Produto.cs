using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Tbi.BusinessInsight.Model
{
    using System.ComponentModel.DataAnnotations;

    public class Produto
    {
       
        public int ProdutoId { get; set; }
        public string ProdutoDescricao { get; set; }
        public int? CategoriaId { get; set; }
        public int? UnidadeMedidaId { get; set; }
        public virtual UnidadeMedida UnidadeMedida { get; set; }
        public virtual Categoria Categoria { get; set; }


    }




}
