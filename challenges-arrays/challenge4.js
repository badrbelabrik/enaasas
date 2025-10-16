const prompt = require("prompt-sync")();

let array = [];

for (let i = 0; i < 3; i++) {
  let chaine = prompt(`La chaine ${i + 1} :`);
  array.push(chaine);
}
let rech = prompt("Quelle est la chaine que vous voulez rechercher :");
if (array.includes(rech)) {
  let position = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === rech) {
      position.push(i);
    }
  }
  console.log(
    `La chaine ${rech} est present dans la position ${position.join(", ")}.`
  );
} else {
  console.log(`La chaine ${rech} n est pas dans le tableau.`);
}
