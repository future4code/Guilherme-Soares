// Exercícios de interpretação de código
//1
let n1 = 10
let n2 = 10

console.log(n2)

n2 = 5
console.log(n1, n2) // Exercício 1: Será impresso 10 5.

//2

let n3 = 10
let n4 = 20
n5 = n3
n4 = n5
n3 = n4

console.log(n3, n4, n5) // Exercício 2: Será impresso 10 20.

//3

let recebePorDia = prompt("Quanto você recebe por dia?")
let horasPorDia = prompt("Quantas horas você trabalha por dia?")
alert(`Voce recebe ${recebePorDia/horasPorDia} por hora`) // Exercício 3: melhor nome para as variáveis seriam: let horasPorDia e let recebePorDia.

//---------------------------------------------------------------------------------------------------------------------------------

// Exercícios de escrita de código:

//1

const nome = prompt("Qual o seu nome?")
let idade = prompt("Qual a sua idade?")

console.log(typeof nome, idade) 
console.log("Olá,",nome,"."," Você tem", idade,"anos.")
//Foi dado uma string e um número.
//Unexpected Identifier. Ocorreu esse erro pois eu não digitei absolutamente nada no valor das variáveis.

//2 

const corDaRoupa = "Não"
const felicidade = "Sim"	
const atividadeFisica = "Sim"

console.log("Você está usando uma roupa azul hoje?", corDaRoupa)
console.log("Você está feliz ultimamente?", felicidade)
console.log("Você tem costume de se exercitar diariamente?",atividadeFisica)

//3

let n6 = 10
let n7 = 25

aux = n6
n6 = n7
n7 = aux

console.log("O novo valor de a é", n6) 
console.log("O novo valor de b é", n7) 

let n8 = Number(prompt("Digite um número"))
let n9 = Number(prompt("Digite outro número"))

soma = n8 + n9
multi = n8 * n9

console.log("O primeiro número somado com o segundo número resulta em:", soma)
console.log("O primeiro número multiplicado com o segundo número resulta em:", multi)
