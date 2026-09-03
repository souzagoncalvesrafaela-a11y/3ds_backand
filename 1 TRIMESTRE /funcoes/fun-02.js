//A partir da Função abaixo,
//crie as variações: 
// (Adição, Subtração,,Multiplicação, Divisão)

function divisao(n1, n2) {
    if(n2 != 0) { 
        console.log(" divisão de " + n1+ " por " +n2+ " é = " + (n1 / n2))
    } else {
        console.error('imposssível dividir por ZERO!')

    }
}
divisao(17, 2)
divisao(12, 0)   

function adicao(n1, n2) { 
    console.log(" adicao de " + n1+ " por " +n2+ " é = " + (n1 + n2))

}
adicao(3, 2)
adicao(2,0)

function multiplicacao(n1, n2) {
    console.log(" multiplicacao de " + n1+ " por " +n2+ " é = " + (n1 * n2))

}
multiplicacao(30, 5)
multiplicacao(20.3)

function subtracao(n1, n2) {
    console.log(" subtracao de " + n1+ " por " +n2+ " é = " - (n1 - n2))

}
subtracao(39,15)
subtracao(70,40)