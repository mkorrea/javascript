let visor = document.getElementById("visor")
let calc = document.getElementById("calculo")
let res = document.getElementById("resultado")

let calc1 = document.getElementById("c1").innerText
let n1 = Number(calc1)
let sinal = document.getElementById("sinal")

let calc3 = document.getElementById("c3").innerText
let n3 = Number(calc3)

function zerar() {
 
    c3.innerHTML = ""
    sinal.innerHTML = ""
    c1.innerHTML = ""
}
function igual() {  
    if (sinal.innerText == "+") {
        res.innerHTML = Number(n3) + Number(n1)
    } else if (sinal.innerText == "-") {
        res.innerHTML = Number(n3) - Number(n1)
    } else if (sinal.innerText == "×") {
        res.innerHTML = Number(n3) * Number(n1)
    } else if (sinal.innerText == "÷") {
        res.innerHTML = Number(n3) / Number(n1)
    }

    
}
function soma() {
    sinal.innerText = "+"
    // if (res.value.length >= 1) {
    //     c3.innerHTML = res
    // }
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
        n3 += "7"
    } else {
        c1.innerText += 7
        n1 += "7"
    }
}
function oito() {
    if (sinal.innerText == "") {
        c3.innerText += 8
        n3 += "8"
    } else {
        c1.innerText += 8
        n1 += "8"
    }
}
function nove() {
    if (sinal.innerText == "") {
        c3.innerText += 9
        n3 += "9"
    } else {
        c1.innerText += 9
        n1 += "9"
    }
}
function quatro() {
    if (sinal.innerText == "") {
        c3.innerText += 4
        n3 += "4"
    } else {
        c1.innerText += 4
        n1 += "4"
    }
}
function cinco() {
    if (sinal.innerText == "") {
        c3.innerText += 5
        n3 += "5"
    } else {
        c1.innerText += 5
        n1 += "5"
    }
}
function seis() {
    if (sinal.innerText == "") {
        c3.innerText += 6
        n3 += "6"
    } else {
        c1.innerText += 6
        n1 += "6"
    }
}
function um() {
    if (sinal.innerText == "") {
        c3.innerText += 1
        n3 += "1"
    } else {
        c1.innerText += 1
        n1 += "1"
    }
}
function dois() {
    if (sinal.innerText == "") {
        c3.innerText += 2
        n3 += "2"
    } else {
        c1.innerText += 2
        n1 += "2"
    }
}
function tres() {
    if (sinal.innerText == "") {
        c3.innerText += 3
        n3 += "3"
    } else {
        c1.innerText += 3
        n1 += "3"
    }
}
function zero() {
    if (sinal.innerText == "") {
        c3.innerText += 0
        n3 += "0"
    } else {
        c1.innerText += 0
        n1 += "0"
    }
}
