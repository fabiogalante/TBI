using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Tbi.BusinessInsight.Model
{
    using System.ComponentModel.DataAnnotations;

    public class UnidadeMedida
    {
        
        public int UnidadeMedidaId { get; set; }
        public string UnidadeMedidaDescricao { get; set; }
        public virtual ICollection<Produto> Produtos { get; set; }

       
    }
}
