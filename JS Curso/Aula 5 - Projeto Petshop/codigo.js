
function menu() {

    opcao = parseInt(prompt(
        "Menu Principal\n\n" +
        "1 - Cadastro de Pet \n" +
        "2 - Cadastro de Funcionário \n" +
        "3 - Cadastro de Produto \n" +
        "4 - Sair do Sistema"
    ));

    switch (opcao) {
        case 1:
            cadastrar_pet();
            break;
        case 2:
            cadastrar_funcionario();
            break;
        case 3:
            cadastrar_produto();
            break;
        default:
            alert("Finalizando o Sistema de Cadastro")
            document.getElementById("relatorio").innerHTML = "<p>Obrigado!</p>"
    }
};

function cadastrar_pet() {
    let x = "n";
    relatorio = " Relatório de Pets <br>"

    while (x.toUpperCase() != "S") {
        raca = prompt("Digite qual a raça do pet");
        peso = parseInt(prompt("Digite o peso do pet em Kg's"));
        cor = prompt("Digite qual a cor do pet");
        idade = parseInt(prompt("Digite a idade do pet"));
        porte = prompt("Digite o porte físico do pet");

        relatorio = relatorio + "<br>" +
            "Raça: " + raca + "<br>" +
            "Peso: " + peso + "<br>" +
            "Cor: " + cor + "<br>" +
            "Idade: " + idade + "<br>" +
            "Porte: " + porte

        let confirme = prompt("Finalizar Cadastro? - S para Sim - N para Não");

        if (confirme.toUpperCase() == "S") {
            x = "S";
        };
        document.getElementById("relatorio").innerHTML = "<p>" + relatorio + "</p>"
    }
}

function cadastrar_funcionario() {
    let x = "n";
    relatorio = " Relatório de Funcionários <br>"

    while (x.toUpperCase() != "S") {
        nome = prompt("Digite o nome do funcionário");
        funcao = prompt("Digite qual a função exercida");

        relatorio = relatorio + "<br>" +
            "Nome: " + nome + "<br>" +
            "Função: " + funcao

        let confirme = prompt("Finalizar Cadastro? - S para Sim - N para Não");

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