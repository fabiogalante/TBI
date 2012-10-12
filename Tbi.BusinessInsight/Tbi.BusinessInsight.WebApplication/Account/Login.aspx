<%@ Page Title="Log in" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="Tbi.BusinessInsight.WebApplication.Account.Login" %>



<asp:Content runat="server" ID="BodyContent" ContentPlaceHolderID="MainContent">
  

    <asp:UpdatePanel ID="Upn" runat="server">
        <ContentTemplate>

            <div id="ModalAlerta">

                <section id="loginForm">
                    <fieldset>
                        <ol>
                            <li>
                                <asp:Label runat="server">E-mail</asp:Label>
                                <asp:TextBox runat="server" ID="Email" />
                                <asp:RequiredFieldValidator runat="server" ControlToValidate="Email" CssClass="field-validation-error" ErrorMessage="Informe seu email." ID="EmailRfv" Display="Dynamic" />
                                <asp:RegularExpressionValidator ID="EmailRev" runat="server" ControlToValidate="Email" CssClass="field-validation-error" ErrorMessage="E-mail inválido" ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*" Display="Dynamic" />

                            </li>
                            <li>
                                <asp:Label runat="server">Senha</asp:Label>
                                <asp:TextBox runat="server" ID="Senha" TextMode="Password" />
                                <asp:RequiredFieldValidator runat="server" ControlToValidate="Senha" CssClass="field-validation-error" ErrorMessage="Informe sua senha." ID="SenhaRfv" />

                            </li>

                            <li>
                                <asp:CheckBox runat="server" ID="RememberMe" />
                                <asp:Label runat="server" AssociatedControlID="RememberMe" CssClass="checkbox">Lembrar?</asp:Label>
                            </li>
                        </ol>
                        <asp:Button runat="server" CommandName="Login" Text="Acessar" ID="AcessarBtn" OnClick="AcessarClick" />
                    </fieldset>
                </section>


                <section id="socialLoginForm">
                    <h2>Não tem cadastro?</h2>

                    <p>
                        <asp:HyperLink runat="server" ID="RegisterHyperLink" ViewStateMode="Disabled" NavigateUrl="~/Cadastros/Empresa.aspx">Clique aqui</asp:HyperLink>
                        para registrar sua empresa.
                    </p>


                </section>
        </ContentTemplate>
    </asp:UpdatePanel>

</asp:Content>
