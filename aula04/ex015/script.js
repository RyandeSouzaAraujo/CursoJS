function verificar(){
    var date = new Date
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verfique os dados e tente novamente')
    }else{
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked){
            var genero = 'Homem'
            if (idade >= 0 && idade <10){
                img.setAttribute('src', 'criançaM.png')
            }else if( idade < 21){
                img.setAttribute('src', 'jovemM.png')
            }else if(idade < 50){
                img.setAttribute('src', 'adultoM.png')
            }else{
                img.setAttribute('src','VelhoM.png')
            }
        }else{
            var genero = 'Mulher'
            if (idade >= 0 && idade <10){
                img.setAttribute('src', 'criançaF.png')
            }else if( idade < 21){
                img.setAttribute('src','jovemF.png')
            }else if(idade < 50){
                img.setAttribute('src', 'adultoF.png')
            }else{
                img.setAttribute('src', 'VelhoF.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}