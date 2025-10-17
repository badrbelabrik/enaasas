const prompt = require("prompt-sync")();
const remplirtable = require("./tablefunction");

let tab1 = remplirtable();

function filtrerPairs(tab){
    let pairs = [];
    for (let i=0; i<tab.length; i++){
            if (tab[i] % 2 == 0) {
            pairs.push(tab[i]);
        }
    }
    return pairs;
}

let result = filtrerPairs(tab1);
console.log("Tableau original :", tab1);
console.log(`Nombres pairs : ${result}`);