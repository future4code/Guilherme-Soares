const listaDeTarefas = []

const tarefa1 = prompt("Digite a tarefa um:")
const tarefa3 = prompt("Digite a tarefa dois:")
const tarefa2 = prompt("Digite a tarefa três:")

listaDeTarefas[0] = tarefa1
listaDeTarefas[1] = tarefa2
listaDeTarefas[2] = tarefa3

console.log("c .", listaDeTarefas)

const usuarioEscolhe = prompt(`Escolha uma tarefa que você realizou hoje sendo:
    0 - a
    1 - b
    2 - c
    `)
listaDeTarefas.splice(usuarioEscolhe, 1)

console.log("c .", listaDeTarefas)