const prompt = require("prompt-sync")();

let A = prompt("Entrez la valeur de A :");
let B = prompt("Entrez la valeur de B :");
let C = prompt("Entrez la valeur de C :");

let temp = A;
A = B;
B = C;
C = temp;

console.log("A = ", A);
console.log("B = ", B);
console.log("C = ", C);
