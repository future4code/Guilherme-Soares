// Exercícios de interpretação de código //

//1)Ele está fazendo um loop, acrescentando +1 ao valor enquanto i for <0. Será impresso 10.

//2)
//a)Será impresso 19,21,23,25,27,30
//b)Sim, o for of serve.
// let indice = 0 
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero, "indice ->", indice)
// 	}
//  indice++
// }

//3)*, **, ***, ****

// Exercícios de escrita de código //

//1)

 const bichinhos = Number(prompt("Quantos bichinhos você tem?!"))
 console.log(`Legal! Você tem ${bichinhos} pets!`)
if(bichinhos === 0) {console.log("Que pena!Você pode adotar um pet!")}
    if(bichinhos > 0) {
        let arrayBichinhos = []
        for(let i = 0; i < bichinhos; i++){
            const nomeDosBichinhos = prompt("Qual o nome do(s) pet(s)?")
            arrayBichinhos.push(nomeDosBichinhos)
        }
        console.log("O os nomes deles são:", arrayBichinhos)
    }
    

//2)
//a) 
const arrayOriginal = [10, 25, 36, 41, 180, 213]
function imprimeArrayOriginal (arrayOriginal) {
    for(let valor of arrayOriginal){
        console.log(valor)
    }
}
imprimeArrayOriginal(arrayOriginal)

//b)
function imprimeArrayOriginal (arrayOriginal) {
    for(let valor of arrayOriginal){
        console.log(valor / 10)
    }
}
imprimeArrayOriginal(arrayOriginal)

//c)
function imprimeArrayDeNumeroPar (arrayOriginal) {
    let arrayDeNumeroPar = []
    for(let valor of arrayOriginal){
        if(valor % 2 === 0){
            arrayDeNumeroPar.push(valor)
        }
        
    }
    console.log(arrayDeNumeroPar)
}
imprimeArrayDeNumeroPar (arrayOriginal)

//d)
function imprimirArrayDeStrings (arrayOriginal){
   let arrayDeStrings = []
   let index = 0 
    for(let valor of arrayOriginal){
        arrayDeStrings.push(`O elemento do índex ${index} é o número ${valor}.`)
        index++
    }
    console.log(arrayDeStrings)
}
imprimirArrayDeStrings(arrayOriginal)

//e)
function pegarMaiorOuMenorNumero (arrayOriginal){
    let maiorNum = 0
    let menorNum = Infinity
    for(let i = 0; i < arrayOriginal.length; i++){

        if(arrayOriginal[i] < menorNum){
            menorNum = arrayOriginal[i]
        }else if(arrayOriginal[i] > maiorNum){
            maiorNum = arrayOriginal[i]
        }
    }
    console.log(`O maior número é: ${maiorNum}.`)
    console.log(`O menor número é: ${menorNum}.`)
}
pegarMaiorOuMenorNumero(arrayOriginal)