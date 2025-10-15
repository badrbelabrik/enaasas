const prompt = require("prompt-sync")();

let N = Number(prompt("Entrez un nombre :"));

if (isNaN(N)) {
  console.log("Ce n'est pas un nombre valide");
} else if (N % 3 == 0 && N % 5 !== 0) {
  console.log("Fizz");
} else if (N % 5 == 0 && N % 3 !== 0) {
  console.log("Buzz");
} else if (N % 3 == 0 && N % 5 == 0) {
  console.log("FizzBuzz");
} else console.log(`${N}`);
