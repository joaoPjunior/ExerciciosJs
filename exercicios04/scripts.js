let obj = {
    rodas: 8,
    passageiros: 40,
    porta: 2,
};

obj.janelas = 20;

console.log(obj.janelas);

delete obj.rodas;

console.log(obj.rodas);

console.log(obj);