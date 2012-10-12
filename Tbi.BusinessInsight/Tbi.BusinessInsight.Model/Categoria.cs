using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Tbi.BusinessInsight.Model
{
    using System.ComponentModel.DataAnnotations;

    public class Categoria
    {
       
        public int CategoriaId { get; set; }
        public string CategoriaDescricao { get; set; }
        public virtual ICollection<Produto> Produtos { get; set; }
    }
}
