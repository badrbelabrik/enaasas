const prompt = require("prompt-sync")();

let A = Number(prompt("Entrez la valeur de A : "));
let B = Number(prompt("Entrez la valeur de B : "));

let somme = A + B;
let soustraction = A - B;
let multiplication = A * B;
let division = A / B;
let modulus = A % B;

console.log("a + b =", somme);
console.log("a - b =", soustraction);
console.log("a * b =", multiplication);
console.log("a / b =", division);
console.log("a % b =", modulus);
