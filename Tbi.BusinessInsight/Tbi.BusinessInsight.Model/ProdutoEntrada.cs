using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Tbi.BusinessInsight.Model
{
    /// <summary>
    /// Dados do Produto na Entrada
    /// </summary>
    public class ProdutoEntrada
    {
        public int? ProdutoId { get; set; }
        public string Ncm { get; set; }
        public int Quantidade { get; set; }
        public decimal ValorUnitario { get; set; }
        public decimal Ipi { get; set; }
        public decimal Icms { get; set; }
        public decimal IcmsSt { get; set; }
        public decimal Frete { get; set; }
        public decimal Seguro { get; set; }
        public decimal Outras { get; set; }
        public decimal ValorTotalEntrada { get; set; }


    }

   
}
