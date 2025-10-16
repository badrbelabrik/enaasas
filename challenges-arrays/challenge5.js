const prompt = require("prompt-sync")();

let nombres = [];

for (let i = 0; i < 8; i++) {
  let N = Number(prompt(`Entrez le nombre ${i + 1}:`));
  nombres.push(N);
}
let min = nombres[0];
let max = nombres[0];

for (let i = 1; i < nombres.length; i++) {
  if (nombres[i] < min) {
    min = nombres[i];
  }
  if (nombres[i] > max) {
    max = nombres[i];
  }
}
console.log(`Le nombre minimum du tableau est : ${min}`);
console.log(`Le nombre maximum du tableau est : ${max}`);
