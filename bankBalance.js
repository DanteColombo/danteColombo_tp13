let operaciones=[500,5500,-10000,-5000];

function calculateBalances(array) {
    const positivo = array.reduce((inicio, plata) => plata > 0 ? inicio + plata : inicio, 0);
    const negativo = array.reduce((inicio, plata) => plata < 0 ? inicio + plata : inicio, 0);
    const total = array.reduce((inicio, plata) => inicio + plata, 0);
    return {positivo,negativo,total};
}

function bankBalance(nombre,apellido,array) {
    let operación= calculateBalances(array);
    return (`Estimad@ ${nombre} ${apellido}:
El monto total de los depósitos es de: $${operación.positivo}
El monto total de los retiros es de: $${operación.negativo} 
Por lo tanto, su saldo actual en la cuenta es de: $${operación.total}`);
}

// console.log(bankBalance("Gloria","Medina",operaciones));

module.exports = bankBalance