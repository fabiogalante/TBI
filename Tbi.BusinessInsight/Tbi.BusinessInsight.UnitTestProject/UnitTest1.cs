using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Tbi.BusinessInsight.Model;
using System.Collections.Generic;
using Tbi.BusinessInsight.Negocio;

namespace Tbi.BusinessInsight.UnitTestProject
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void CalcularPrecoSimilar()
        {
            ProdutoEntrada produtoEntrada = new ProdutoEntrada();
            produtoEntrada.Quantidade = 10;
            produtoEntrada.Frete = 80;
            produtoEntrada.Seguro = 75;
            produtoEntrada.Outras = 0;

            ValoresUnitarioCompras compras = new ValoresUnitarioCompras();

          var j =  compras.Fso;
            var y = compras.Produtos;
        }


        [TestMethod]
        public void CalcularFso()
        {
            Categoria categoria = new Categoria
                {
                    CategoriaDescricao = "Computadores",
                };

            Produto produto = new Produto
                {
                    ProdutoId = 21,



                };
        }
    }
}
