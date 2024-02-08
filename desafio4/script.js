

function gerar(){
    var numero = document.getElementById('numero').value
    var resultado = document.getElementById('res')

    if (numero < 1 || numero > 10){
        alert('Por Favor, Insira um numero de 1 a 10')
        return
    }
    var tabuada = ''
    for(var i = 1; i<= 10; i++){
        tabuada += numero + 'x' + i + '=' + (numero * i) + '<br>'
    }
    res.innerHTML = tabuada
}
 