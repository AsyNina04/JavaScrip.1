const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el radio de la circunferencia: ', (radio) => {
    const radioFloat = parseFloat(radio);
    const longitudCircunferencia = 2 * Math.PI * radioFloat;
    const areaCirculoInscrito = Math.PI * Math.pow(radioFloat, 2);

    console.log(`La longitud de la circunferencia es: ${longitudCircunferencia.toFixed(2)}`);
    console.log(`El área del círculo inscrito es: ${areaCirculoInscrito.toFixed(2)}`);

    rl.close();
});