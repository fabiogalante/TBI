using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Tbi.BusinessInsight.Model;

namespace Tbi.BusinessInsight.Repositorio
{
    public class EmpresaRepositorio
    {
        readonly TbiContext _db = new TbiContext();

        public Empresa Login(string email)
        {
            var empresa = _db.Empresas.SingleOrDefault(e => e.Email == email);
            return empresa;
        }

        public void CadastrarEmpresa(Empresa empresa)
        {
            _db.Empresas.Add(empresa);
            _db.SaveChanges();
        }

        public void AlterarEmpresa(Empresa empresa)
        {

        }

        public void ListarEmpresas(Empresa empresa)
        {

        }
    }
}
