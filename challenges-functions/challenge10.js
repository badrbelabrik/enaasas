const prompt = require("prompt-sync")();
const remplirtable = require("./tablefunction");

let tab1 = remplirtable();

function trouverdoublons(tab) {
  let doublons = [];
  for (let i = 0; i < tab.length; i++) {
    for (let j = i + 1; j < tab.length; j++) {
      if (tab[i] === tab[j] && !doublons.includes(tab[i])) {
        doublons.push(tab[i]);
      }
    }
  }
  return doublons;
}

function supprimerdoublons(tab) {
  let seen = [];
  for (i = 0; i < tab1.length; i++) {
    if (seen.includes(tab1[i])) {
      tab.splice(i, 1);
      i--;
    } else {
      seen.push(tab[i]);
    }
  }
}

let doublons = trouverdoublons(tab1);
console.log(`Doublons trouvée: ${doublons}`);

supprimerdoublons(tab1);
console.log("Tableau apres suppression des doublons:", tab1);
