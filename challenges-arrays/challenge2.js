const prompt = require("prompt-sync")();

let nombres = [];
let sum = 0;
let moy = 0;

for (i = 0; i < 10; i++) {
  let N = Number(prompt(`Entrez le nombre ${i + 1}:`));
  nombres.push(Number(N));
  sum += N;
}
moy = sum / nombres.length;

console.log(`La somme est : ${sum}`);
console.log(`La moyenne est : ${moy}`);
