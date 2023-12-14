let num = document.getElementById("num")
let lista = document.getElementById("lista")
let v = []
let res = document.getElementById("res")

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, v) {
    if (v.indexOf(Number(n)) != -1) {
        return true 
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, v)) {
        let valor = document.createElement('option')
        valor.innerText = `Valor ${num.value} adicionado!`
        lista.appendChild(valor)
        v.push(Number(num.value))
    } else {
        window.alert("Por favor, insira um novo número de 1 a 100!")
    }
    num.value = ""
    num.focus() //após adicionar o número, automaticamente a caixa de texto ativa de novo
    res.innerHTML = ""
}

function finalizar() {
    if (v.length < 2) {
        window.alert("Adicione pelo menos 2 valores para que sejam feitos os cálculos!")
    } else {
        v.sort((function(a,b) {return a-b}))
        let total = v.length
        let maior = v[0]
        let menor = v[0]
        let soma = 0
        let media = soma / total
        for (pos in v) {
            if (v[pos] > maior) {
                maior = v[pos]
            }
            if (v[pos] < menor) {
                menor = v[pos]
            }
            soma += v[pos]
        }
        res.innerHTML = ''
        res.innerHTML += `<p> ${total} números cadastrados </p> `
        res.innerHTML += `<p> O maior valor informado foi ${maior} </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor} </p>`
        res.innerHTML += `<p> A soma de todos os valores é ${soma} </p>`
        res.innerHTML += `<p>  a média de todos eles é ${media} </p>`
    }
}


