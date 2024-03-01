const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el radio del cilindro: ', (radio) => {
    rl.question('Ingrese la altura del cilindro: ', (altura) => {
        const radioFloat = parseFloat(radio);
        const alturaFloat = parseFloat(altura);

        const areaLateral = 2 * Math.PI * radioFloat * alturaFloat;
        const areaTotal = 2 * Math.PI * radioFloat * (radioFloat + alturaFloat);
        const volumen = Math.PI * Math.pow(radioFloat, 2) * alturaFloat;

        console.log(`El área lateral del cilindro es: ${areaLateral.toFixed(2)}`);
        console.log(`El área total del cilindro es: ${areaTotal.toFixed(2)}`);
        console.log(`El volumen del cilindro es: ${volumen.toFixed(2)}`);

        rl.close();
    });
});