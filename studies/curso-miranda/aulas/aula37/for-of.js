/************************/
/* Iteração com Variáveis e Arrays */
/************************/
const NOMES = ['Leo', 'Thomas', 'Carlos', 'Júnior']

// FOR CLÁSSICO
// i é uma variável de controle
for (let i = 0; i < NOMES.length; i++) {
    console.log(NOMES[i]);
    document.querySelector('#teste-1').innerHTML += `${NOMES[i]}<br>`;
}

// FOR IN
// pega o índice; mesma coisa que o for clássico
for (let i in NOMES) {
    console.log(NOMES[i]);
    document.querySelector('#teste-2').innerHTML += `${NOMES[i]}<br>`;
}

// FOR OF
// pega direto o valor, sem o índice
// i = valor
for (let i of NOMES) {
    console.log(i);
    document.querySelector('#teste-3').innerHTML += `${i}<br>`;
}

// forEach()
NOMES.forEach(function(valor, indice) {
    console.log(valor, indice);
    document.querySelector('#teste-4').innerHTML += `${valor} ${indice}<br>`;
    document.querySelector('#teste-4').innerHTML += `ID: ${indice+1}, Nome do Unicórnio: ${valor}<br>`;
})

/************************/
/* Iteração com Objetos */
/************************/
const PESSOA = {
    nome: 'Leo',
    sobrenome: 'Thomas',
    nascimento: 1996
}

// Precisa pegar a chave
for (let key in PESSOA) {
    console.log(key, PESSOA[key]);
    document.querySelector('#teste-5').innerHTML += `<b>${key.toUpperCase()}</b>: ${PESSOA[key]}<br>`
}

/************************/
// RESUMO
// for clássico > com iteráveis (strings ou arrays)
// for in > retorna o índice ou chave (strings, arrays ou objetos)
// for of > retorna o valor em si (iteráveis, arrays ou strings)
/************************/