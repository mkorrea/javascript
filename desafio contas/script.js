function contar() {
    var initxt = document.getElementById('intxt')
    var inicio = Number(initxt.value)
    var fimtxt = document.getElementById('fimtxt')
    var fim = Number(fimtxt.value)
    var pastxt = document.getElementById('pastxt')
    var pas = Number(pastxt.value)
    var resultado = document.getElementById('resultado')   
    
    if (fimtxt.value.length == 0 || pastxt.value.length == 0) {
        window.alert('Verifique os valores!')
    } else if (inicio == '') {
        alert('Valor não inserido! começando contagem a partir de 0')
        if (inicio > fim) {
            for (inicio = 0 ;inicio <= fim; inicio = inicio + pas) {
                resultado.innerHTML += `${inicio} \u{1F449}`
            }
        }
    } else {
        for (inicio ;inicio <= fim; inicio = inicio + pas) {
            resultado.innerHTML += `${inicio} \u{1F449}`
        }
    }
    resultado.innerHTML += `\u{1F3C1}`
}