/// <reference path="../Scripts/jquery-1.4.4-vsdoc.js" />
function ControlaHistorico(campo) {
    //alert(campo.attr('id'));
    var seta = campo.children();
    if (seta.attr('lang') == 'Aberta') {
        seta.removeClass('Aberta').addClass('Fechada');
        seta.attr('lang', 'Fechada');
    } else {
        seta.removeClass('Fechada').addClass('Aberta');
        seta.attr('lang', 'Aberta');
    }
    campo.next().slideToggle("fast");
}

function ExpandirTodoHistorico() {
    $('.UlHistorico A.title01').each(function () {
        var seta = $(this).children();
        seta.removeClass('Fechada').addClass('Aberta');
        seta.attr('lang', 'Aberta');
        $(this).next().slideDown("fast");
    });
}

var _Comum = {
    Construtor: function () {
        //teste
    },
    TextCounter: function (campo, campoCount, maxlimit) {
        if (campo.val().length > maxlimit) {
            campo.val(campo.val().substring(0, maxlimit));
        } else {
            campoCount.val(maxlimit - campo.val().length);
        }
    },
    AlertConfirm: function (msg) {
        if (confirm(msg)) {
            return true;
        } else {
            return false;
        }
    },
    ValidarDatas: function (digData) {
        var bissexto = 0;
        var data = digData;
        var tam = data.length;
        if (tam == 10) {
            var dia = data.substr(0, 2);
            var mes = data.substr(3, 2);
            var ano = data.substr(6, 4);
            if ((ano > 1900)) { // || (ano < 2100)
                switch (mes) {
                    case '01':
                    case '03':
                    case '05':
                    case '07':
                    case '08':
                    case '10':
                    case '12':
                        if (dia <= 31) {
                            return true;
                        }
                        break;
                    case '04':
                    case '06':
                    case '09':
                    case '11':
                        if (dia <= 30) {
                            return true;
                        }
                        break;
                    case '02':
                        /* Validando ano Bissexto / fevereiro / dia */
                        if ((ano % 4 == 0) || (ano % 100 == 0) || (ano % 400 == 0)) {
                            bissexto = 1;
                        }
                        if ((bissexto == 1) && (dia <= 29)) {
                            return true;
                        }
                        if ((bissexto != 1) && (dia <= 28)) {
                            return true;
                        }
                        break;
                }
            }
        }
        //alert("A Data " + data + " é inválida!");
        return false;
    },

    VerificaData1MaiorData2: function (data1, data2) {

        if (data1.length < 10 || data2.length < 10) {
            return false;
        } else {
            if (parseInt(data2.split("/")[2].toString() + data2.split("/")[1].toString() + data2.split("/")[0].toString()) > parseInt(data1.split("/")[2].toString() + data1.split("/")[1].toString() + data1.split("/")[0].toString())) {
                //alert("maior");
                return false;
            }
            else {
                //alert("não é maior");
                return true;
            }
        }
    },
    ValidarCPF: function (s) {

        s = _Comum.ReplaceAll(s, '.', '');
        s = _Comum.ReplaceAll(s, '-', '');

        var v = 0;
        var c = s.substr(0, 9);
        var dv = s.substr(9, 2);
        var d1 = 0;
        for (var i = 0; i < 9; i++) {
            var numC = c.substr(i, 1);
            d1 += numC * (10 - i);
        }
        if (d1 == 0) {
            v = 1;
            //alert("CPF Inválido");
            return false;
        } else {
            d1 = 11 - (d1 % 11);
            if (d1 > 9) d1 = 0;
            var numDv = dv.substr(0, 1);
            if (numDv != d1) {
                v = v + 1;
                //alert("CPF Inválido");
                return false;
            } else {
                d1 *= 2;
                for (i = 0; i < 9; i++) {
                    numC = c.substr(i, 1);
                    d1 += numC * (11 - i);
                }
                d1 = 11 - (d1 % 11);
                if (d1 > 9) d1 = 0;
                numDv = dv.substr(1, 1);
                if (numDv != d1) {
                    v = v + 1;
                    //alert("CPF Inválido");
                    return false;
                } else {
                    //alert("CPF OK");
                    return true;
                }
            }
        }

    },
    ReplaceAll: function (str, de, para) {
        var pos = str.indexOf(de);
        while (pos > -1) {
            str = str.replace(de, para);
            pos = str.indexOf(de);
        }
        return (str);
    },
    CheckMail: function (email) {

        er = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2}/;

        if (er.exec(email)) {
            return true; //Email valido
        } else {
            return false;
        }
    }
};


// *********************************************
// SOLUÇÃO ELEGANTE
// *********************************************
String.prototype.replaceAll = function (de, para) {
    var str = this;
    var pos = str.indexOf(de);
    while (pos > -1) {
        str = str.replace(de, para);
        pos = str.indexOf(de);
    }
    return (str);
};


var _MsgSistema = {
    //ModalDialog: null,
    Construtor: function () {
        //this.Pagina = pagina;
    },
    IncluirDivDialog: function (mensagem) {

        $("#dialog:ui-dialog").dialog("destroy");

        var html = '<div id="dialog-message" title="Mensagem do Sistema" style="display: none;">';
        html += '<p style="font-size:11px; line-height:17px;"><span class="ui-icon ui-icon-circle-check" style="float:left; display:block; margin:1px 7px 0px 0px;"></span>';
        html += mensagem;
        html += '</p></div>';
        $("#ModalAlerta").append(html);
    },
    Alerta: function (mensagem) {
        this.IncluirDivDialog(mensagem);
        $("#dialog-message").dialog({
            resizable: false,
            modal: true,
            width: 400,
            zIndex: 10000,
            buttons: {
                Ok: function () {
                    $(this).dialog("close");
                }
            }
        });
    },
    AlertaDeErro: function (mensagem, erro) {
        $("#dialog:ui-dialog").dialog("destroy");

        var html = '<div id="dialog-message" title="Mensagem do Sistema" style="display: none; font-size:11px;">';
        html += '<p><span class="ui-icon ui-icon-alert" style="float: left; display: block; margin: -1px 7px 0px 0px;"></span><strong>ATENÇÃO!</strong></p>';
        html += '<p style="margin-top:-5px;">' + mensagem + '</p>';
        html += '<p><strong>DETALHES DO ERRO:</strong><br>' + erro + '</p>';

        $("#ModalAlerta").append(html);

        $("#dialog-message").dialog({
            resizable: false,
            modal: true,
            width: 350,
            zIndex: 10000,
            buttons: {
                Ok: function () {
                    $(this).dialog("close");
                }
            }
        });
    },
    AlertaOptions: function (mensagem) {
        this.IncluirDivDialog(mensagem);
        $("#dialog-message").dialog({
            resizable: false,
            modal: true,
            zIndex: 10000,
            buttons: {
                Ok: function () {
                    $(this).dialog("close");
                }
            }
        });
    },
    AlertaVoltar: function (mensagem, url) {
        this.IncluirDivDialog(mensagem);
        $("#dialog-message").dialog({
            resizable: false,
            modal: true,
            zIndex: 10000,
            close: function () {
                window.location.href = url;
            },
            buttons: {
                Ok: function () {
                    window.location.href = url;
                }
            }
        });
    }
};

var _DetalheSolicitacao = {
    ValidaTipoAtividade: function () {
        var msg = "";
        if ($('[id$=DrpTipoAtividade]').val() == 'null') {
            msg += "- Informe o tipo de atividade da solicitação.<br/>";
        }
        if (msg.length > 0) {
            _MsgSistema.Alerta('<strong>Por favor, corrija o(s) erro(s) abaixo:</strong></p><p style="font-size: 11px; ">' + msg);
            return false;
        }
        return true;
    }
};

var _GerenciarUsuarios = {
    IniciarJquery: function () {
        $('[id$=RblRoles]').buttonset();
        if ($('[id$=GrdUsuarios] TD').length > 1) {
            $('[id$=GrdUsuarios]').dataTable({
                "bJQueryUI": true,
                "bStateSave": true,
                "aLengthMenu": [[10, 25, 50, -1], [10, 25, 50, "Todos"]],
                "iDisplayLength": 10,
                "aoColumns": [
                            { "bSortable": true },
                            { "bSortable": true },
                            { "bSortable": true },
                            { "bSortable": true },
                            { "bSortable": false },
                            { "bSortable": false }
                        ],
                "sPaginationType": "full_numbers"
            });
        }
    },
    ValidaMatricula: function () {
        var msg = "";
        if ($('[id$=TxtMatricula]').val().length <= 0) {
            msg += "- Informe a matrícula do colaborador.<br/>";
        }
        if (msg.length > 0) {
            _MsgSistema.Alerta('<strong>Por favor, corrija o(s) erro(s) abaixo:</strong></p><p style="font-size: 11px; ">' + msg);
            return false;
        }
        return true;
    },
    ValidarCadastro: function () {
        var msg = "";
        if ($('[id$=TxtMatricula]').val().length <= 0) {
            msg += "- Informe a matrícula do colaborador.<br/>";
        }
        if ($('[id$=TxtNome]').val().length <= 0) {
            msg += "- Informe o nome do colaborador.<br/>";
        }
        if ($('[id$=TxtEmail]').val().length <= 0) {
            msg += "- Informe o email do colaborador.<br/>";
        }
        if ($('[id*=RblRoles]:checked').length <= 0) {
            msg += "- Informe o perfil do colaborador.<br/>";
        }
        if (msg.length > 0) {
            _MsgSistema.Alerta('<strong>Por favor, corrija o(s) erro(s) abaixo:</strong></p><p style="font-size: 11px; ">' + msg);
            return false;
        }
        return true;
    }
};

var _GerenciarParametros = {
    IniciarJquery: function () {
        if ($('[id$=GrdParametros] TD').length > 1) {
            $('[id$=GrdParametros]').dataTable({
                "bJQueryUI": true,
                "bStateSave": true,
                "aLengthMenu": [[10, 25, 50, -1], [10, 25, 50, "Todos"]],
                "iDisplayLength": 10,
                "aoColumns": [
                            { "bSortable": true },
                            { "bSortable": true },
                            { "bSortable": true },
                            { "bSortable": false }
                        ],
                "sPaginationType": "full_numbers"
            });
        }
    },
    ValidarCadastro: function () {
        var msg = "";
        if ($('[id$=TxtNomeCargo]').val().length <= 0) {
            msg += "- Informe o nome do cargo.<br/>";
        }
        if ($('[id$=TxtDescricaoCargo]').val().length <= 0) {
            msg += "- Informe a descrição do cargo.<br/>";
        }
        if (msg.length > 0) {
            _MsgSistema.Alerta('<strong>Por favor, corrija o(s) erro(s) abaixo:</strong></p><p style="font-size: 11px; ">' + msg);
            return false;
        }
        return true;
    }
};

var _GerenciarTiposAtividades = {
    IniciarJquery: function () {
        if ($('[id$=GrdTipoAtividade] TD').length > 1) {
            $('[id$=GrdTipoAtividade]').dataTable({
                "bJQueryUI": true,
                "bStateSave": true,
                "aLengthMenu": [[10, 25, 50, -1], [10, 25, 50, "Todos"]],
                "iDisplayLength": 10,
                "aoColumns": [
                            { "bSortable": true },
                            { "bSortable": true },
                            { "bSortable": true },
                            { "bSortable": false }
                        ],
                "sPaginationType": "full_numbers"
            });
        }
    },
    ValidarCadastro: function () {
        var msg = "";
        if ($('[id$=TxtTipoAtividadeNome]').val().length <= 0) {
            msg += "- Informe o tipo de atividade.<br/>";
        }
        if (msg.length > 0) {
            _MsgSistema.Alerta('<strong>Por favor, corrija o(s) erro(s) abaixo:</strong></p><p style="font-size: 11px; ">' + msg);
            return false;
        }
        return true;
    }
};

var _GerenciarAreas = {
    IniciarJquery: function () {
        $('[id$=RblRoles]').buttonset();
        if ($('[id$=GrdHelpdesk] TD').length > 1) {
            $('[id$=GrdHelpdesk]').dataTable({
                "bJQueryUI": true,
                "bStateSave": true,
                "aLengthMenu": [[10, 25, 50, -1], [10, 25, 50, "Todos"]],
                "iDisplayLength": 10,
                "aoColumns": [
                        { "bSortable": true },
                        { "bSortable": true },
                        { "bSortable": true },
                        { "bSortable": true },
                        { "bSortable": false },
                        { "bSortable": false },
                        { "bSortable": false },
                        { "bSortable": false }
                    ],
                "sPaginationType": "full_numbers"
            });
        }
        $('[id$=TxtHelpdeskDescricao]').keyup(function () {
            _Comum.TextCounter($(this), $('[id$=TxtQtdHelpdeskDescricao]'), 5000);
        }).keydown(function () {
            _Comum.TextCounter($(this), $('[id$=TxtQtdHelpdeskDescricao]'), 5000);
        });


        $('[id*=TxtHelpdeskDescricaoGrd]').keyup(function () {
            _Comum.TextCounter($(this), $(this).nextAll('[id*=TxtQtdHelpdeskDescricaoGrd]'), 5000);
        }).keydown(function () {
            _Comum.TextCounter($(this), $(this).nextAll('[id*=TxtQtdHelpdeskDescricaoGrd]'), 5000);
        });
    },
    ValidarCadastro: function () {
        var msg = "";
        if ($('[id$=TxtHelpdeskNome]').val().length <= 0) {
            msg += "- Informe o nome do helpdesk.<br/>";
        }
        if ($('[id$=TxtHelpdeskDescricao]').val().length <= 0) {
            msg += "- Informe a descrição do helpdesk.<br/>";
        }
        if (msg.length > 0) {
            _MsgSistema.Alerta('<strong>Por favor, corrija o(s) erro(s) abaixo:</strong></p><p style="font-size: 11px; ">' + msg);
            return false;
        }
        return true;
    }
};

var _GerenciarRelatorios = {
    IniciarJquery: function () {

        if ($('[id$=GrdRelatorios] TD').length > 1) {
            $('[id$=GrdRelatorios]').dataTable({
                "bJQueryUI": true,
                "bStateSave": true,
                "aLengthMenu": [[10, 25, 50, -1], [10, 25, 50, "Todos"]],
                "iDisplayLength": 10,
                "aoColumns": [
                        { "bSortable": true },
                        { "bSortable": true },
                        { "bSortable": true },
                        { "bSortable": false },
                        { "bSortable": false }
                    ],
                "sPaginationType": "full_numbers"
            });
        }

        $('#TbCondicoes TBODY TR INPUT[id*=TxtCondicao]').focusout(function () {
            var condicao = '';

            $('#TbCondicoes TBODY TR').each(function (index) {

                if ($('[id$=TxtCondicao_' + index + ']').val().length > 0) {
                    if (condicao.length <= 0) {
                        condicao += $('[id$=TxtCondicao_' + index + ']').val();
                    } else {
                        condicao += ' AND ' + $('[id$=TxtCondicao_' + index + ']').val();
                    }
                }
            });

            var query = $('[id$=TxtRelatorioQuery]').val();
            $('[id$=TxtQueryExemplo]').val(query.replace('{F:FILTROS}', condicao));

        });
    },
    ValidaDadosRelatorio: function () {
        var msg = "";
        /*if ($('[id$=DrpHelpDesk]').val() == 'null') {
            msg += "- Informe qual o helpdesk do relatório.<br/>";
        }*/
        if ($('[id$=TxtRelatorioTitulo]').val().length <= 0) {
            msg += "- Informe o título do relatório.<br/>";
        }
        if ($('[id$=TxtRelatorioQuery]').val().length <= 25) {
            msg += "- A query deve conter ao menos 25 caracteres.<br/>";
        } else {
            var str = $('[id$=TxtRelatorioQuery]').val();
            if (str.indexOf('{F:FILTROS}') == -1) {
                msg += '- Especifique a condição HelpdeskId. <br> <em style="margin-left:10px; color:#C00;">Ex: campo = {C:HELPDESKID}</em><br/>';
            }
            /*
            if (str.indexOf('{C:STATUSID}') == -1) {
            msg += '- Especifique a condição HelpdeskId. <br> <em style="margin-left:10px; color:#C00;">Ex: campo IN ({C:STATUSID})</em><br/>';
            }
            if (str.indexOf('{C:TIPOATIVIDADEID}') == -1) {
            msg += '- Especifique a condição HelpdeskId. <br> <em style="margin-left:10px; color:#C00;">Ex: campo IN ({C:TIPOATIVIDADEID})</em><br/>';
            }
            if (str.indexOf('{C:RESPONSAVELMATRICULA}') == -1) {
            msg += '- Especifique a condição HelpdeskId. <br> <em style="margin-left:10px; color:#C00;">Ex: campo IN ({C:RESPONSAVELMATRICULA})</em><br/>';
            }
            if (str.indexOf('{C:PERIODO}') == -1) {
            msg += '- Especifique a condição HelpdeskId. <br> <em style="margin-left:10px; color:#C00;">Ex: campo BETWEEN {C:PERIODODE} AND {C:PERIODOATE}</em><br/>';
            }
            */
        }
        if (msg.length > 0) {
            _MsgSistema.Alerta('<strong>Por favor, corrija o(s) erro(s) abaixo:</strong></p><p style="font-size: 11px; ">' + msg);
            return false;
        }
        return true;
    },

    //BETWEEN '{F:PERIODODE}' AND '{F:PERIODOATE}'

    ValidaCamposQuery: function () {

        if (this.ValidaDadosRelatorio()) {
            var retorno = true;
            $('#TbCampos TBODY TR TD').each(function () {
                $(this).css({ borderBottom: '' });
            });
            $('#TbCampos TBODY TR').each(function (index) {
                var msg = '';
                if ($('[id$=TxtCampoTitulo_' + index + ']').val().length <= 0) {
                    msg += "- Informe qual o título do campo.<br/>";
                }
                if ($('[id$=TxtCampoQuery_' + index + ']').val().length <= 0) {
                    msg += "- Informe qual o nome do campo.<br/>";
                }
                if ($('[id$=TxtCampoStyleLargura_' + index + ']').val().length <= 0) {
                    msg += "- Informe a largura da coluna no relatório.<br/>";
                }
                if (msg.length > 0) {
                    _MsgSistema.Alerta('<strong>Por favor, corrija o(s) erro(s) na linha ' + (index + 1) + ':</strong></p><p style="font-size: 11px; ">' + msg);
                    $(this).children('TD').css({ borderBottom: '#00B11B solid 1px' });
                    retorno = false;
                    return false;
                }
            });
            return retorno;
        } else {
            return false;
        }
    },
    ValidaCamposCondicoes: function () {
        var retorno = true;
        $('#TbCondicoes TBODY TR TD').each(function () {
            $(this).css({ borderBottom: '' });
        });
        $('#TbCondicoes TBODY TR').each(function (index) {
            var msg = '';
            if ($('[id$=TxtTipo_' + index + ']').val().length <= 0) {
                msg += "- Informe qual o tipo da condição.<br/>";
            }
            if ($('[id$=TxtCondicao_' + index + ']').val().length <= 0) {
                msg += "- Informe qual a condição.<br/>";
            } else {

                var valor = '{F:VALOR}';
                var str = $('[id$=TxtCondicao_' + index + ']').val();
                if (str.indexOf(valor) != -1) {
                    msg += '- A condição deve conter a expressão "' + valor + '".<br/>';
                }
            }

            if (msg.length > 0) {
                _MsgSistema.Alerta('<strong>Por favor, corrija o(s) erro(s) na linha ' + (index + 1) + ':</strong></p><p style="font-size: 11px; ">' + msg);
                $(this).children('TD').css({ borderBottom: '#00B11B solid 1px' });
                retorno = false;
                return false;
            }
        });
        return retorno;

    }

};



var _Dashboard = {

    IniciaJquery: function (cookieName) {
        iNettuts.settings.saveToCookie = cookieName;
        iNettuts.init();
        this.CriaGraficoPizzaSolicitacoesPorMes();
        this.CriaGraficoColunasSolicitacoesPorStatus();
    },
    CriaGraficoPizzaSolicitacoesPorMes: function () {
        $.ajax({
            type: 'POST',
            url: "Ajax/Ajax.ashx?method=GraficoPizzaSolicitacoesPorMes",
            data: '',
            dataType: 'json',
            success: function (data) {

                chart = new Highcharts.Chart({
                    chart: {
                        renderTo: 'grd02',
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false
                    },
                    title: { text: '' },
                    tooltip: { style: { fontSize: '10px' },
                        formatter: function () {
                            var str = (this.y > 1) ? 'ções' : 'ção';
                            //alert(str);

                            return '<b>' + this.point.name + '</b>: ' + this.y + ' solicita' + str;
                        }
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: { enabled: false },
                            showInLegend: false
                        }
                    },
                    exporting: { enabled: false },
                    series: [{
                        type: 'pie',
                        name: '',
                        data: data.ResponseData

                    }]
                });

            },
            error: function () { alert("Error"); }
        });
    },
    CriaGraficoColunasSolicitacoesPorStatus: function () {
        $.ajax({
            type: 'POST',
            url: "Ajax/Ajax.ashx?method=GraficoColunasSolicitacoesPorStatus",
            data: '',
            dataType: 'json',
            success: function (data) {
                chart = new Highcharts.Chart({
                    chart: { renderTo: 'grd01', type: 'column', marginBottom: '60' },
                    title: { text: '' },
                    xAxis: { categories: data.ResponseData.Meses }, //['Mar', 'Abr', 'Mai', 'Jun'] },
                    yAxis: { min: 0, title: { text: ''} },
                    legend: {
                        layout: 'horizontal',
                        backgroundColor: '#FFFFFF',
                        align: 'left',
                        verticalAlign: 'bottom',
                        x: 35,
                        y: 0,
                        floating: true,
                        shadow: true,
                        itemStyle: {
                            fontSize: '10px'
                        }
                    },
                    tooltip: {
                        formatter: function () {
                            return '' + this.x + ': ' + this.y + ' solicitações';
                        }
                    },
                    plotOptions: { column: { pointPadding: 0.2, borderWidth: 0} },
                    series: data.ResponseData.Dados,
                    exporting: { enabled: false }
                });
            },
            error: function () { alert("Error"); }
        });
    }
};

var _NovaSolicitacao = {

    IniciarJquery: function () {
        $('[id$=TxtSolicitanteTelefone]').setMask('(99) 9999-9999');
        $(".inputFile INPUT[type=file]").MyMultiFile();
    },
    ValidarCadastro: function () {
        var msg = "";
        if ($('[id$=TxtSolicitanteMatricula]').val().length <= 0) {
            msg += "- Informe a matrícula do solicitante.<br/>";
        }
        if ($('[id$=TxtSolicitanteNome]').val().length <= 0) {
            msg += "- Informe o nome do solicitante.<br/>";
        }
        if ($('[id$=TxtSolicitanteEmail]').val().length <= 0) {
            msg += "- Informe o email do solicitante.<br/>";
        }
        //if ($('[id$=DrpPrioridade]').val() == 'null') {
        //    msg += "- Informe a prioridade da solicitação.<br/>";
        //}
        if ($('[id$=TxtAssunto]').val().length <= 0) {
            msg += "- Informe o assunto da solicitação.<br/>";
        }
        if ($('[id$=TxtDescricao]').val().length < 20) {
            msg += "- Informe a descrição da solicitação. <em style=\"color:#C00; font-size:10px;\">(Mínimo 20 caracteres)</em><br/>";
        }
        if (msg.length > 0) {
            _MsgSistema.Alerta('<strong>Por favor, corrija o(s) erro(s) abaixo:</strong></p><p style="font-size: 11px; ">' + msg);
            return false;
        }
        return true;
    }
};