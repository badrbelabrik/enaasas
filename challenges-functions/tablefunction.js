const prompt = require("prompt-sync")();

function remplirtable() {
  let tab = [];
  let Nelement = prompt("Combien delement tu veux dans le tableau :");

  for (let i = 0; i < Nelement; i++) {
    let N = Number(prompt(`Entrez le nombre ${i + 1}:`));
    tab.push(N);
  }
  return tab;
}


module.exports = remplirtable;
