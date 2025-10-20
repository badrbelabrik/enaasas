const prompt = require("prompt-sync")();
const remplirtable = require("./tablefunction");

let nombres = [];

let element = Number(prompt("Combien delement tu veux dans le tableau :"));

for (let i = 0; i < element; i++) {
  let N = Number(prompt(`Entrez le nombre ${i + 1}:`));
  nombres.push(N);
}

let result2 = nombres.reverse();
console.log(result2);

function inverserTableau(tab) {
  let inverse = [];
  for (let i = tab.length - 1; i >= 0; i--) {
    inverse.push(tab[i]);
  }
  return inverse;
}
let result = inverserTableau(nombres);
console.log(`${result}`);


