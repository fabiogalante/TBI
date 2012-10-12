using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tbi.BusinessInsight.Model
{
    public class RegimeTributario
    {
        public IrCssl IrCssl { get; set; }
        public decimal ReceitaIncentivada { get; set; }
        public decimal DeducoesDaBc { get; set; }







    }

    public enum IrCssl
    {
        LucroReal, LucroPresumido
    }

    public enum PisCofins
    {
        Cumulativo, NaoCumulativo
    }

 
}
