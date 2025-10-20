const prompt = require("prompt-sync")();
//1
/*
const entreprise = {
  rue: "rue45",
  ville: "beni mellal",
  codepostale: 42355,
};
console.log(entreprise.ville);

//2

const employees = [
  { nom: "employee 1", salaire: 450, quantite: 12 },
  { nom: "employee 2", salaire: 1300, quantite: 6 },
  { nom: "employee 3", salaire: 170, quantite: 23 },
];
let result;
for (let x in employees) {
  result = employees[x].salaire * employees[x].quantite;
  console.log(`valeur total du employee${employees[x].nom}: ${result}`);
} 

//3

const animal = {
  nom: "maxx",
  type: "malinois",
  parler: function () {
    return this.nom + " est'un " + this.type + " parle ";
  },
};

console.log(animal.parler());*/

//4

const employees = [
  { nom: "employee 1", salaire: 4500 },
  { nom: "employee 2", salaire: 3000 },
  { nom: "employee 3", salaire: 2500 },
];
/*
let emp;
function trouveremployees() {
  let element = 3500;
  const emp = employees.filter((item) => item.salaire <= element);
  return emp;
}
console.log(trouveremployees()); */

//5
const entreprise = {
  rue: "rue45",
  ville: "beni mellal",
  codepostale: 42355,
};
/*let newclone = {};
function cloner(obj,clone){
  for(i=0; i<obj.length; i++){
    clone[i] = obj[i] ;
  }
  return clone;
}
*/
const another = {...employees};

console.log(another);

