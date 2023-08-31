const verify = document.getElementById("botaoCadastrar");

botaoCadastrar.addEventListenner("click")

function verification() {
    if (document.getElementById('nome').value == "") {
        alert("O campo 'Nome' precisa ser preenchido!")
        document.getElementById('nome').focus();
    }

    if (document.getElementById('cep').value == "") {
        alert("O campo 'CEP' precisa ser preenchido!")
        document.getElementById('cep').focus();
    }

    if (document.getElementById('rua').value == "") {
        alert("O campo 'Rua' precisa ser preenchido!")
        document.getElementById('rua').focus();
    }

    if (document.getElementById('bairro').value == "") {
        alert("O campo 'Bairro' precisa ser preenchido!")
        document.getElementById('bairro').focus();
    }

    if (document.getElementById('cidade').value == "") {
        alert("O campo 'Cidade' precisa ser preenchido!")
        document.getElementById('cidade').focus();
    }

    if (document.getElementById('uf').value == "") {
        alert("O campo 'UF' precisa ser preenchido!")
        document.getElementById('uf').focus();
    }

    if (document.getElementById('email').value == "") {
        alert("O campo 'E-mail' precisa ser preenchido!")
        document.getElementById('email').focus();
    }
}

