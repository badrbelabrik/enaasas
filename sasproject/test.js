const prompt = require("prompt-sync")();

function ajouterlivre() {
  let titre = prompt("Entrez le titre du livre:");
  let auteur = prompt("Entrez l'auteur du livre:");
  let annee = Number(prompt("Entrez une description:"));
  let livre = {
    id: livreslist.length + 1,
    titre: titre,
    auteur: auteur,
    annee: annee,
    statut: "disponible",
  };
  livreslist.push(livre);
  console.log("livre ajoutée avec succes.");
}

function ajouterplusieurslivre() {
  let n = Number(prompt("Combien de livres vous pouvez ajouter:"));
  for (i = 0; i < n; i++) {
    ajouterlivre();
  }
}

function affichelivres() {
  if (livreslist.length <= 0) {
    console.log("Il n'ya aucun livre");
  } else {
    console.log("====== Liste Du Livres ======");
    livreslist.forEach((livre, index) => {
      console.log(
        `${index + 1}). ID: ${livre.id}, titre: ${livre.titre}, auteur ${
          livre.auteur
        }, année de publication: ${livre.annee}, statut: ${livre.statut}`
      );
    });
  }
}

function trierlivrestitre() {
  let answer;
  while (answer !== 0) {
    answer = Number(
      prompt(
        `Entrez "1" pour trier en ascendant et "2" pour trier en descendant et "0" pour retour :`
      )
    );
    if (answer == 1) {
      const livresorttitre = [...livreslist].sort((a, b) =>
        a.titre.localeCompare(b.titre)
      );
      console.log(livresorttitre);
    } else if (answer == 2) {
      const livresorttitre = [...livreslist].sort((a, b) =>
        b.titre.localeCompare(a.titre)
      );
      console.log(livresorttitre);
    } else {
      console.log("Choix invalide");
    }
  }
}

function trierlivresannee() {
  const livresortannee = [...livreslist].sort((a, b) => a - b);
  console.log(livresortannee);
}

function affichelivresdispo() {
  if (livreslist.length <= 0) {
    console.log("Il n'ya aucun livre");
  } else {
    const livresdispo = livreslist.filter(
      (item) => item.statut == "disponible"
    );
    console.log("====== Liste Du Livres Disponible ======");
    livresdispo.forEach((livre, index) => {
      console.log(
        `${index + 1}). ID: ${livre.id}, titre: ${livre.titre}, auteur ${
          livre.auteur
        }, année de publication: ${livre.annee}, statut: ${livre.statut}`
      );
    });
  }
}

function rechlivreparid() {
  let rechlivreid = Number(prompt("Entrez l'ID' du livre :"));
  const rechlivre = livreslist.filter((item) => item.id == rechlivreid);
  console.log(rechlivre);
}

function ajouterabonnes() {
  let nom = prompt("Entrez le nom d'abonné");
  let prenom = prompt("Entrez le prenom d'abonné");
  let email = prompt("Entrez l'email d'abonné");
  let abonne = {
    id: abonneslist.length + 1,
    nom: nom,
    prenom: prenom,
    email: email,
  };
  abonneslist.push(abonne);
  console.log("Abonné ajouté avec succes.");
}

function afficheabonnes() {
  if (abonneslist.length <= 0) {
    console.log("Il n'ya aucun abonné");
  } else {
    abonneslist.forEach((abonne, index) => {
      console.log(
        `${index + 1}). ID: ${abonne.id}, nom: ${abonne.nom}, prenom ${
          abonne.prenom
        }, email: ${abonne.email}`
      );
    });
  }
}

function ajoutemprunt() {
  let abonne = prompt("Entrez id d'abonné :");
  let livre = prompt("Entrez id du livre :");
  let livretrouve = livreslist.find((item) => item.id == livre);
  if (!livretrouve) {
    console.log("livre introuvable!");
  } else if (livretrouve.statut == "disponible") {
    console.log("Ce livre est déjà emprunté !");
  } else {
    let emprunt = {
      id: empruntslist + 1,
      id_dabonne: abonne,
      id_livre: livre,
      dateEmprunt: "2025-09-22",
    };
    livretrouve.statut = "non disponible";
  }
}

function ajoutretour() {
  let idemprunt = prompt("Entrez id d'emprunt :");
  let rechemprunt = emprunts.find((item) => item.id == taskid);
}

function afficheemprunts() {}

function submenu1() {
  let operation;
  while (operation !== 0) {
    console.log("=== Opérations sur les livres ===");
    console.log("1. Afficher tous les livres");
    console.log("2. Trier les livres par titre (ascendant/descendant)");
    console.log("3. Trier les livres par année de publication");
    console.log("4. Afficher uniquement les livres disponibles");
    console.log("5. Rechercher un livre par ID");
    console.log("0. Retour");
    operation = Number(prompt("Choisi une option :"));
    switch (operation) {
      case 1:
        affichelivres();
        break;
      case 2:
        trierlivrestitre();
        break;
      case 3:
        trierlivresannee();
        break;
      case 4:
        affichelivresdispo();
        break;
      case 5:
        rechlivreparid();
        break;
      default:
        console.log("Choix invalide");
    }
  }
}

function submenu2() {
  let operation;
  while (operation !== 0) {
    console.log("=== Gestion Des Abonnés ===");
    console.log("1. Ajouter un abonné");
    console.log("2. Afficher tous les abonnés");
    console.log("0. Retour");
    operation = Number(prompt("Choisi une option :"));
    switch (operation) {
      case 1:
        ajouterabonnes();
        break;
      case 2:
        afficheabonnes();
        break;
      default:
        console.log("Choix invalide");
    }
  }
}

function submenu3() {
  let operation;
  while (operation !== 0) {
    console.log("=== Gestion Des Emprunts===");
    console.log("1. Enregistrer un emprunt");
    console.log("2. Enregistrer un retour");
    console.log("2. Afficher les livres empruntés par un abonné");
    console.log("0. Retour");
    operation = Number(prompt("Choisi une option :"));
    switch (operation) {
      case 1:
        ajoutemprunt();
        break;
      case 2:
        trierlivrestitre();
        break;
      default:
        console.log("Choix invalide");
    }
  }
}
const livreslist = [
  {
    id: 1,
    titre: "livre1",
    auteur: "badr",
    annee: 1992,
    statut: "disponible",
  },
  {
    id: 2,
    titre: "livre2",
    auteur: "badr",
    annee: 2015,
    statut: "disponible",
  },
  {
    id: 3,
    titre: "livre3",
    auteur: "badr",
    annee: 2008,
    statut: "indisponible",
  },
];
const abonneslist = [];
const empruntslist = [];
let reponse;
let option;
while (option !== 0) {
  console.log("=== GESTION DU BIBLIOTHEQUE ===");
  console.log("1. Introduire un livre");
  console.log("2. Ajouter plusieurs livres");
  console.log("3. Opérations sur les livres");
  console.log("4. Gestion des abonnés");
  console.log("5. Gestion des emprunts");
  console.log("0. Quitter");
  option = Number(prompt("Choisi une option :"));
  console.log("\n");

  switch (option) {
    case 1:
      ajouterlivre();
      break;
    case 2:
      ajouterplusieurslivre();
      break;
    case 3:
      submenu1();
      break;
    case 4:
      submenu2();
      break;
    case 5:
      submenu3();
      break;
    case 0:
      break;
    default:
      console.log("Choix invalide");
  }
}
