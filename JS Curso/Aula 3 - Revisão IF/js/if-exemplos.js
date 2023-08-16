/* Funções lógicas


/*  WHILE() - 

DO WHILE () - 

SWITCH() - CASE 

FOR()  */

/* if (comparação){
            parametro
        } */

exemplo:
if ("12" == 12) {
    alert("O valor é diferente")
} else {
    alert("O valor é igual")
};

/* --> --- */

if (semaforo == "verde") {
    alert("Atravesse!");
} else {
    alert("Pare!");
};

/* --> --- */

user = prompt("Digite seu nome");
password = prompt("Digite sua senha");

if (user == "aylu" && password == "24585") {
    alert("Olá, seja bem-vindo!\n"
        + "User: " + user
        + "\nPassword: " + password);
} else {
    alert("Acesso negado!");
};

/* --> --- */

/*     Em um baile com 3 ambientes diferentes, temos que separar os convidados por idade:
    Ambiente 1 - Somente com idade entre >=18
    Ambiente 2 - Somente com idade entre >=15 <18
    Ambiente 3 - Somente com idade menor <15 */

nome = prompt("Digite seu nome")
idade = parseInt(prompt("Digite sua idade"))

if (idade >= 18) {
    alert("Olá, " + nome + "\nEntrada liberada para a boate!")
} else if (idade >= 15 && idade < 18) {
    alert("Olá, " + nome + "\nEntrada liberada para a matinê!")
} else if (idade < 15) {
    alert("Olá, " + nome + "\nEntrada liberada para a área recreativa!")
}

/* --> --- */

media = (5.25, 6.5, 7.8, 9.5, 8.7) / 5;
/* toFixed - Determina o número de casas decimais na variavel */
alert("Sua média:" + media.toFixed(3))





