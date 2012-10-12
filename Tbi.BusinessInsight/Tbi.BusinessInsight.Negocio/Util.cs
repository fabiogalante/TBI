namespace Tbi.BusinessInsight.Negocio
{
    using System;
    using System.Linq;
    using System.Text.RegularExpressions;
    using System.Threading;
    using System.Web.UI;

    public static class Util
    {
        /// <summary>Método que converte uma string para ficar com a primeira letra de cada palavra em maiuscula</summary>
        /// <param name="frase">Frase a ser convertida</param>
        /// <returns>Frase já convertida</returns>
        public static string AjustaStringTMaiuscula(object frase)
        {
            string f1 = Convert.ToString(frase).ToLower();
            var f2 = Thread.CurrentThread.CurrentCulture;
            return f2.TextInfo.ToTitleCase(f1);
        }

        /// <summary>Método que registra um javascript</summary>
        public static void RegistraJavascript(UpdatePanel updPanel, string javascript)
        {
            string msgScript = javascript;
            ScriptManager.RegisterStartupScript(updPanel, updPanel.GetType(), msgScript, msgScript, true);
        }

        /// <summary> </summary>
        /// <param name="palavra"></param>
        /// <param name="max"></param>
        /// <returns></returns>
        public static string CorteTexto(string palavra, int max)
        {
            string novaPalavra = null;
            if (!string.IsNullOrEmpty(palavra))
            {
                if (palavra.Length > max)
                {
                    for (int i = max; i >= 0; i--) //Loop no tamanho da palavra
                    {
                        if (palavra.Substring(i, 1) == " ")
                        {
                            novaPalavra += " " + palavra.Substring(0, i);
                            return string.Format("{0}...", novaPalavra);
                        }
                    }
                }
                else
                {
                    return palavra;
                }
            }

            return string.Format("{0}.....", novaPalavra);
        }

        /// <summary>Verifica se a string é composta somente por números</summary>
        /// <param name="texto"></param>
        /// <returns></returns>
        public static bool VerificaStringNumerica(string texto)
        {
            if (!string.IsNullOrEmpty(texto))
            {
                //if (ContemLetras(texto) && ContemNumeros(texto))
                //{
                //    return false;
                //}
                if (ContemLetras(texto))
                {
                    return false;
                }
                if (ContemNumeros(texto))
                {
                    return true;
                }
            }
            return false;
        }

        private static bool ContemLetras(string texto)
        {
            return (texto.Where(c => char.IsLetter(c)).Count() > 0);
        }

        private static bool ContemNumeros(string texto)
        {
            return (texto.Where(c => char.IsNumber(c)).Count() > 0);
        }

        
        
        
        /// <summary>
        /// Remove HTML from string with Regex.
        /// </summary>
        public static string StripTagsRegex(string source)
        {
            return Regex.Replace(source, "<.*?>", string.Empty);
        }

        /// <summary>
        /// Compiled regular expression for performance.
        /// </summary>
        private static Regex _htmlRegex = new Regex("<.*?>", RegexOptions.Compiled);

        /// <summary>
        /// Remove HTML from string with compiled Regex.
        /// </summary>
        public static string StripTagsRegexCompiled(string source)
        {
            return _htmlRegex.Replace(source, string.Empty);
        }

        /// <summary>
        /// Remove HTML tags from string using char array.
        /// </summary>
        public static string StripTagsCharArray(string source)
        {
            char[] array = new char[source.Length];
            int arrayIndex = 0;
            bool inside = false;

            for (int i = 0; i < source.Length; i++)
            {
                char let = source[i];
                if (let == '<')
                {
                    inside = true;
                    continue;
                }
                if (let == '>')
                {
                    inside = false;
                    continue;
                }
                if (!inside)
                {
                    array[arrayIndex] = let;
                    arrayIndex++;
                }
            }
            return new string(array, 0, arrayIndex);
        }

    }


}
