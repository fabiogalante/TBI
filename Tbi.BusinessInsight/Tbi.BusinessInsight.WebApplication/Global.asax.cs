using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Routing;
using System.Web.Security;
using Tbi.BusinessInsight.WebApplication;

namespace Tbi.BusinessInsight.WebApplication
{
    using System.Net.Mail;
    using System.Text;
    using Negocio;

    public class Global : HttpApplication
    {
        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {
            FormsAuthenticationUtil.AttachRolesToUser();
        }


        void Application_Start(object sender, EventArgs e)
        {
           
        }

        void Application_End(object sender, EventArgs e)
        {
            //  Code that runs on application shutdown

        }

        void Application_Error(object sender, EventArgs e)
        {
            // Code that runs when an unhandled error occurs

        }

        private void EmailException(Exception ex)
        {

            StringBuilder sb = new StringBuilder();
            StringBuilder sbTxtErro = new StringBuilder();
            sb.Append("<html><style>TABLE {font-size: 8pt; font-family: Arial, Verdana;}</style><body><table>");

            sb.Append(FormatHeader("Page Error"));
            sb.Append(FormatError("Path", Request.Path));
            sb.Append(FormatError("URL", Request.RawUrl));
            sb.Append(FormatError("Last Error Message", Server.GetLastError().Message));
            sb.Append(FormatError("Last Error Source", Server.GetLastError().Source));
            sb.Append(FormatError("Error Time", Convert.ToString(DateTime.Now)));

            sb.Append(FormatHeader("Exception"));
            Exception ErrorInfo = Server.GetLastError().GetBaseException();
            sb.Append(FormatError("Error Message", ErrorInfo.Message));
            sb.Append(FormatError("Error Source", ErrorInfo.Source));
            sb.Append(FormatError("Error Target Site", ErrorInfo.TargetSite.ToString()));

            //sb.Append(FormatHeader("Session"));
            //for (int i = 0; i < Context.Session.Count; i++)
            //{
            //    sb.Append(FormatError(Context.Session.Keys[i], Context.Session[i].ToString()));
            //    if (Context.Session.Keys[i].ToString().ToLower() == "sistema")
            //    {
            //        Sistema = Context.Session[i].ToString();
            //    }
            //}

            sb.Append(FormatHeader("Query String"));
            for (int i = 0; i < Context.Request.QueryString.Count; i++)
            {
                sb.Append(FormatError(Context.Request.QueryString.Keys[i], Context.Request.QueryString[i]));
                //strTxtErro += Context.Request.QueryString.Keys[i] + ": " + Context.Request.QueryString[i] + "  ";
                sbTxtErro.Append(Context.Request.QueryString.Keys[i] + ": " + Context.Request.QueryString[i] + "  ");
            }

            sb.Append(FormatHeader("Post Form"));
            for (int i = 0; i < Context.Request.Form.Count; i++)
            {
                if (Context.Request.Form.Keys[i].ToString().ToUpper() != "__LASTFOCUS" &&
                    Context.Request.Form.Keys[i].ToString().ToUpper() != "__EVENTTARGET" &&
                    Context.Request.Form.Keys[i].ToString().ToUpper() != "__EVENTARGUMENT" &&
                    Context.Request.Form.Keys[i].ToString().ToUpper() != "__VIEWSTATE" &&
                    Context.Request.Form.Keys[i].ToString().ToUpper() != "__EVENTVALIDATION")
                {
                    //strTxtErro += Context.Request.Form.Keys[i] + ": " + Context.Request.Form[i] + "  ";
                    sbTxtErro.Append(Context.Request.Form.Keys[i] + ": " + Context.Request.Form[i] + "  ");
                }

                sb.Append(FormatError(Context.Request.Form.Keys[i], Context.Request.Form[i]));
            }

            sb.Append(FormatHeader("Others"));
            if (User.Identity.IsAuthenticated)
            {
                sb.Append(FormatError("User", User.Identity.Name));
            }
            sb.Append(FormatError("Exception Stack Trace", Server.GetLastError().StackTrace));

            sb.Append(FormatHeader("Server Variables"));
            for (int i = 0; i < Context.Request.ServerVariables.Count; i++)
            {
                sb.Append(FormatError(Context.Request.ServerVariables.Keys[i], Context.Request.ServerVariables[i]));
            }
            sb.Append("</table></body></html>");

            EnviaEmail(sb.ToString());

        }

        private void EnviaEmail(string msg)
        {
            MailMessage mail = new MailMessage();
            mail.From = new MailAddress("f.galante@gruposbf.com.br", "ERRO - TRANSFERÊNCIA PROMOÇÃO");
            mail.To.Add("f.galante@gruposbf.com.br");
            mail.Subject = "SISTEMA TRANSFERÊNCIA - ERRO";
            mail.Body = msg;
            mail.IsBodyHtml = true;
            mail.Priority = MailPriority.Normal;
            SmtpClient smtpClient = new SmtpClient();
            smtpClient.Host = "smtpsp";
            smtpClient.Send(mail);
        }

        protected string FormatHeader(string var)
        {
            return "<tr bgcolor=red><td colspan=2 align=center><font color=white><strong>" + var + "</strong></font></td></tr>";
        }

        protected string FormatError(string key, string value)
        {
            return "<tr><td align=right><strong>" + key + ":</strong></td><td>" + value + "</td></tr>";
        }

    }
}
