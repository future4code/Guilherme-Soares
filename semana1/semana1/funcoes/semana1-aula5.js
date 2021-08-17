//	Exercícios de interpretação

//1)

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
//a. Vai ser impresso 10 50.
//b. Não vai aparecer nada porque não foi usado o comando console.log .

//2)

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)


// a. Explique o que essa função faz e qual é sua utilidade
// R: Essa função retorna se o texto digitado pelo usuário equivale(true or false) ao valor inserido no protótipo de array.

// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   `Eu gosto de cenoura`/True
//      ii.  `CENOURA é bom pra vista`/True
//      iii. `Cenouras crescem na terra`/True



//	Exercícios de escrita de código

//1)
function sobreMim(sobre) {
    return sobre ("Me chamo Guilherme, tenho 24 anos, moro no Rio de Janeiro e sou estudante da Labenu.")
}

function meusDados(nome, idade, cidade, profissao){
    return `Eu sou ${nome}, tenho ${idade} anos, moro no ${cidade} e sou ${profissao}.`

}

console.log(sobreMim)
console.log(meusDados("Guilherme", 24 , "Rio de Janeiro", "aluno Labenu"))

//2)

function numeros(num1, num2){
const soma = (num1 + num2)
return soma
}
console.log(numeros(1 + 1))
