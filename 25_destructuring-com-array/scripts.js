let nomes = ["João", "Lucas", "Pedro", "Silvia", "Joaquim"];

let [nomeA,nomeB, nomeC, nomeD, nomeE] = nomes ;

console.log(nomeA);
console.log(nomeB);
console.log(nomeC);
console.log(nomeD);
console.log(nomeE);

let reverter = nomes.reverse();

console.log(nomes);

let adicionarnome = nomes.push("Leno");

console.log(nomes);

let removerNome = nomes.pop("Leno");

console.log(nomes);

let encontrar1 = nomes.shift();

console.log(nomes[3]);