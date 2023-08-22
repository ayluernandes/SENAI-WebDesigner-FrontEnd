var pacientes = [];

function addPacientes() {
    var paciente = document.getElementById("paciente");
    var outLista = document.getElementById("outLista");

    var nome = paciente.value;

    if (nome == "") {
        alert("Informe o nome do paciente");
        paciente.focus();
        return;
    }

    pacientes.push(nome);

    var lista = "";

    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }

    outLista.textContent = lista;

    paciente.value = "";
    paciente.focus();
}

var btAdd = document.getElementById("btAdd");
btAdd.addEventListener("click", addPacientes);



function AtenderUrgencia() {
    var paciente = document.getElementById("paciente");
    var outLista = document.getElementById("outLista");

    var nome = paciente.value;

    if (nome == "") {
        alert("Informe o nome do paciente");
        paciente.focus();
        return;
    }

    pacientes.unshift(nome);

    var lista = "";

    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }

    outLista.textContent = lista;

    paciente.value = "";
    paciente.focus();
}

var btUrgencia = document.getElementById("btUrgencia");
btUrgencia.addEventListener("click", AtenderUrgencia);



function atenderPaciente() {
    if (pacientes.length == 0) {
        alert("Não há pacientes na sala de espera!");
        paciente.focus();
        return;
    }

    var outAtendimento = document.getElementById("outAtendimento");
    var outLista = document.getElementById("outLista");

    var atender = pacientes.shift();
    outAtendimento.textContent = atender;

    var lista = "";

    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }

    outLista.textContent = lista;
}

var btAtender = document.getElementById("btAtender");
btAtender.addEventListener("click", atenderPaciente);