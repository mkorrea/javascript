let num = [3,60,9,200,5]
//        0  1  2  3  4
console.log(num.sort())
num.push(8)

console.log(`meu vetor é o: ${num}`)
console.log(`o vetor tem ${num.length} elementos`)
console.log(num[3])

for (let pos = 0; pos < num.length; pos++) {
    console.log(`a posição é ${pos} e o valor é ${num[pos]}`)
}
console.log(`O primero valor é ${num[0]}`)

for (let pos in num){
    console.log(`a posição é ${pos} e o valor é ${num[pos]}`)
}

console.log(num.indexOf(60))
console.log(num.indexOf(235))










//VARIÁVEIS COMPOSTAS (Arrays(vetores))

let num = [5, 8, 2, 9, 3] // cada espaço desta array tem a chave (indice ou index) = 0, 1, 2, 3, 4 respectivamente, ou seja, está dividida em 5 elementos.
num[5] = 7 // adiciona o valor '7' no index 5, gerando um novo index, que não existia.
num[2] = 4 // adicionando um valor a um index já existente, substituirá o valor antigo.
num.push(1) // adiciona o valor '1' no final da array, gerando o index 6.
num.sort() // ordena os valores de um array em ordem crescente.
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor (array) é ${num[0]}`)
let pos = num.indexOf(4) // procura um valor dentro da array e diz qual é seu index.
    if (pos == -1) { //-1 indica que o valor não foi encontrado dentro da array.
        console.log('O valor não foi encontrado!')
    } else{
        console.log(`O valor pesquisado está na posição ${pos} `)
    }

---------------------------------------------------------------------------------------------
Arquivo vetornatela.js comentado:

let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
//console.log(valores)

/* para consultar os valores em cada indice da array.

Versão Noob:
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

Versão Basic:
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

Versão PRO atualizada: */
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}