function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var date = new Date()
var hora = date.getHours()
msg.innerHTML = `Agora sao ${hora} horas`
if (hora >= 0 && hora < 12){
img.src = 'fotomanha.png'
document.body.style.background = '#f5ca9d'
}else if(hora >= 12 && hora < 18){
img.src = 'fototarde.png'
document.body.style.background = '#b44106'
}else{
img.src = 'fotonoite.png'
document.body.style.background = '#1d3c58'
}
}