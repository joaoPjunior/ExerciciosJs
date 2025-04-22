let calculadora = {
    somar: function(a,b){
        return a + b;
    },
    subtrair: function(a,b){
        return a - b;
    },
    multiplicar: function(a,b){
        return a * b;
    },
    dividir: function(a,b){
        return a / b;
    }
}


console.log(calculadora.somar(2,4))
console.log(calculadora.subtrair(2,4))
console.log(calculadora.multiplicar(2,4))
console.log(calculadora.dividir(2,4))


const arr = []

for( let i = 0; i < 5; i++){
    arr.push(i + 5 );
}

console.log(arr);