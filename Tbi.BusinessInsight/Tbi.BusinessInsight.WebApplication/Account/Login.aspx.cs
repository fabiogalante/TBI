using System;
using System.Web.UI;

namespace Tbi.BusinessInsight.WebApplication.Account
{
    using Model;
    using Negocio;
    using Repositorio;

    public partial class Login : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
           
        }

        protected void AcessarClick(object sender, EventArgs e)
        {
            var senha = Senha.Text;
            var email = Email.Text;
            EmpresaRepositorio repositorio = new EmpresaRepositorio();
            var empresa = repositorio.Login(email);

            if (empresa != null)
            {
                Validar(empresa, senha);
            }
            else
            {
                Util.RegistraJavascript(Upn, "_MsgSistema.Alerta('<p> Empresa não cadastrada.</p>')");
            }
        }

        private void Validar(Empresa empresa, string senha)
        {
            if (Equals(empresa.Senha, senha))
            {
                CriaTicket(empresa);
            }
            else
            {
                Util.RegistraJavascript(Upn, "_MsgSistema.Alerta('<p> Senha inválida.</p>')");
            }
        }

        private void CriaTicket(Empresa empresa)
        {
            FormsAuthenticationUtil.RedirectFromLoginPage(empresa.NomeFantasia, string.Empty, RememberMe.Checked);
        }
    }
}