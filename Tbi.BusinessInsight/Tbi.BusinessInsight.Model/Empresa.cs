using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tbi.BusinessInsight.Model
{
    public class Empresa
    {
        public int EmpresaId { get; set; }
        public string EmpresaNome { get; set; }
        public string NomeFantasia { get; set; }
        public string Cnpj { get; set; }
        public byte? LogoMarca { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
    }
}

