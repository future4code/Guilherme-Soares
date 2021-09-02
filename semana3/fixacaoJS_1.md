function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
let comissaoTotal= (valorTotalVendas * 0.05) + (qtdeCarrosVendidos * 100)
let calculoSalario = 2000 + comissaoTotal
let salario = calculoSalario

return salario
}