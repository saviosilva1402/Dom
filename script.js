// Métodos DOM
const form = document.querySelector("#form-tarefa");
const inputTarefa = document.querySelector("#tarefa");
const listaTarefas = document.querySelector("#contador");
const contador = document.querySelector("#lista-tarefas");

// Resgate de tarefas do localStorage

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

