/* Var = Cria uma variavel
Const - Cria uma constante
Let - Variável com escopo restrito */

if (x > 18) {
    console.log("Você é de maior!")
}
if (x = 18) {
    console.log("Você tem 18 anos!")
} else {
    console.log("Você é de menor!")
}

/*  */

if (9 * 9 == 81) {
    console.log("O valor corresponde à 81")
} else {
    console.log("O valor não corresponde à 81")
}

/*  */

if (x == "m" && y != "20") {
    console.log("Você é homem e não tem 20 anos")
} else {
    console.log("Você é mulher e não tem 20 anos")
}


if (x == "m" && y != "20") {
    console.log("sua idade é : " + y + " e seu sexo é " + x)
} else {
    console.log("sua idade é : " + y + " e seu sexo é feminino ")
}

/*  */

if ((n + o + t + a) / 4 >= 7) {
    console.log("Você foi aprovado e sua nota é : " + (n + o + t + a) / 4 + " !")
} else {
    console.log("Sua nota é : " + (n + o + t + a) / 4 + " ! e você foi reprovado!")
}

/*  */

n = parseFloat(prompt("Digite a nota do 1 bimestre"))
o = parseFloat(prompt("Digite a nota do 2 bimestre"))
t = parseFloat(prompt("Digite a nota do 3 bimestre"))
a = parseFloat(prompt("Digite a nota do 4 bimestre"))
media = (n + o + t + a) / 4
alert("A sua nota é:" + media)


    /*  */

    (4 > 5) ? console.log("sim 4>5") : console.log("não é maior que 5")

/*  */

alert(Math.round(25, 36655).toFixed(2))

/*  */