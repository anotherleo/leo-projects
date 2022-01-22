
try {
    console.log(naoExisto)
} catch(error) {
    console.log('naoExisto não existe.')
}

// boas práticas: não ficar mostrando erros internos para o usuário;

function sum(x, y) {
    if (
        typeof x != 'number' || 
        typeof y !== 'number'
        ) {
            throw('x e y precisam ser números');
        }

    return x + y;
}

console.log(sum(1,2));
console.log(sum('a',3));

function sumTwo(x, y) {
    if (
        typeof x != 'number' || 
        typeof y !== 'number'
        ) {
            throw new Error('x e y precisam ser números');
        }

    return x + y;
}

console.log(sumTwo(1,2));
console.log(sumTwo('a',3));


function sumThree(x, y) {
    if (
        typeof x != 'number' || 
        typeof y !== 'number'
        ) {
            throw new ReferenceError('x e y precisam ser números');
        }

    return x + y;
}

console.log(sumThree(1,2));
console.log(sumThree('a',3));