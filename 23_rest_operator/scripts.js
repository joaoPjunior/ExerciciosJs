let num = 1;
let num1 = 5;
let num2 = 7;
let num3 = 9;
let num4 = 13;

function imprimirNumero(...args){
    for(let i = 0; i <= args.length; i++){
        console.log(args[i]);
    }
}

imprimirNumero(num,num1);
console.log("Pause");
imprimirNumero(num2,num3);
console.log("Pause");
imprimirNumero(num4);
console.log("Pause");
imprimirNumero(2,4,5,6,9,8,3,5)
