/*const, var, let*/



/* Criando função para limpar formulário */
///* Caixa alta pode existir se for no segundo nome / No inicio não pode haver número, caixa alta e nem caractere especial *///

const limparFormulario = (endereco) => {
    /* Usando funções do DOM (Document Object Model) */
    document.getElementById('endereco').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

/* Popular o formulário */
const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}


/* Validando o CEP - REGX*/
const eNumero = (numero) => /^[0-9]+$/;

/* Validando se o CEP tem 8 caracteres */
const validarCep = (cep) =>
    cep.length == 8 && eNumero(numero);

/* = - Atribui valor (X é igual a 12! / Y é igual a 8!)
== - Comparação (X é igual a Y?)*/


/* Fazendo uma requisição para API viaCEP */
const pesquisaCEP = async () => {
    limparFormulario();

    const cep = document.getElementById('cep').value.replace("-", "");
    const url = `https://viacep.com.br/ws/${cep}/json/`; /* ${cep} - incluir const no link */

    /* Verificando se o cep é valido */
    if (validarCep(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();

        if (endereco.hasOwnProperty('erro')) {
            document.getElementById('endereco').value = 'CEP não encontrado!';
        } else {
            preencherFormulario(endereco);
        }

    } else {
        document.getElementById('endereco').value = 'CEP Incorreto!';
    }
}

document.getElementById('endereco')
    .addEventListener('focusout',pesquisaCEP);