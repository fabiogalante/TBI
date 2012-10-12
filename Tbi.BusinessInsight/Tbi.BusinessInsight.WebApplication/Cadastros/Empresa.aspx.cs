using System;
using System.Web.UI;

namespace Tbi.BusinessInsight.WebApplication.Cadastros
{
    using Negocio;
    using Repositorio;

    public partial class Empresa : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
           Negocio.Util.RegistraJavascript(Upn,"carregaJquery();");
        }

        protected void CadastrarClick(object sender, EventArgs e)
        {
            if(Page.IsValid)
            {
                CadastrarEmpresa();
            }
        }

        private void CadastrarEmpresa()
        {

            try
            {
                Model.Empresa empresa = new Model.Empresa
                {
                    EmpresaNome = EmpresaTxt.Text,
                    Cnpj = CnpjTxt.Text.Replace(".", "").Replace("/", "").Replace("-",""),
                    Email = Email.Text,
                    Senha = SenhaTxt.Text,
                    NomeFantasia = NomeFantasiaTxt.Text
                };
                EmpresaRepositorio repositorio = new EmpresaRepositorio();
                repositorio.CadastrarEmpresa(empresa);

                CriaTicket(empresa);

                Util.RegistraJavascript(Upn, "_MsgSistema.Alerta('<p> Empresa cadastrada com sucesso.</p>')");
            }
            catch (Exception ex)
            {
                Util.RegistraJavascript(Upn, "_MsgSistema.AlertaDeErro('<p> Erro ao cadastrar a empresa.</p>',' "+ ex.Message +" ')");
            }
        }


        private void CriaTicket(Model.Empresa empresa)
        {
            FormsAuthenticationUtil.RedirectFromLoginPage(empresa.NomeFantasia, string.Empty, false);
        }
    }
}