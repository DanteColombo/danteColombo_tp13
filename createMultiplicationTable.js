function createMultiplicationTable() {
    for (let i = 1; i < 11; i++) {
        console.log(`
Tabla de multiplicar x${i}
-------------------`);
        for (let j = 1; j < 11; j++) {
            console.log(`${i} * ${j} = ${i*j}`);
            }
    }
}

createMultiplicationTable();
