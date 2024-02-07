function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txt')
    var res = document.getElementById('res')
    var nome = document.getElementById('nome')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Erro Tente Novamente')
    }else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex [0].checked){
        genero = 'Homem'
        if(idade >= 0 && idade < 10){
            //crianca
            img.setAttribute('src', 'imagem/bebehomem.png')
        } else if (idade < 21){
            //jovem
            img.setAttribute('src', 'imagem/adolecentehomem.png')
        } else if (idade < 50){
            //adulto
            img.setAttribute('src', 'imagem/adultohomem.png')
        }else {
            //idoso
            img.setAttribute('src', 'imagem/idosohomem.png')
        }
        
       } else if (fsex [1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade < 10){
            //crianca
            img.setAttribute('src', 'imagem/bebemulher.png')
        } else if (idade < 21){
            //jovem
            img.setAttribute('src','imagem/adolecentemulher.png')
        } else if (idade < 50){
            //adulto
            img.setAttribute('src', 'imagem/adultamulher.png')
        }else {
            //idoso
            img.setAttribute('src', 'imagem/idosamulher.png')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Ola ${nome} detectamos ${genero} com ${idade} anos`
       res.appendChild(img)
    }


    
}