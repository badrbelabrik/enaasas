const prompt = require("prompt-sync")();

function askforinput() {
  const a = Number(prompt("Entrez le premier nombre :"));
  const b = Number(prompt("Entrez le deuxieme nombre :"));
  return [a, b];
}

function addition() {
  const [a, b] = askforinput();
  let resultadd = a + b;
  return {a,b,resultadd};
}

function soustraction() {
  const [a, b] = askforinput();
  let resultsous = a - b;
  return {a,b,resultsous};
}

function multiplication() {
  const [a, b] = askforinput();
  let resultmulti = a * b;
  return {resultmulti,a,b};
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
  return {resultdiv,a,b};
}

function puissance() {
  let a;
  let b;
  do {
    a = Number(prompt("Entrez un nombre :"));
    b = Number(prompt("Entrez l'exposant :"));
    if (a <= 0 || b < 0) {
      console.log("La base doit être > 0 et l'b ≥ 0");
    }
  } while (a <= 0 || b < 0);

  let puissanceresult = 1;
  let count = 0;

  while (count < b) {
    puissanceresult *= a;
    count++;
  }
  return {puissanceresult,a,b};
}

function racinecarree() {
  let a;
  do {
    a = Number(prompt("Entrez un nombre :"));
    if (a < 0) {
      console.log("Erreur : le nombre doit être ≥ 0 pour une racine carrée.!");
    }
  } while (a < 0);
  const racinresult = Math.sqrt(a);
  return {racinresult,a};
}

function factorielle() {
  let a;
  do {
    a = Number(prompt("Entrez un nombre :"));
    if (a < 0) {
      console.log(
        "Erreur : le nombre doit être >0 pour calculer le factorielle.!"
      );
    }
  } while (a < 0);
  let factresult = 1;
  for (let i = 1; i <= a; i++) {
    factresult *= i;
  }
  return {factresult,a};
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
  let a, b;
  switch (operation) {
    case 1:
      ({ a, b, resultadd : result} = addition());
      console.log(`le resultats est :${a} + ${b} = ${result}`);
      break;
    case 2:
      ({a, b, resultsous : result} = soustraction());
      console.log(`le resultats est :${a} - ${b} = ${result}`);
      break;
    case 3:
      ({a, b, resultmulti : result} = multiplication());
      console.log(`le resultats est :${a} * ${b} = ${result}`);
      break;
    case 4:
      ({a, b, resultdiv : result} = division());
      console.log(`le resultats est :${a} * ${b} = ${result}`);
      break;
    case 5:
      ({a, b, puissanceresult : result} = puissance());
      console.log(`le resultats est :${a} ^ ${b} = ${result}`);
      break;
    case 6:
      ({a, racinresult : result} = racinecarree());
      console.log(`le resultats est :√${a} = ${result}`);
      break;
    case 7:
      ({a, factresult : result} = factorielle());
      console.log(`le resultats est :!${a}  = ${result}`);
      break;
    case 8:
      if (historique.length === 0) {
        console.log("L'historique est vide.");
      } else {
        console.log("=== Historique des résultats ===");
        historique.forEach((res, index) => {
          console.log(`${index + 1}). ${res.toFixed(2)}`);
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
