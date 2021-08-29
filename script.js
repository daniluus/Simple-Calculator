
// Fiz minha função recebendo parametro do numero clicado
function insert(num){

    var number = document.getElementById('result').innerHTML;

    document.getElementById('result').innerHTML = number + num;
}

function clean(){
    document.getElementById('result').innerHTML = "";
}

function back(){    
    var resultado = document.getElementById('result').innerHTML;

    // substring vai pegar o resultado e diminuir 1
    document.getElementById('result').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById('result').innerHTML;

    if(resultado){

        // Eval() já faz o calculo
        document.getElementById('result').innerHTML = eval(resultado)
    }
}