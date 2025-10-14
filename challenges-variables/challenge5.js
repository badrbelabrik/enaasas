const prompt = require("prompt-sync")();

let A = Number(prompt("Entrez la premiere valeur :"));
let B = Number(prompt("Entrez la deuxieme valeur :"));
let C = Number(prompt("Entrez la troisieme valeur :"));
let D = Number(prompt("Entrez la quatrieme valeur :"));

let somme = A + B + C + D;
let moyenne = somme / 4;

console.log(`La somme est : ${A} + ${B} + ${C} + ${D} = ${somme}`);
console.log(`La moyenne est : ${moyenne}`);
