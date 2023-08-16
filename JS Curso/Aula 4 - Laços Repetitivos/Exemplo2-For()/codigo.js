let valor = ''

for (let i = 1; i <= 20; i++) {
    valor += "Valor de i = " + i + "<br>"
    if (i == 11) {
        resposta.innerHTML = valor + "O valor é igual a 11";
        /* O break sai fora do laço */
        break;
    }
    resposta.innerHTML = valor
}
