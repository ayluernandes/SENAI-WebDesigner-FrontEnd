function verification() {
    let email = document.querySelector("#username").value;
    let senha = document.getElementById('password').value;

    if (email == "" || senha == "") {
        alert("Obrigatório o preenchimento do email e senha!");
        document.querySelector("#username").focus();
    } else {
        pesquisa(email, senha);
    }
};

function pesquisa(email,senha) {
    if (email == "ayluernandes@gmail.com" && senha == "24585") {

        window.open("../assets/form.html");
        window.close();
    } 
}