const prompt = require("prompt-sync")();

let year = Number(prompt("Entrez une année :"));

if (isNaN(year)) {
  console.log("Ce n'est pas un nombre valide");
} else if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
  console.log(`${year} est une année bissextile `);
} else {
  console.log(`${year} n'est pas une année bissextile`);
}
