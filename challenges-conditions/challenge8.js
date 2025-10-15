const prompt = require("prompt-sync")();

let input = prompt("Entrez un couleur :");

switch (input) {
  case "rouge":
    console.log("Arret!");
    break;

  case "jaune":
    console.log("Préparez-vous");
    break;

  case "vert":
    console.log("Allez");
    break;

  default:
    console.log("Couleur invalide!!!");
}
