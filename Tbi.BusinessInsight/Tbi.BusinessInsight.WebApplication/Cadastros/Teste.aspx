<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Teste.aspx.cs" Inherits="Tbi.BusinessInsight.WebApplication.Teste" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    
    <link href="../Styles/jquery-ui/smoothness/jquery-ui-1.8.15.custom.css" rel="stylesheet" />
    <script src="../Scripts/jquery-1.7.1.min.js"></script>
    
    <script src="../Scripts/jquery.maskedinput-1.1.4.pack.js"></script>
    

    <script src="../Teste/jquery-ui-1.8.18.custom.min.js"></script>
    
    <script src="../Scripts/scripts.comum.js"></script>
    
    


    <script type="text/javascript">
        $(document).ready(function () {
            $("#cnpj").mask("9999-9999");
        });
    </script>
    
    

</head>
<body>
    
   

    <form id="form1" runat="server">
        
             
               <asp:ScriptManager ID="ScriptManager1" runat="server">
            </asp:ScriptManager>
        
        <div id="ModalAlerta"/>

    <asp:UpdatePanel ID="Upn" runat="server">
        <ContentTemplate>

        <asp:TextBox ID="cnpj" runat="server"></asp:TextBox>
       
            
               </ContentTemplate>
    </asp:UpdatePanel>
   
               </div>
               <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Button" />
   
    </form>
</body>
</html>
