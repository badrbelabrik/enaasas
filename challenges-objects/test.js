const prompt = require("prompt-sync")();

const livres = [
  { titre: "livre1", auteur: "auteur1", annee: 2001 },
  { titre: "livre2", auteur: "auteur2", annee: 2002 },
  { titre: "livre3", auteur: "auteur3", annee: 2003 },
  {},
];
function trouverlivre() {
  let element = prompt("entrez l'element qui vous cherchez:");
  return livres.find((livres) => livres.titre === element);
}

console.log(trouverlivre(livres));
