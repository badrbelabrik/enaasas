const prompt = require("prompt-sync")();
const remplirtable = require("./tablefunction");

let tab1 = remplirtable();

function produitTableau(tab){
    let multi = 1; 
    for (let i=0; i<tab.length; i++){
        multi = multi * tab[i];
    }
    return multi;
}
let result = produitTableau(tab1);
console.log (`Le resultat de multiplication du tableau 1 est: ${result}`)