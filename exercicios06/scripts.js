let nums = [1, 2, 3, 4, 5, 6];
let nums2 = [1, 2, 3];

function verificarNumerosArray(arr){
    if (arr.length >= 5){
        console.log("Possui 5 ou mais que 5 elementos");

    }else {
        console.log("Possui 3 ou menos que 3 elementos");
    }
}

verificarNumerosArray(nums);
verificarNumerosArray(nums2);