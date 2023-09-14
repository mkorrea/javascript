function contar() {
    let ini = document.getElementById('intxt')
    let i = Number(ini.value)
    let fim = document.getElementById('fimtxt')
    let f = Number(fim.value)
    let pas = document.getElementById('pastxt')
    let p = Number(pas.value)
    let resultado = document.getElementById('resultado')   
    
    if (fim.value.length == 0 || pas.value.length == 0) {
        window.alert('Verifique os valores!')
    } else if (ini.value.length == 0) {
        alert('Valor de início não inserido! começando contagem a partir de 0')
        i = 0
    }
    if (i < f) {
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c} \u{1F449}`
            }
        }
    resultado.innerHTML += `\u{1F3C1}`
}