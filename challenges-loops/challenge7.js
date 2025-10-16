const prompt = require("prompt-sync")();

let sum = 0;
let i = 0;
while (i <= 9) {
  let N = Number(prompt(`Entrez le nombre ${i + 1}:`));
  if (N > 0) {
    sum += N;
  } else if (N < 0) {
    console.log("Nombre entrée negative il est ignorée!");
  }
  i++;
}
console.log(`La somme des nombres entree est : ${sum}`);
