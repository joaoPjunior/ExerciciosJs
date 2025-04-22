let pessoa = {
    nome : 'João'
};

pessoa1 = pessoa;

console.log(pessoa1 === pessoa);

let pessoa2 = pessoa;

console.log(pessoa2 === pessoa);

let pessoa3 = pessoa1;

console.log(pessoa3 === pessoa1);

let pessoa4 = {
    nome: 'João'
}


console.log(pessoa4 === pessoa);
console.log(pessoa4 === pessoa3);
console.log(pessoa4 === pessoa2);
console.log(pessoa4 === pessoa1);
console.log(pessoa4.nome);

let pessoa5 = {
    nome: 'Maria'
}

let pessoa6 = pessoa5;

console.log(pessoa5.nome)

console.log(pessoa6 === pessoa5);