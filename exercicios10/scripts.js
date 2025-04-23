let calculadora = {
    somar: function(a , b){
        return a + b;
    },
    subtrair: function(a , b){
        return a - b;
    },
    dividir: function(a , b){
        return a / b;
    },
    multiplicar: function(a , b){
        return a * b;
    }
};

console.log(calculadora.somar(2,4));
console.log(calculadora.dividir(10,15));
console.log(calculadora.subtrair(20,10));
console.log(calculadora.multiplicar(4,4));