let nums = [1, 2, 3, 4, 5, 6];
let nums2 = [1, 2, 3];

function verificarNumerosArray(arr){
    if(arr.length >= 5){
        console.log("Possui Mais de 5 elementos");
    }else{
        console.log("Possui menos de 5 ementos");
    }
}


verificarNumerosArray(nums);
verificarNumerosArray(nums2);