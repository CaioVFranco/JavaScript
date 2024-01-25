var idade = 15
console.log(`Voce tem ${idade} anos e `)
if (idade < 16) {
    console.log(`Não Vota`)
}    
else {
    if (idade >= 16 && idade < 18 || idade > 65){
        console.log(`Seu Voto é opcional`)
    }
    else {
        console.log(`Seu Voto é Obrigatório`)
    }
}

