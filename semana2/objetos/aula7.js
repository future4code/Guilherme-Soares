//      EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO       //

//1)
//a) Será impresso: "Matheus Nachtergaele", "Matheus Nachtergaele" e {canal: "Globo", horario: "14h"}

//2)
//a) Será impresso: nome: "Juca", idade: 3, raca: "SRD"
//  nome: "Juba", idade: 3, raca: "SRD"
//  nome: "Jubo", idade: 3, raca: "SRD"

//b) Os 3 pontinhos indicam que você adicionar ou alterar alguma propriedade, o famoso Spread.

//3)
//a) false, undefined
//b) False porque ele não é o valor da chave e undefined porque a altura não foi definida/não existe.


//      EXERCÍCIOS DE ESCRITA DE CÓDIGO       //
//1)
//a)

const euzin = {
    nome: "Guilherme",
    apelidos: ["Gui", "Guizão", "Guiga"]
}
console.log(`Eu sou ${euzin.nome}, mas pode me chamar de: ${euzin.apelidos[0]},
 ${euzin.apelidos[1]} ou ${euzin.apelidos[2]}!`)

 //b)

 const novoEuzin = {
    ...euzin,
    nome: "Guilherme",
    apelidos: ["Guizada", "Guizord", "Guirila"]
 }
 console.log(`Eu sou ${novoEuzin.nome}, mas pode me chamar de: ${novoEuzin.apelidos[0]},
 ${novoEuzin.apelidos[1]} ou ${novoEuzin.apelidos[2]}!`)

//2)
// const pessoa1 = {
//     nome: "Guilherme",
//     idade: 24,
//     profissao: "Estudante"

// }

// const pessoa2 = {
//     nome: "Mirtes",
//     idade: 56,
//     profissao: "Autônoma"

// }

//   minhaFuncao(pessoa1) {
//    nomePessoa1 = pessoa1.nome,
//    numCaracteres1 = pessoa1.nome.length(),
//    idade1 = pessoa1.idade,
//    profissao1 = pessoa1.profissao,
//    profissao1Length = pessoa1.profissao.length(),

//    nomePessoa2 = pessoa2.nome,
//    numCaracteres2 = pessoa2.nome.length(),
//    idade2 = pessoa2.idade,
//    profissao2 = pessoa2.profissao,
//    profissao2Length = pessoa2.profissao.length()

//    return (nomePessoa1, numCaracteres1, idade1, profissao1, profissao1Length)

// }
// console.log(pessoa1)

//3)

const carrinho = []

const frutasSacolao = {
    fruta1: "Morango",
    disponibilidadeMorango: true ,
    fruta2: "Abacaxi", 
    disponibilidadeAbacaxi: true ,
    fruta3: "Maracujá",
    disponibilidadeMaracuja: true
}

// function funcaoFruta (frutasSacolao){
//     return carrinho.push(frutasSacolao)
// }

console.log(frutasSacolao)