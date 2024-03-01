const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el lado del cuadrado: ', (lado) => {
    const ladoFloat = parseFloat(lado);
    const area = ladoFloat * ladoFloat;
    const perimetro = 4 * ladoFloat;
    console.log(`El área del cuadrado es: ${area}`);
    console.log(`El perímetro del cuadrado es: ${perimetro}`);
    rl.close();
});