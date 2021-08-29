// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   return array.reverse() 
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   array.sort((a, b) => {
       return a - b
   })
 return array  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let numPar = []

    for(let num of array) {
        if(num % 2 === 0){
           numPar.push(num)
        }
    }

     return numPar

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numPar = []
    for(let num of array) {
        if(num % 2 === 0){
           numPar.push(num ** 2)
        }
    }
    return numPar
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
   let maior = 0
   for(let numArray of array) {
       if(numArray > maior) {
           maior = numArray
       }
   }
   return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {   
    let maiorNumero
    let menorNumero

    let objeto = {}

    if(num1 > num2) {
       maiorNumero = num1 
       menorNumero = num2
    }else if(num2 > num1){
       maiorNumero = num2
       menorNumero = num1
    }else{
        maiorNumero = num1 
        menorNumero = num1
    }

    let maiorDivisivelPorMenor
    if(maiorNumero % menorNumero === 0){
        maiorDivisivelPorMenor = true
    }else{
        maiorDivisivelPorMenor = false
    }

    let diferenca = (maiorNumero - menorNumero)

    objeto= {
        "maiorNumero": maiorNumero , 
        "maiorDivisivelPorMenor": maiorDivisivelPorMenor, 
        "diferenca": diferenca 
        }

    return objeto 
}

// EXERCÍCIO 08

function retornaNPrimeirosPares(n) {
    const resultado = []

    for (let i = 0; i < n; i++) {
       resultado[i] = 2 * i
    }
 
    return resultado
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
   if (ladoA === ladoB && ladoB === ladoC) {
       return "Equilátero"
   }else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
       return "Isósceles"
   }else{
       return "Escaleno"
   }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}