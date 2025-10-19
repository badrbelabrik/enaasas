const prompt = require("prompt-sync")();

let mots;
let longeur;

function remplirtable() {
  let tab = [];
  let Nelement = prompt("Combien delement tu veux dans le tableau :");

  for (let i = 0; i < Nelement; i++) {
    let mot = (prompt(`Entrez le mot ${i + 1}:`));
    tab.push(mot);
  }
  return tab;
}

mots = remplirtable();
console.log(mots);

function motsLongs(tab) {
  let tabMots=[];
  let longueur = prompt("Entrez la longueur :");
  for (let i=0; i<tab.length; i++){
    let text = tab[i];
    let textlength = text.length; 
    if (textlength>=longueur){
        tabMots.push(tab[i]);
      }
  }
  return tabMots;
}

tabmots1 = motsLongs(mots);
console.log(tabmots1);