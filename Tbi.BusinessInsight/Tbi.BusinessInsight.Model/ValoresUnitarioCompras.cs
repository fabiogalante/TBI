using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Tbi.BusinessInsight.Model
{
    public  class ValoresUnitarioCompras
    {
        private readonly ProdutoEntrada _produtoEntrada;

        public ValoresUnitarioCompras(ProdutoEntrada produtoEntrada)
        {
            _produtoEntrada = produtoEntrada;
        }
        

        public decimal Produtos
        {
            get { return _produtoEntrada.Quantidade; }
        }

        public decimal Fso
        {
            get { return (_produtoEntrada.Frete + _produtoEntrada.Seguro + _produtoEntrada.Outras) / _produtoEntrada.Quantidade; }
            
        }
    }
}
