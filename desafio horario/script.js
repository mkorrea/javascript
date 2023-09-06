var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var txt = document.getElementById('subtitulo')
var body = document.querySelector('body')

if (min == 0) {
    txt.innerHTML = `Agora são ${hora} horas!`
} else if (min == 1) {
    txt.innerHTML = `Agora são ${hora} horas e 0${min} minuto!` 
} else if (min < 10) {
    txt.innerHTML = `Agora são ${hora} horas e 0${min} minutos!` 
} else {
    txt.innerHTML = `Agora são ${hora} horas e ${min} minutos!` 
}

if (hora < 6) {
    var mad = document.getElementById('mad')
    mad.style.display = 'block'
} else if (hora < 12) {
    var man = document.getElementById('man')
    man.style.display = 'block'
    body.style.background = 'rgb(81, 128, 195)'
} else if (hora < 18) {
    var tar = document.getElementById('tar')
    tar.style.display = 'block'
    body.style.background = '#b67743'
} else if (hora < 24) {
    var noi = document.getElementById('noi')
    noi.style.display = 'block'
    body.style.background = '#022037'
}