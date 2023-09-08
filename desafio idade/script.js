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
        if (sexo[0].checked) {
            gen = 'um homem'
        } else if (sexo[1].checked) {
            gen = 'uma mulher'
        }


        res.innerHTML = `Detectamos ${gen} com ${idade} anos!`
    }
}