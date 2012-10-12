using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Tbi.BusinessInsight.Model
{
    public class Movimento
    {
        public int MovimentoId { get; set; }
        public Categoria Categoria { get; set; }
    }
}
