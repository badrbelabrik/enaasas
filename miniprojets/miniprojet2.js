const prompt = require("prompt-sync")();

function affichetasks() {
  if (taskslist.length <= 0) {
    console.log("Pas encore de taches");
  } else {
    console.log("=== Liste des taches ===");
    taskslist.forEach((task, index) => {
      console.log(
        `${index + 1}). ID: ${task.id}, titre: ${task.titre}, description: ${
          task.description
        }, statut: ${task.statut}`
      );
    });
  }
}

function creertache() {
  let titre = prompt("Entrez le titre du tache:");
  let description = prompt("Entrez une description:");
  let tache = {
    id: taskslist.length + 1,
    titre: titre,
    description: description,
    statut: "initialisé",
  };
  taskslist.push(tache);
  console.log("tache ajoutée avec succes.");
}

function recherchetache() {
  let rechdesc = prompt("Entrez le titre de tache :");
  const rechtask = taskslist.filter(
    (item) => item.titre.toLowerCase() == rechdesc.toLowerCase()
  );
  console.log(rechtask);
}

function modifiertache() {
  let taskid = prompt("Entrez l'id du tache a modifier:");
  let rechtask = taskslist.find((item) => item.id == taskid);
  if (rechtask) {
    let newdesc = prompt("Entrez la nouvelle description:");
    rechtask.description = newdesc;
    console.log("la description a ete modifier");
  } else {
    console.log("tâche non trouvée!!");
  }
}

function supprimertache() {
  let taskid = prompt("Entrez l'id du tache a supprimer:");
  let rechtask = taskslist.findIndex((item) => item.id == taskid);
  if (rechtask !== -1) {
    taskslist.splice(rechtask, 1);
    console.log("La tache a ete supprimée avec succees.");
  } else {
    console.log("tâche non trouvée!!");
  }
}

function marquetache() {
  let taskid = prompt("Entrez l'id du tache a modifier statut:");
  let rechtask = taskslist.find((item) => item.id == taskid);
  if (rechtask) {
    let choice = prompt(
      "Choisi 1 pour marque comme terminée et 2 pour marqué comme en attente:"
    );
    if (choice == 1) {
      rechtask.statut = "Terminée";
      console.log("Tach marquée terminée.");
    } else if (choice == 2) {
      rechtask.statut = "En attente";
      console.log("Tache marquée en attente.");
    }
  } else {
    console.log("tâche non trouvée!!");
  }
}

function affichetache() {
  const tasktrat = taskslist.filter(
    (item) => item.statut == ("Terminée" || "En attente")
  );
  console.log(tasktrat);
}

const taskslist = [];
let reponse;

do {
  console.log("=== TO-DO LIST ===");
  console.log("1. Afficher les tâches");
  console.log("2. Ajouter une tâche");
  console.log("3. Rechercher une tâche");
  console.log("4. Modifier une tâche");
  console.log("5. Supprimer une tâche");
  console.log("6. Marquer une tâche comme terminée/en attente");
  console.log("7. Afficher tâches terminées / en attente");
  console.log("0. Quitter");
  let choix = Number(prompt("Choisissez une option :"));
  console.log("\n");

  switch (choix) {
    case 1:
      affichetasks();
      break;
    case 2:
      creertache();
      break;
    case 3:
      recherchetache();
      break;
    case 4:
      modifiertache();
      break;
    case 5:
      supprimertache();
      break;
    case 6:
      marquetache();
      break;
    case 7:
      affichetache();
      break;
    case 0:
      console.log("Le programme va fermer!");
      break;
    default:
      console.log("Choix invalide!");
  }

  reponse = prompt("Voulez-vous continuer ? (oui/non) : ").toLowerCase();
} while (reponse === "oui");
console.log("Au revoir !");
