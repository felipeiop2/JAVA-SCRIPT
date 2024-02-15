let numero = window.document.getElementById("numero")
let res = window.document.getElementById('res')
let lista = window.document.getElementById('flista')
let valores = []

function isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else{
        return false
    }

}

function inlista(n, l){
    if(l.indexOf(Number(n )) != -1){
        return true
    }else{
        return false
    }

}

function adicionar(){
    if(isnumero(numero.value) && !inlista(numero.value, valores)) { 
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `valor ${numero.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    
    } else {
        window.alert('Numero Invalido ou Ja Adicionado a lista')
    }
  numero.value = ''
  numero.focus()  
}
function finalizar(){
    if (valores.length == 0){
        window.alert('adicione valores antes de finalizar ')

    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores [0]\
        for



        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} numeros cadastrados</p>`
    }
}