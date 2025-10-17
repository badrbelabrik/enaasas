const prompt = require("prompt-sync")();
const remplirtable = require("./tablefunction");

let tab1 = remplirtable();

function moyenne(tab){
    let sum = 0;
    let moy = 0;
    for (let i=0; i<tab.length; i++){
        sum += tab[i];
    }
    moy = sum / tab.length;
    return moy;
}
let result = moyenne(tab1);
console.log(`la moyenne des valeurs du tableau1 est: ${result}`);