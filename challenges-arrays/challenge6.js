const prompt = require("prompt-sync")();

let nombres = [];
let element = Number(prompt("Combien delement tu veux dans le tableau :"));

for (let i = 0; i < element; i++) {
  let N = Number(prompt(`Entrez le nombre ${i + 1}:`));
  nombres.push(N);
}
for (let i = 0; i < nombres.length; i++) {
  let result = nombres[i];
  result = nombres[i] * nombres[i];
  console.log(`${result}`);
}
