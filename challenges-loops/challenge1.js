const prompt = require("prompt-sync")();

let N = Number(prompt("Entrez un nombre :"));

for (let i = 0; i <= 10; i++) {
  let multi = N * i;
  console.log(`${N}*${i} = ${multi}`);
}
