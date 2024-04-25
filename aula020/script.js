
let retorno = window.document.getElementById('retorno')
let data = new Date
let diasemana = data.getDay
if(diasemana === 3){
    retorno.innerHTML = `Quarta`
}
retorno.innerHTML = data
