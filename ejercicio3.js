const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un número: ', (numero) => {
    const cuadrado = parseFloat(numero) ** 2;
    console.log(`El número ${numero} elevado al cuadrado es: ${cuadrado}`);
    rl.close();
});