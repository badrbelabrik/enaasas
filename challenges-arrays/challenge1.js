const prompt = require("prompt-sync")();

let nombres = [];
let inverse = [];

for (let i = 0; i < 5; i++) {
  let N = Number(prompt(`Entrez le nombre ${i + 1}:`));
  nombres.push(Number(N));
}
for (let i = nombres.length - 1; i >= 0; i--) {
  inverse.push(nombres[i]);
}
console.log(inverse);
