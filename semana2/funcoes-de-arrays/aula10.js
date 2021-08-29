// 1.  Leia o código abaixo
//     a) O que vai ser impresso no console?
// object , 0 , array 
// object , 1 , array
// object , 2 ,  array

// 2. Leia o código abaixo

//     a) O que vai ser impresso no console?
// "Amanda Rangel", "Laís Petra", "Letícia Chijo"

//3. Leia co código abaixo

// a) O que vai ser impresso no console?
// "Amanda Rangel", apelido: "Mandi" 
// "Laís Petra", apelido: "Laura"


// Exercícios de escrita de código
//1)

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//a)
 const nomeDosPets = pets.map((item) =>{
     return item.nome   
 })
 console.log(nomeDosPets)
// //b) 
 const somenteSalsicha = pets.filter((item)=>{
     return item.raca === "Salsicha"
 })
 console.log(somenteSalsicha)
//c)
// mensagem "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
const descontoPoodles = pets.filter((item, index, array) => { 
    return item.raca === "Poodle"   
    
})

const mensagemDeDescontoPoodles = descontoPoodles.map((item) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
})
console.log(mensagemDeDescontoPoodles) 

//2)
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 //a)
 const nomesDosProdutos = produtos.map((item) => {
     return item.nome
 })
 console.log(nomesDosProdutos)
 //b)
 const descontos = produtos.map((item) => {
    return { nome: item.nome, preco: item.preco*0.95}    
 })
 console.log(descontos)
//c)
const somenteBebidas = produtos.filter((bebidas) => {
    return bebidas.categoria === "Bebidas"
})
console.log(somenteBebidas)
//d)
const somenteYpe = produtos.filter((ype) => {
    return ype.nome.includes("Ypê")
})
console.log(somenteYpe)
//e)
const cadaItemUmaFrase = produtos.filter((ype) => {
    return ype.nome.includes("Ypê")
})

const mensagemDeCompra = cadaItemUmaFrase.map ((item) => {
    return `Compre ${item.nome} por ${item.preco}.`
})
console.log(mensagemDeCompra) 

//          Desafios            //

//1)
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

//a)Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética

const nomeDosPokemons = pokemons.map((item) => {
    return item.nome
})
console.log(nomeDosPokemons.sort())

//b) Crie um novo array apenas com os tipos dos pokémons, sem repetição
const tiposDePokemon= pokemons.map((item) => {
    return item.tipo 
})
const tiposDePokemonSemRepeticao = [... new Set(tiposDePokemon)]


console.log(tiposDePokemonSemRepeticao)

