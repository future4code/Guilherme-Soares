/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!")    

let jogo = confirm("Quer iniciar uma rodada?")

if(jogo) {
   let carta1DoUsuario = comprarCarta()
   let carta2DoUsuario = comprarCarta()
   let carta1DoPc = comprarCarta()
   let carta2DoPc = comprarCarta()

   let pontuacaoUsuario = carta1DoUsuario.valor + carta2DoUsuario.valor
   let pontuacaoDoPC = carta1DoPc.valor + carta2DoPc.valor

   console.log(`Usuário - cartas: ${carta1DoUsuario.texto} ${carta2DoUsuario.texto} - ${pontuacaoUsuario}`)
   console.log(`PC - cartas: ${carta1DoPc.texto} ${carta2DoPc.texto} - ${pontuacaoDoPC}`)

   if (pontuacaoUsuario > pontuacaoDoPC) {
      console.log("O usuário venceu!")
   }else if(pontuacaoDoPC > pontuacaoUsuario) {
      console.log("O PC venceu!")
   }else if(pontuacaoUsuario === pontuacaoDoPC) {
      console.log("Houve um empate!")
   }


}else{
   console.log("O jogo acabou")
}



