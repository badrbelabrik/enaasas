const prompt = require("prompt-sync")();
const remplirtable = require("./tablefunction");

let tab1 = remplirtable();
let tab2 = remplirtable();

function fusionner(tab1, tab2) {
  let fusion = [];
  for (i = 0; i < tab1.length; i++) {
    fusion.push(tab1[i]);
  }
  for (i = 0; i < tab2.length; i++) {
    fusion.push(tab2[i]);
  }
  return fusion;
}
let result = fusionner(tab1, tab2);
console.log(result);
