
try {
    console.log(naoExisto)
} catch(error) {
    console.log('naoExisto não existe.')
}

// boas práticas: não ficar mostrando erros internos para o usuário;

function sum(x, y) {
    if (typeof x != 'number' || typeof y !== 'number') {
        throw('x e y precisam ser números');
    }

    return x + y;
}

console.log(sum(1,2));
console.log(sum('a',3));