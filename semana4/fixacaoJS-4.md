```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let vezesNumRepete = 0
  for (let i of arrayDeNumeros){
    if (i === numeroEscolhido){
      vezesNumRepete +=1
    }
  }
  if (vezesNumRepete === 0)
  return "Número não encontrado"
  else return `O número ${numeroEscolhido} aparece ${vezesNumRepete}x`

}```