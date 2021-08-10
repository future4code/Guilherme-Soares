// EXERCÍCIOS INTER PRETAÇÃO AULA-4

//1)

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 
console.log("a. ", resultado) // false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // verdadeiro

console.log("d. ", typeof resultado) // Booleano

//------------------------------------------------------------------------------------

//2)

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) 
// O código dele não funciona porque ele não determinou que o tipo das variáveis seriam números. 


//------------------------------------------------------------------------------------

//3) 

// A solução seria a seguinte:
//let primeiroNumero = Number(prompt("Digite um numero!"))
//let segundoNumero = Number(prompt("Digite outro numero!"))
//
//const soma = primeiroNumero + segundoNumero

//console.log(soma) 


//------------------------------------------------------------------------------------


// EXERCÍCIOS DE ESCRITA DE CÓDIGO
//1)
let idade = Number(prompt("Qual a sua idade?"))
let idadeMelhorAmigo = Number(prompt("Qual a idade do seu melhor amigo(a)?"))

resultado = idade > idadeMelhorAmigo
diferençaIdade = idade - idadeMelhorAmigo

console.log("Sua idade é maior do que a do seu amigo?", resultado)
console.log("A diferença de idade de vocês é:", diferençaIdade,"anos.")


//------------------------------------------------------------------------------------
//2)

let num = Number(prompt("Digite um número par:"))

restoDivisao = num % 2

console.log(restoDivisao)
//Notei que o resultado é sempre 0 com números pares. Quando o usuário utiliza um número ímpar, o resto da divisão é sempre 1!


//------------------------------------------------------------------------------------
//3)

let idadeUsuario = Number(prompt("Qual a sua idade?"))

idadeEmMeses = idadeUsuario * 12
idadeEmDias = 365 * idadeUsuario
idadeEmHoras = (365 * 24) * idadeUsuario

console.log("Sua idade em meses",idadeEmMeses,",dias",idadeEmDias,"e em horas", idadeEmHoras,".")

//4)

let num1 = Number(prompt("Digite um número:"))
let num2 = Number(prompt("Digite outro número:"))

resultado1 = num1 > num2
resultado2 = num1 === num2
resultado3 = num1 % num2 === 0 
resultado4 = num2 % num1 === 0

console.log("O primeiro número é maior que o segundo?", resultado1)
console.log("O primeiro número é igual ao segundo?", resultado2)
console.log("O primeiro número é divisível pelo segundo?", resultado3)
console.log("O segundo número é divisível pelo primeiro?", resultado4)
