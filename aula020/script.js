
let retorno = window.document.getElementById('retorno')
let data = new Date
let diasemana = data.getDay()
let diasemanatexto;
if(diasemana === 4){
    diasemanatexto = `Quarta`
    retorno.innerHTML = data
}

