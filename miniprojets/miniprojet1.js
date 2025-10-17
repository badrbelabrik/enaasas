const prompt = require("prompt-sync")();

function askforinput() {
  const a = Number(prompt("Entrez le premier nombre :"));
  const b = Number(prompt("Entrez le deuxieme nombre :"));
  return [a, b];
}

function addition() {
  const [a, b] = askforinput();
  let resultadd = a + b;
  return resultadd;
}

function soustraction() {
  const [a, b] = askforinput();
  let resultsous = a - b;
  return resultsous;
}

function multiplication() {
  const [a, b] = askforinput();
  let resultmulti = a * b;
  return resultmulti.toFixed(2);
}

function division() {
  let a, b;
  do {
    [a, b] = askforinput();
    if (b === 0) {
      console.log("Erreur : division par zéro ! Veuillez réessayer.");
    }
  } while (b === 0);
  let resultdiv = a / b;
  return resultdiv.toFixed(2);
}

function puissance() {
  let N;
  let exposant;
  do {
    N = Number(prompt("Entrez un nombre :"));
    exposant = Number(prompt("Entrez l'exposant :"));
    if (N <= 0 || exposant < 0) {
      console.log("La base doit être > 0 et l'exposant ≥ 0");
    }
  } while (N <= 0 || exposant < 0);

  let puissanceresult = 1;
  let count = 0;

  while (count < exposant) {
    puissanceresult *= N;
    count++;
  }
  return puissanceresult.toFixed(2);
}

function racinecarree() {
  let N;
  do {
    N = Number(prompt("Entrez un nombre :"));
    if (N < 0) {
      console.log("Erreur : le nombre doit être ≥ 0 pour une racine carrée.!");
    }
  } while (N < 0);
  const racinresult = Math.sqrt(N);
  return racinresult.toFixed(2);
}

function factorielle() {
  let N;
  do {
    N = Number(prompt("Entrez un nombre :"));
    if (N < 0) {
      console.log(
        "Erreur : le nombre doit être >0 pour calculer le factorielle.!"
      );
    }
  } while (N < 0);
  let fact = 1;
  for (let i = 1; i <= N; i++) {
    fact *= i;
  }
  return fact.toFixed(2);
}

let operation;
let continuer = true;
let historique = [];

while (continuer) {
  console.log("=== Menu CALCULATRICE ===");
  console.log("1. Addition (+)");
  console.log("2. Soustraction (-)");
  console.log("3. Multiplication (*)");
  console.log("4. Division (/)");
  console.log("5. Puissance");
  console.log("6. Racine carrée");
  console.log("7. Factorielle");
  console.log("8. Afficher l’historique");
  console.log("0. Pour quitter");
  let operation = Number(prompt("Tappez le numero de votre operation :"));
  console.log("\n");

  let result;
  switch (operation) {
    case 1:
      result = addition();
      console.log(`le resultats est :${result}`);
      break;
    case 2:
      result = soustraction();
      console.log(`le resultats est :${result}`);
      break;
    case 3:
      result = multiplication();
      console.log(`le resultats est :${result}`);
      break;
    case 4:
      result = division();
      console.log(`le resultats est :${result}`);
      break;
    case 5:
      result = puissance();
      console.log(`le resultats est :${result}`);
      break;
    case 6:
      result = racinecarree();
      console.log(`le resultats est :${result}`);
      break;
    case 7:
      result = factorielle();
      console.log(`le resultats est :${result}`);
      break;
    case 8:
      if (historique.length === 0) {
        console.log("L'historique est vide.");
      } else {
        console.log("=== Historique des résultats ===");
        historique.forEach((res, index) => {
          console.log(`${index + 1}. ${res}`);
        });
      }
      break;
    case 0:
      console.log("vous êtes sur le point de sortir!");
      break;
    default:
      console.log("Choix invalide !");
  }
  console.log("\n");
  if (!isNaN(result)) {
    historique.push(result);
  }

  let reponse = prompt("Voulez-vous continuer ? (oui/non) : ").toLowerCase();
  if (reponse !== "oui") {
    continuer = false;
    console.log("Au revoir !");
  }
}
