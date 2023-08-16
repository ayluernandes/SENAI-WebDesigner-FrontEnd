/* Criando a função menu */

function menu() {

    opcao = parseInt(prompt(
        "Menu Principal\n\n" +
        "1 - Cadastro de Cliente \n" +
        "2 - Cadastro de Colaborador \n" +
        "3 - Cadastro de Produto \n" +
        "4 - Sair do Sistema"
    ));

    switch (opcao) {
        case 1:
            cadastrar_cliente();
            break;
        case 2:
            cadastrar_colaborador();
            break;
        case 3:
            cadastrar_produto();
            break;
        default:
            alert("Finalizando o Sistema de Cadastro")
            document.getElementById("relatorio").innerHTML = "<p>Obrigado!</p>"
    }
};

/* Função cadastrar cliente */

function cadastrar_cliente() {
    let x = "n";
    relatorio = " Relatório de Clientes <br>"

    while (x.toUpperCase() != "S") {
        id = parseInt(prompt("Digite o ID do cliente"));
        nome = prompt("Digite o nome do cliente");
        endereco = prompt("Digite o endereço do cliente");

        relatorio = relatorio + "<br>" +
            "Nome: " + nome + "<br>" +
            "Endereço: " + endereco + "<br>" +
            "ID: " + id

        let confirme = prompt("Finalizar Cadastro? - S para Sim - N para Não");

        if (confirme.toUpperCase() == "S") {
            x = "S";
        };
        document.getElementById("relatorio").innerHTML = "<p>" + relatorio + "</p>"
    }
}

function cadastrar_colaborador() {
    let x = "n";
    relatorio = " Relatório de Colaboradores <br>"

    while (x.toUpperCase() != "S") {
        id = parseInt(prompt("Digite o ID do colaborador"));
        nome = prompt("Digite o nome do colaborador");
        funcao = prompt("Digite a função do colaborador");
        empresa = prompt("Em que empresa exerce suas funções?");

        relatorio = relatorio + "<br>" +
            "Nome: " + nome + "<br>" +
            "Função: " + funcao + "<br>" +
            "Empresa: " + empresa + "<br>" +
            "ID: " + id

        confirme = prompt("Finalizar Cadastro? - S para Sim - N para Não");

        if (confirme.toUpperCase() == "S") {
            x = "S";
        };
        document.getElementById("relatorio").innerHTML = "<p>" + relatorio + "</p>"
    }
}

function cadastrar_produto() {
    let x = "n";
    relatorio = " Relatório de Produto <br>"

    while (x.toUpperCase() != "S") {
        produto = prompt("Digite o nome do produto");
        codigo = parseInt(prompt("Digite o código do produto"));
        validade = prompt("Digite a data de validade do produto");
        marca = prompt("Digite a marca ou fabricante do produto");

        relatorio = relatorio + "<br>" +
            "Produto: " + produto + "<br>" +
            "Código do produto: " + codigo + "<br>" +
            "Validade: " + validade + "<br>" +
            "Marca/Fabricante: " + marca + "<br>"

        confirme = prompt("Finalizar cadastro? - S para Sim - N para Não");

        if (confirme.toUpperCase() == "S") {
            x = "S";
        };
        document.getElementById("relatorio").innerHTML = "<p>" + relatorio + "</p>"
    }
}