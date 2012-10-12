<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Empresa.aspx.cs" Inherits="Tbi.BusinessInsight.WebApplication.Cadastros.Empresa" %>


<asp:Content runat="server" ContentPlaceHolderID="HeadContent">
</asp:Content>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">


     <script type="text/javascript">
          function carregaJquery() {
              $("#CnpjTxt").mask("99.999.999/9999-99");
          }

      </script>



    <asp:UpdatePanel ID="Upn" runat="server">
        <ContentTemplate>


            <hgroup class="title">
                <h1>Cadastro de empresa</h1>
            </hgroup>

            <div id="ModalAlerta">
                <section id="loginForm">
                    <fieldset>
                        <ol>
                            <li>
                                <label>Nome da empresa </label>
                                <asp:TextBox runat="server" ID="EmpresaTxt" />
                                <br />
                                <asp:RequiredFieldValidator runat="server" ControlToValidate="EmpresaTxt" CssClass="field-validation-error" ErrorMessage="Informe o nome da empresa" ID="EmpresaRfv" Display="Dynamic" />
                            </li>
                            <li>
                                <label>Nome fantasia</label>
                                <asp:TextBox runat="server" ID="NomeFantasiaTxt" />
                                <br />
                                <asp:RequiredFieldValidator runat="server" ControlToValidate="NomeFantasiaTxt" CssClass="field-validation-error" ErrorMessage="Informe o nome fantasia." ID="FantasiaRfv" />
                            </li>
                            <label>CNPJ</label>
                            <asp:TextBox runat="server" ID="CnpjTxt" ClientIDMode="Static" />
                            <br />
                            <asp:RequiredFieldValidator runat="server" ControlToValidate="CnpjTxt" CssClass="field-validation-error" ErrorMessage="Informe o CNPJ." ID="CnpjRfv" />
                            <li></li>
                        </ol>
                        <asp:Button runat="server" Text="Cadastrar" ID="CadastrarBtn" OnClick="CadastrarClick" />
                    </fieldset>
                </section>

                <section id="socialLoginForm">
                    <fieldset>
                        <ol>
                            <li>
                                <label>E-mail</label>
                                <asp:TextBox runat="server" ID="Email" />
                                <br />
                                <asp:RequiredFieldValidator runat="server" ControlToValidate="Email" CssClass="field-validation-error" ErrorMessage="Informe seu email." ID="EmailRfv" Display="Dynamic" />
                                <asp:RegularExpressionValidator ID="EmailRev" runat="server" ControlToValidate="Email" CssClass="field-validation-error" ErrorMessage="E-mail inválido" ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*" Display="Dynamic" />

                            </li>
                            <li>
                                <label>Senha</label>
                                <asp:TextBox runat="server" ID="SenhaTxt" TextMode="Password" />
                                <br />
                                <asp:RequiredFieldValidator runat="server" ControlToValidate="SenhaTxt" CssClass="field-validation-error" ErrorMessage="Informe sua senha." ID="SenhaRfv" />

                            </li>
                            <li>
                                <label>Confirme sua senha</label>
                                <asp:TextBox runat="server" ID="ConfirmaSenhaTxt" TextMode="Password" />
                                <br />
                                <asp:RequiredFieldValidator runat="server" ControlToValidate="ConfirmaSenhaTxt" Display="Dynamic" CssClass="field-validation-error" ErrorMessage="Informe sua senha." ID="ConfirmaSenhaRfv" />
                                <asp:CompareValidator runat="server" ID="SenhaComp" Display="Dynamic" ControlToValidate="ConfirmaSenhaTxt" CssClass="field-validation-error" ControlToCompare="SenhaTxt" Text="Senhas não conferem" />

                            </li>
                        </ol>

                    </fieldset>

                </section>
        </ContentTemplate>
    </asp:UpdatePanel>



</asp:Content>
