//      EXERCÍCIOS DE INTERPRETAÇÃO       //
//1)
//a) Ele pega o número que o usuário insere no "promp"
//   e diz se ele passou ou não no teste.
// O programa testa se o resto da divisao do numero
// digitado pelo usuário é = 0.
//b) Para números pares.
//c) Para números ímpares.

//2)
//a) o código serve para dizer 
//o preço das frutas de um supermercado.
//b) O preço da fruta  Maçã  é  R$2.25
//c) O preço da fruta  Pêra  é  R$5.5

//3)
//a) Está pegando um número do usuário através do prompt.
//b) Se o usuário digitou 10, apareceu para ele que
// "Esse número passou no teste".
//Se ele digitou -10, não aparecerá nada.
//c) Haverá um erro porque o console.log(mensagem)
//porque o escopo pai, não pode acessar informações do escopo filho.


//      EXERCÍCIOS DE ESCRITA       //

//1)

const idade = Number(prompt("Digite a sua idade:"))

const idadeMinimaHabilitacao = (idadeHabilitacao) => {
    if (idadeHabilitacao >= 18){
        console.log("Você pode dirigir.")
    } else {
        console.log("Você não pode dirigir.")
    }
}

idadeMinimaHabilitacao(idade)

//2)
const horarioQueEstuda1 = prompt("Qual período você estuda? Digite M/Matutino, V/Vespertino ou N/Noturno:")

const imprimeHorarioQueEstuda1 = (horarios) => {
    if (horarios === "M"){
        console.log("Bom dia!")
    }else if (horarios === "V"){
        console.log("Boa tarde!")
    }else if (horarios === "N"){
        console.log("Boa noite!")
    }
}
imprimeHorarioQueEstuda1(horarioQueEstuda1)

//3)
let horarioQueEstuda = prompt("Qual período você estuda? Digite M/Matutino, V/Vespertino ou N/Noturno:")

switch (horarioQueEstuda) {
    case "M":
        console.log("Bom dia!")
        break;
    case "V":
        console.log("Boa tarde!")
        break;
    case "N":
        console.log("Boa noite!")
        break;    
    default:
        break;
}
const imprimeAssistirFilme = (genero, preço) => {
    if(genero === "fantasia" && preço <= 15){
        console.log("Bom filme!")
    }else{
        console.log("Escolha outro filme :(")
    }
}

const seuGenero = prompt("Digite seu gênero")
const preçoIngreço = 15

imprimeAssistirFilme(seuGenero, preçoIngreço)

//      DESAFIOS        //
//1)
const imprimeAssistirFilme = (genero, preço) => {
    if(genero === "fantasia" && preço <= 15){
        console.log("Bom filme!")
    }else{
        console.log("Escolha outro filme :(")
    }
}

const seuGenero = prompt("Digite seu gênero")
const preçoIngreço = 13.5
const lanche = prompt("Qual lanche você vai comprar para assistir ao filme?")

imprimeAssistirFilme(seuGenero, preçoIngreço)
console.log(`Aproveite  ${lanche}.`)

//2)
const nomeCompleto = prompt("Digite seu nome completo:")
const tipoDeJogo = prompt('Digite o tipo de jogo sendo IN/internacional e DO/doméstico:')
const etapaDoJogo = prompt('Digite a etapa do jogo sendo SF/Semi-final, DT/Terceiro lugar e FI/Final:')
const categoria = Number(prompt("Digite a categoria: 1, 2, 3 ou 4"))
const quantidadeDeIngressos = Number(prompt("Quantidade de ingressos:"))

const imprimeVendas = (nomeCompleto,tipoDeJogo,etapaDoJogo,categoria,quantidadeDeIngressos)
const nome = nomeCompleto
if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 1){
    console.log(`
    ---Dados da compra---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${tipoDeJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade: ${quantidadeDeIngressos}
    ---Valores---
    Valor do ingresso:R$1320
    Valor total: R$${quantidadeDeIngressos*1320}
    `)
}else if(tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 1){
    console.log(`
    ---Dados da compra---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${tipoDeJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade: ${quantidadeDeIngressos}
    ---Valores---
    Valor do ingresso:R$660
    Valor total: R$${quantidadeDeIngressos*660}
    `)
}else if(tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 1){
    console.log(`
    ---Dados da compra---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${tipoDeJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade: ${quantidadeDeIngressos}
    ---Valores---
    Valor do ingresso:R$1980
    Valor total: R$${quantidadeDeIngressos*1980}
    `)
}else if(tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 2){
    console.log(`
    ---Dados da compra---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${tipoDeJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade: ${quantidadeDeIngressos}
    ---Valores---
    Valor do ingresso:R$880
    Valor total: R$${quantidadeDeIngressos*880}
    `)
}else if(tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 2){
    console.log(`
    ---Dados da compra---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${tipoDeJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade: ${quantidadeDeIngressos}
    ---Valores---
    Valor do ingresso:R$440
    Valor total: R$${quantidadeDeIngressos*440}
    `)
}else if(tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 2){
    console.log(`
    ---Dados da compra---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${tipoDeJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade: ${quantidadeDeIngressos}
    ---Valores---
    Valor do ingresso:R$1320
    Valor total: R$${quantidadeDeIngressos*1320}
    `)
}else if(tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 3){
    console.log(`
    ---Dados da compra---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${tipoDeJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade: ${quantidadeDeIngressos}
    ---Valores---
    Valor do ingresso:R$550
    Valor total: R$${quantidadeDeIngressos*550}
    `)
}else if(tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 3){
    console.log(`
    ---Dados da compra---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${tipoDeJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade: ${quantidadeDeIngressos}
    ---Valores---
    Valor do ingresso:R$330
    Valor total: R$${quantidadeDeIngressos*330}
    `)
}else if(tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 3){
    console.log(`
    ---Dados da compra---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${tipoDeJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade: ${quantidadeDeIngressos}
    ---Valores---
    Valor do ingresso:R$880
    Valor total: R$${quantidadeDeIngressos*880}
    `)
}else if(tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoria === 4){
    console.log(`
    ---Dados da compra---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${tipoDeJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade: ${quantidadeDeIngressos}
    ---Valores---
    Valor do ingresso:R$220
    Valor total: R$${quantidadeDeIngressos*220}
    `)
}else if(tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoria === 4){
    console.log(`
    ---Dados da compra---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${tipoDeJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade: ${quantidadeDeIngressos}
    ---Valores---
    Valor do ingresso:R$170
    Valor total: R$${quantidadeDeIngressos*170}
    `)
}else if(tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoria === 4){
    console.log(`
    ---Dados da compra---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${tipoDeJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade: ${quantidadeDeIngressos}
    ---Valores---
    Valor do ingresso:R$330
    Valor total: R$${quantidadeDeIngressos*330}
    `)
}else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 1){
    console.log(`
    ---Dados da compra---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${tipoDeJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade: ${quantidadeDeIngressos}
    ---Valores---
    Valor do ingresso:U$321,95
    Valor total: U$${quantidadeDeIngressos*321.95}
    `)
}else if(tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 1){
    console.log(`
    ---Dados da compra---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${tipoDeJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade: ${quantidadeDeIngressos}
    ---Valores---
    Valor do ingresso:U$160,97
    Valor total: U$${quantidadeDeIngressos*160.97}
    `)
}else if(tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 1){
    console.log(`
    ---Dados da compra---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${tipoDeJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade: ${quantidadeDeIngressos}
    ---Valores---
    Valor do ingresso:U$482.92
    Valor total: U$${quantidadeDeIngressos*482.92}
    `)
}else if(tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 2){
    console.log(`
    ---Dados da compra---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${tipoDeJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade: ${quantidadeDeIngressos}
    ---Valores---
    Valor do ingresso:U$214,63
    Valor total: U$${quantidadeDeIngressos*214.83}
    `)
}else if(tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 2){
    console.log(`
    ---Dados da compra---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${tipoDeJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade: ${quantidadeDeIngressos}
    ---Valores---
    Valor do ingresso:U$107,31
    Valor total: R$${quantidadeDeIngressos*107.31}
    `)
}else if(tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 2){
    console.log(`
    ---Dados da compra---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${tipoDeJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade: ${quantidadeDeIngressos}
    ---Valores---
    Valor do ingresso:U$321,95
    Valor total: U$${quantidadeDeIngressos*321.95}
    `)
}else if(tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 3){
    console.log(`
    ---Dados da compra---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${tipoDeJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade: ${quantidadeDeIngressos}
    ---Valores---
    Valor do ingresso:U$134,14
    Valor total: U$${quantidadeDeIngressos*134.14}
    `)
}else if(tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 3){
    console.log(`
    ---Dados da compra---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${tipoDeJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade: ${quantidadeDeIngressos}
    ---Valores---
    Valor do ingresso:U$80.48
    Valor total: U$${quantidadeDeIngressos*80.48}
    `)
}else if(tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 3){
    console.log(`
    ---Dados da compra---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${tipoDeJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade: ${quantidadeDeIngressos}
    ---Valores---
    Valor do ingresso:U$214,63
    Valor total: U$${quantidadeDeIngressos*214.63}
    `)
}else if(tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoria === 4){
    console.log(`
    ---Dados da compra---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${tipoDeJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade: ${quantidadeDeIngressos}
    ---Valores---
    Valor do ingresso:U$53,65
    Valor total: U$${quantidadeDeIngressos*53.65}
    `)
}else if(tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoria === 4){
    console.log(`
    ---Dados da compra---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${tipoDeJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade: ${quantidadeDeIngressos}
    ---Valores---
    Valor do ingresso:U$41.46
    Valor total: U$${quantidadeDeIngressos*41.46}
    `)
}else if(tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoria === 4){
    console.log(`
    ---Dados da compra---
    Nome do cliente: ${nomeCompleto}
    Tipo do jogo: ${tipoDeJogo}
    Etapa do jogo: ${etapaDoJogo}
    Categoria: ${categoria}
    Quantidade: ${quantidadeDeIngressos}
    ---Valores---
    Valor do ingresso:U$80.48
    Valor total: U$${quantidadeDeIngressos*80.48}
    `)
}