//   EXERCÍCIOS DE INTERPRETAÇÃO DE TEXTO

//1)

let array
console.log('a. ', array) // Vai imprimir "undefined".

array = null
console.log('b. ', array) // Vai imprimir "nul".

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // Vai dizer o tamanho do array, que é 11.

let i = 0
console.log('d. ', array[i]) // 3 é o primeiro item do array.

array[i+1] = 19
console.log('e. ', array) //  Não existe o 19.

const valor = array[i+6]
console.log('f. ', valor) // 9 é o item seis do array.

//2)

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // A frase "Subi num ônibus em Marrocos" vai ficar assim "SUBI NUM ÔNIBUS EM MIRROCOS"

//   EXERCÍCIOS DE ESCRITA DE CÓDIGO

//1)

let nomeUsuario = prompt("Qual o seu nome e sobrenome?")
let emailUsuario = prompt("Qual o seu e-mail principal?")

console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem vindo(a), ${nomeUsuario}.`)

//2)

const comidasFavoritas =["Churrasco","Pizza","Hambúrguer","Strogonoff","Macarrão"]
const comidaUsuario = prompt("Qual sua comida favorita?")
comidasFavoritas[1] = comidaUsuario

console.log("a .", comidasFavoritas)
console.log(`b .Minhas comidas favoritas: 
${comidasFavoritas[0]}
${comidasFavoritas[1]}
${comidasFavoritas[2]}
${comidasFavoritas[3]}
${comidasFavoritas[4]}`)
console.log(comidasFavoritas)

//3)

const listaDeTarefas = []

const tarefa1 = prompt("Digite a tarefa um:")
const tarefa3 = prompt("Digite a tarefa dois:")
const tarefa2 = prompt("Digite a tarefa três:")

const usuarioEscolhe = prompt("Escolha um número de 0 a 2:")

listaDeTarefas[0] = tarefa1
listaDeTarefas[1] = tarefa2
listaDeTarefas[2] = tarefa3

listaDeTarefas.splice(usuarioEscolhe, 1)

console.log("c .", listaDeTarefas)
