let pessoa = {
    nome: 'João',
    idade: 25,
    peso: 78,
    cidade: 'João Pessoa',
    engordar(p=0){ // p=0 significa que se caso o valor de "p" não seja inserido, ele vai ser considerado 0
        console.log(`${pessoa.nome} engordou ${p} kilos!`)
        this.peso += p // this = palavra auto referência ao objeto
    }
}
pessoa.engordar(13)
console.log(`${pessoa.nome} pesa ${pessoa.peso}`)
  