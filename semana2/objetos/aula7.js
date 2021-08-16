//      EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO       //

//1)
//a) Será impresso: 
//"Matheus Nachtergaele"
//"Virginia Cavendish"
//{canal: "Globo", horario: "14h"}
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

function imprimeEuzin (objeto) {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]},
    ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}!`)
}
imprimeEuzin(euzin)
 //b)

 const novoEuzin = {
    ...euzin,
    apelidos: ["Guizada", "Guizord", "Guirila"]
 }

 imprimeEuzin(novoEuzin)

//2)
const pessoa1 = {
    nome: "Guilherme",
    idade: 24,
    profissao: "Estudante"
}

  function imprimeInformacoes(usuario) {
   return [usuario.nome, usuario.nome.length, usuario.idade, usuario.profissao, usuario.profissao.length ]
}
console.log(imprimeInformacoes(pessoa1))

// //3)

let carrinho = []

const morango = {
    fruta: "Morango",
    disponibilidadeMorango: true ,
}

const abacaxi = {
    fruta: "Abacaxi", 
    disponibilidadeAbacaxi: true ,
}

const maracuja = {
    fruta: "Maracujá", 
    disponibilidadeMaracujá: true ,
}

function frutaNoCarrinho (fruta) {
    carrinho.push(fruta)
}
frutaNoCarrinho(morango)
frutaNoCarrinho(abacaxi)
frutaNoCarrinho(maracuja)

console.log(carrinho)