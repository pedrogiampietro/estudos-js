// Armazenando uma função em uma variavel.

const printSum = function (a, b) {
    console.log(a + b);
}

printSum(2, 3)

// Armazenando uma função Arrow em uma variavel.

const sum = (a, b) => {
    return a + b
}

console.log(sum(2, 3));

// Retorno implícito 

const sub = (a, b) => a - b

console.log(sub(2, 3));

