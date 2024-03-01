function eurosADolares(euros, tipoCambio) {
    return euros * tipoCambio;
}

const euros = 50; // Cantidad de euros a convertir
const tipoCambio = 1.13; // Tipo de cambio actual (1 euro = 1.13 dólares)

const dolares = eurosADolares(euros, tipoCambio);
console.log(`${euros} euros son aproximadamente ${dolares.toFixed(2)} dólares.`);