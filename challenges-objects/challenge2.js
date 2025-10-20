const prompt = require("prompt-sync")();

/*const etudiant = {
  nom: "",
  age: 0,
  sepresenter: function () {
    return (
      "Bonjour, je m’appelle " + this.nom + " et j’ai " + this.age + " ans"
    );
  },
};

etudiant.nom = "badr";
etudiant.age = 27;

console.log(etudiant.sepresenter());
const personne = { nom: "jhgd", age: 23 };

for (let x in personne) {
  text += personne[x] + " ";
}
//console.log(text);
//
for (let x in livres) {
  text += livres[x].titre + " ";
}
console.log(text); */
let text = "";
const livres = [
  { titre: "livre1", auteur: "auteur1", annee: 2001 },
  { titre: "livre2", auteur: "auteur2", annee: 2002 },
  { titre: "livre3", auteur: "auteur3", annee: 2003 },
];

livres.forEach((livre) => console.log(livre.titre));
let text1 = "";
for (i = 0; i < livres.length; i++) {
  text1 = livres[i].titre + " ";
  console.log(text1);
}
// trouver livre
function trouverlivre() {
  let element = prompt("entrez l'element qui vous cherchez:");
  return livres.find((livres) => livres.titre === element);
}
console.log(trouverlivre(livres));
