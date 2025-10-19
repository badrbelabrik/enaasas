const prompt = require("prompt-sync")();

let tab2 = [];
let nombre;
function tableMultiplication(tab, n){
    
    n = Number(prompt("Entrez le nombre :"));
    for (let i=1; i<=10; i++){
        let multi = n * i;
        tab.push([multi]);
    }
    return {tab, n};
}

let result = tableMultiplication(tab2, nombre);
console.log(`Table de multiplication de ${result.n} :`);

for(i=1; i<result.tab.length; i++){
    console.log(`${result.n} x ${i + 1} = ${result.tab[i]}`);
}