<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Categorias.aspx.cs" Inherits="Tbi.BusinessInsight.WebApplication.Cadastros.Categorias" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="FeaturedContent" runat="server">
    
    
    <asp:DropDownList ID="CategoriaDrp" runat="server" 
                    ItemType="Tbi.BusinessInsight.Model.Categoria" 
                    SelectMethod="ObterCategorias" DataTextField="CategoriaDescricao" 
                    DataValueField="CategoriaId" >
                </asp:DropDownList>

    

    <asp:GridView ID="GridView1" ItemType="Tbi.BusinessInsight.Model.Categoria" SelectMethod="ObterCategorias" runat="server" >
    </asp:GridView>
    

<asp:TextBox runat="server" ID="firstName" />
    
    <asp:Button ID="Button1" runat="server" Text="Button" OnClick="Button1_Click" />
    

</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MainContent" runat="server">
</asp:Content>
