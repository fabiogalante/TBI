using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Tbi.BusinessInsight.Model
{
    public class ProdutoSaida
    {
        public int? ProdutoId { get; set; }
        public decimal PrecoUnitarioTabela { get; set; }
        public decimal PrecoUnitarioFpv { get; set; }
        public PrecoOpcao PrecoOpcao { get; set; }
        public decimal PrecoSimilar { get; set; }
        public decimal IcmsSaidaPorcentagem { get; set; }
        public decimal IcmsSaidaValor { get; set; }
    }

    public enum PrecoOpcao
    {
        PrecoCfTabela, PrecoCfFpv

    }
}
