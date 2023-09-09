function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('ano')
    var res = document.getElementById('result')
    
    if (nasc.value.length == 0 || Number(nasc.value) > ano) {
        window.alert('Verifique os dados!')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(nasc.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            gen = 'um homem'
            if (idade < 16) {
                img.setAttribute('src', 'imagens/menino.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/homem.jpg')
            } else {
                img.setAttribute('src', 'imagens/senhor.jpg')
            }
        } else if (sexo[1].checked) {
            gen = 'uma mulher'
            if (idade < 16) {
                img.setAttribute('src', 'imagens/menina.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/mulher.jpg')
            } else {
                img.setAttribute('src', 'imagens/senhora.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos!`
        res.appendChild(img)
    }
}