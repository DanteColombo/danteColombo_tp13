function showNumbers(num1) {
    for (let i = num1+1; i < 11; i++) {
        console.log(i);
    }
}
function printEveryThree() {
    for (let i = 1; i < 57; i+=3) {
        console.log(i);
    }
}
function totalSummation() {
    let cont=0
    for (let i = 0; i < 101; i++) {
        cont+=i 
    }
    return console.log(cont);
}
function showToUpperCase(texto) {
    let palabra=[]
    for (let i = 0; i < texto.length; i++) {
        palabra.push(texto[i].toUpperCase());
    }
    return palabra;
}
function returnPairs(lista) {
    let arrayPares=[]
    for (let i = 0; i < lista.length; i++) {
        if (lista[i]%2==0){
            arrayPares.push(lista[i])
        }
    }
    return arrayPares
}
// showNumbers(0);
// printEveryThree();
// totalSummation();
// console.log(showToUpperCase("Practicando el uso de los ciclos o bucles"));
// console.log(returnPairs([0,1,2,3,4,5,6,7,8,9,10]));

module.exports = {
    showNumbers,
    printEveryThree,
    totalSummation,
    showToUpperCase,
    returnPairs
    }



