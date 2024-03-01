const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el primer número: ', (num1) => {
    rl.question('Ingrese el segundo número: ', (num2) => {
        rl.question('Ingrese el tercer número: ', (num3) => {
            const promedio = (parseFloat(num1) + parseFloat(num2) + parseFloat(num3)) / 3;
            console.log(`El promedio de los tres números es: ${promedio.toFixed(2)}`);
            rl.close();
        });
    });
});