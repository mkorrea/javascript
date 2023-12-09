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
