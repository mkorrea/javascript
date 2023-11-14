let visor = document.getElementById("visor")
let calc = document.getElementById("calculo")
let res = document.getElementById("res")

let calc1 = document.getElementById("c1").innerText
let n1 = Number(calc1)
let sinal = document.getElementById("sinal")

let calc3 = document.getElementById("c3").innerText
let n3 = Number(calc3)

function zerar() {
    res.innerHTML = " "
    calc3.innerHTML = " "
    n3.innerHTML = " "
    sinal.innerHTML = " "
    n1.innerHTML = " "
}

function igual() {
    if (sinal.innerText == "+") {
        res.innerHTML = n3 + n1
    }
    if (sinal.innerText == "-") {
        res.innerHTML = n3 - n1
    }
    if (sinal.innerText == "×") {
        res.innerHTML = n3 * n1
    }
    if (sinal.innerText == "÷") {
        res.innerHTML = n3 / n1
    }
}
function soma() {
    sinal.innerText = "+"
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
        c3.innerText += 7
    } else {
        c1.innerText += 7
    }
}
function oito() {
    if (sinal.innerText == "") {
        c3.innerText += 8
    } else {
        c1.innerText += 8
    }
}
function nove() {
    if (sinal.innerText == "") {
        c3.innerText += 9
    } else {
        c1.innerText += 9
    }
}
function quatro() {
    if (sinal.innerText == "") {
        c3.innerText += 4
    } else {
        c1.innerText += 4
    }
}
function cinco() {
    if (sinal.innerText == "") {
        c3.innerText += 5
    } else {
        c1.innerText += 5
    }
}
function seis() {
    if (sinal.innerText == "") {
        c3.innerText += 6
    } else {
        c1.innerText += 6
    }
}
function um() {
    if (sinal.innerText == "") {
        c3.innerText += 1
    } else {
        c1.innerText += 1
    }
}
function dois() {
    if (sinal.innerText == "") {
        c3.innerText += 2
    } else {
        c1.innerText += 2
    }
}
function tres() {
    if (sinal.innerText == "") {
        c3.innerText += 3
    } else {
        c1.innerText += 3
    }
}
function zero() {
    if (sinal.innerText == "") {
        c3.innerText += 0
    } else {
        c1.innerText += 0
    }
}
