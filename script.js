// Métodos DOM
const form = document.querySelector("#form-tarefa");
const inputTarefa = document.querySelector("#tarefa");
const listaTarefas = document.querySelector("#contador");
const contador = document.querySelector("#lista-tarefas");

// Resgate de tarefas do localStorage

const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

//Ouvir e agir sobre o clique
form.addEventListener("submit", adicionarTarefa);

// Funções
function adicionarTarefa(event) {
    event.preventDefault();
    const texto = inputTarefa.value.trim();
    if (texto === "") {
        alert("Digite uma tarefa");
        return;
    }
    const novaTarefa = {
        id: Date.now(),
        texto: texto,
        concluida: false
    };
    tarefas.push(novaTarefa);
    salvarTarefa();    
    inputTarefa.value = "";
    inputTarefa.focus();
    
}

function salvarTarefa () {
    localStorage.setItem(
        "tarefas",
    JSON.stringify(tarefas) 
);
}