const prompt = require("prompt-sync")();
const remplirtable = require("./tablefunction");

let tab1 = remplirtable();

function doubler(tab){
    let doublertab = [];
    for (let i=0; i < tab.length; i++){
        doublertab.push(tab[i]*2);
    }
    return doublertab;
}
let result = doubler(tab1);
console.log(result);
