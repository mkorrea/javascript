let visor = document.getElementById("visor")
let calc = document.getElementById("calculo")
let res = document.getElementById("resultado")

let sinal = document.getElementById("sinal")
let valor1 = document.getElementById("valor1")
let n1 = Number(valor1.innerText)
let valor2 = document.getElementById("valor2")
let n2 = Number(valor2.innerText)

function zerar() {
    if (valor1.innerHTML != "" || valor2.innerHTML != "" || sinal.innerHTML != "" || res.innerHTML != "") {
        res.innerHTML = ""
        valor1.innerHTML = ""
        sinal.innerHTML = ""
        valor2.innerHTML = ""
    }
}

function igual() {  
    if (sinal.innerText == "+") {
        res.innerHTML = Number(n1) + Number(n2)
    } else if (sinal.innerText == "-") {
        res.innerHTML = Number(n1) - Number(n2)
    } else if (sinal.innerText == "×") {
        res.innerHTML = Number(n1) * Number(n2)
    } else if (sinal.innerText == "÷") {
        res.innerHTML = Number(n1) / Number(n2)
    }


}
function soma() {
    sinal.innerText = "+"
    if (res.innerHTML != "") {
        valor1.innerHTML = Number(n1) + Number(n2)
        valor2.innerHTML = ""
    }
}
function sub() {
    sinal.innerText = "-"
}
function mult() {
    sinal.innerText = "×"
}
function div() {
    sinal.innerText = "÷"
}


function sete() {
    if (sinal.innerText == "") {
        valor1.innerText += 7
        n1 += "7"
    } else {
        valor2.innerText += 7
        n2 += "7"
    }
}
function oito() {
    if (sinal.innerText == "") {
        valor1.innerText += 8
        n1 += "8"
    } else {
        valor2.innerText += 8
        n2 += "8"
    }
}
function nove() {
    if (sinal.innerText == "") {
        valor1.innerText += 9
        n1 += "9"
    } else {
        valor2.innerText += 9
        n2 += "9"
    }
}
function quatro() {
    if (sinal.innerText == "") {
        valor1.innerText += 4
        n1 += "4"
    } else {
        valor2.innerText += 4
        n2 += "4"
    }
}
function cinco() {
    if (sinal.innerText == "") {
        valor1.innerText += 5
        n1 += "5"
    } else {
        valor2.innerText += 5
        n2 += "5"
    }
}
function seis() {
    if (sinal.innerText == "") {
        valor1.innerText += 6
        n1 += "6"
    } else {
        valor2.innerText += 6
        n2 += "6"
    }
}
function um() {
    if (sinal.innerText == "") {
        valor1.innerText += 1
        n1 += "1"
    } else {
        valor2.innerText += 1
        n2 += "1"
    }
}
function dois() {
    if (sinal.innerText == "") {
        valor1.innerText += 2
        n1 += "2"
    } else {
        valor2.innerText += 2
        n2 += "2"
    }
}
function tres() {
    if (sinal.innerText == "") {
        valor1.innerText += 3
        n1 += "3"
    } else {
        valor2.innerText += 3
        n2 += "3"
    }
}
function zero() {
    if (sinal.innerText == "") {
        valor1.innerText += 0
        n1 += "0"
    } else {
        valor2.innerText += 0
        n2 += "0"
    }
}
