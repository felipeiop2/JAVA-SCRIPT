
function somar(){
      const inicio = window.document.getElementById('inicio').value
      const fim = window.document.getElementById('fim').value
      const passo = window.document.getElementById('passo').value
      const res = window.document.getElementById('res')
      if(inicio === '' || fim === '' || passo === ''){
        res.innerHTML = 'Por Favor Prencha Todos os Campos'
      }else{
        let contagem = ''
        for (let i = Number(inicio); i <= Number(fim); i += Number(passo)){
            contagem += i + ' '
        }
        res.innerHTML = contagem
        }
      

}