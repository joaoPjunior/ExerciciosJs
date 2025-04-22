let pessoa = {
    "nome": "João",
    "Idade": 28,
    "Profissão": "Programador",
    "Hobbies": ["Video games", "Livros", "Musicas"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

let pessoaJson = JSON.parse(pessoaTexto);

console.log(pessoaJson);
/* console.log(pessoa.Idade);
console.log(pessoa.Profissão);
console.log(pessoa.Hobbies);
 */

