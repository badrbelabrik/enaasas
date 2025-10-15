const prompt = require("prompt-sync")();

let N = Number(prompt("Entrez un nombre :"));

if (!Number.isInteger(N) || N < 2) {
  console.log("Le nombre n'est pas premier");
} else {
  let prime = true;

  for (let i = 2; i < N; i++) {
    if (N % i == 0) {
      prime = false;
      break;
    }
  }
  if (prime) {
    console.log(`Le nombre ${N} est premier`);
  } else {
    console.log(`Le nombre ${N} n'est pas premier`);
  }
}
