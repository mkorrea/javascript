
function gerar () {

    let num = document.getElementById('num')
    let n = Number(num.value)
    let tab = document.getElementById('tabuada')
    let m = 1
    
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        tab.innerText = ''
        while (m <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${m} = ${n*m}`
            item.value = `x${m}`
            tab.appendChild(item)
            m++
        }
    }
/*
    MÉTODO COM ARRAY

tab.innerText = ''
    let numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

    let tabuada = numeros.map(function(mult, index) {
        let item = document.createElement('option')
        item.text = `${n} x ${mult} = ${n*mult} `
        tab.appendChild(item)
    })
}
*/