// Funções podem ou não receer parâmetros 
// São blocos reaproveitáveis 

function diz0la(){
    console.log("Olá")
}

function diz0laPessoa(nome) { 
    if(typeof nome !== "string") {
        console.error( "Por favor, digite um valor  de texto1")
     } else {
        console.log(nome +", diz olá")
     }
}

diz0la()
diz0laPessoa("Pedro")
diz0laPessoa ("Mariah")
diz0laPessoa ()
