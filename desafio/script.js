function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<strong>Agora sao ${hora} horas</strong>`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'imagens/dia.png'
        document.body.style.background = '#00ffce'
    }else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#bf7d75'
    } else {
        //boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#666796'
    }


}