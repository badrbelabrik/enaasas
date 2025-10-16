const prompt = require("prompt-sync")();

let nombres = [];

for (let i = 0; i < 8; i++) {
  let N = Number(prompt(`Entrez le nombre ${i + 1}:`));
  nombres.push(N);
}
let rech = Number(prompt("Quelle est le nombre que vous voulez rechercher :"));
if (nombres.includes(rech)) {
  let position = [];
  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === rech) {
      position.push(i);
    }
  }
  console.log(
    `Le nombre ${rech} est present dans la position ${position.join(", ")}.`
  );
} else {
  console.log(`Le nombre ${rech} n est pas dans le tableau.`);
}
