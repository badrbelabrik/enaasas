const prompt = require("prompt-sync")();

const N = Number(prompt("Entrez un nombre :"));

for (let number = 2; number <= N; number++) {
  let prime = true;
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      prime = false;
      break;
    }
  }
  if (prime) {
    console.log(number);
  }
}
