let num = document.getElementById("num")
let numadd = document.getElementById("numadd")
let v = []

function adicionar() {
    if (num.value.length == 0) {
        window.alert("Por favor, insira um número!")
    } else if (num.value >= 1 && num.value <=100) {
        let valor = document.createElement('option')
        valor.innerText = `Valor ${num.value} adicionado!`
        numadd.appendChild(valor)
        v.push(Number(num.value))
        num.value = ""
    } else {
        window.alert("O valor informado não atende os requisitos!")
    }
}

let res = document.getElementById("res")

function finalizar() {
    if (numadd.length == 0) {
        window.alert("Nenhum valor encontrado!")
    } else if (numadd.length == 1) {
        window.alert("Apenas 1 valor encontrado, adicione pelo menos mais 1 para que possam ser feitos os cálculos!")
    } else {
        Number(v.sort())
        let soma = v[0]
        for (let pos = 0; pos < v.length; pos++, soma += v[pos]) {
            res.innerHTML = `${v.length} números cadastrados <br>
            O maior valor informado foi ${v[pos]} <br>
            O menor valor informado foi ${v[0]} <br>
            A soma de todos os valores é ${soma} <br>
            E a média de todos eles é `
        }
    }
}


