// Funções de retorno exigem o termo 'return'
// Permitem tornar disponíveis os dados processados
// Reaproveitameno e ações sequenciais 
// podemos armazenar as funções de retorno
// as varíaveis, funções, arrays, etc. 

function meuSalario(salario) {
    const contaLuz = 145.54
    const aluguel = 1350.87 
    const restoSalario = salario - (contaLuz+aluguel)
    //console.log(restoSalario) // não serve p/ usuário 
    return `o resto do seu salário é R$ ${restoSalario.toFixed(2).replace(".",",")}`
}
const  resto = meuSalario(30000.0)
console.log(resto)