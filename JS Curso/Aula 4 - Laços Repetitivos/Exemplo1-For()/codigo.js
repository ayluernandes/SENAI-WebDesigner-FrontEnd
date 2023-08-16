/* FOR [inicialização];[condição1};[expressao final]{
    declaração
} 
*/

let valor = ''
let valor2 =parseInt(prompt("Digite o valor:"))

for (let i = 0; i <= 10; i++) {
    valor += i + "x" + valor2 + "=" + i * valor2 + "<br>"
    resposta.innerHTML = valor;
}

