function carregar () {
    var agora = new Date()
    var hora = agora.getHours()
    var min = agora.getMinutes()
    var txt = document.getElementById('subtitulo')
    var img = document.getElementById('mad')

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
        img.src = 'imagens/madrugada.jpg'
    } else if (hora < 12) {
        document.body.style.background = 'rgb(81, 128, 195)'
        img.src = 'imagens/manha.jpg'
    } else if (hora < 18) {
        document.body.style.background = '#b67743'
        img.src = 'imagens/tarde.jpg'
    } else if (hora < 24) {
        document.body.style.background = '#022037'
        img.src = 'imagens/noite.jpg'
    }
}