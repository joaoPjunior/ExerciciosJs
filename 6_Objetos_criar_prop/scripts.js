let pessoa = {
    nome : 'João',
    idade: 31,
    profissão: 'Programador'
};

console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa.nome);

console.log(pessoa);

pessoa.casado = true;

console.log(pessoa.casado);