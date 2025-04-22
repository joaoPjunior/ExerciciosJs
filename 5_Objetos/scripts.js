let carroAluguel = {
    marca:'Gol',
    ano: 2018,
    cor: 'Cinza',

    alugado: function(){
        console.log('restrição no nome');
    }
};

console.log(carroAluguel.marca);
console.log(carroAluguel.ano);
console.log(carroAluguel.cor);
carroAluguel.alugado();
//[] = array
//[] = obj