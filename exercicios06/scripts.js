let num = [1,2,3,4,5,6,7,8,9];
let num1 = [1,2,3,4];

function verificarNumeros(arr){
    if(arr.length >= 5){
        console.log("Tem mais de 5 Elementos");
    }else {
        console.log("Tem menos de 5 elementos");
    }
}


verificarNumeros(num);
verificarNumeros(num1);