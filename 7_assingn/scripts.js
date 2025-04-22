let carro = {
    ano: 2019,
    fabricante: 'chevrolet',
    cor: 'cinza chumbo',
    motor: '2.0'
}




let adicionais = {
    arcondicionado: true,
    automatico: true,
    completo: true 
};

console.log(carro);

Object.assign(carro, adicionais);

console.log(carro);


// Object.assing copia as propriedades do nosso objeto para o principal