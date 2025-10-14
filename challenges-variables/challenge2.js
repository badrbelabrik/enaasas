const prompt = require("prompt-sync")();

let celsius = prompt("Entrez la temperature en celsius:");

let fahrenheit = celsius * 1.8 + 32;

console.log(celsius + " °c = " + fahrenheit + " °f ");
