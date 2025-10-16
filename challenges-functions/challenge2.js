const prompt = require("prompt-sync")();
let nombres = [];
let element = Number(prompt("Combien delement tu veux dans le tableau :"));

for (let i = 0; i < element; i++) {
  let N = Number(prompt(`Entrez le nombre ${i + 1}:`));
  nombres.push(N);
}
function maxtable(tab) {
  let max = nombres[0];
  for (let i = 1; i < tab.length; i++) {
    if (tab[i] > max) {
      max = tab[i];
    }
  }
  return max;
}
let result = maxtable(nombres);
console.log(`le maximum dans le tableau est : ${result}`);
