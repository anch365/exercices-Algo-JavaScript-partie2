// alert("Hello world!");
// let message = "vive la vie";
// alert(35);

// let message = prompt("How are you ?");
// // alert(message);
// console.log(message);

// EXERCICE 1: afficher une boite de dialogue
let sms = "Time's money";
alert(sms);

// EXERCIE 2: Définir 3 variables
let lastName = "Abdou";

let firstName = "Fatima";

let city = "Montbéliard";
alert(`
  Nom: ${lastName} \n 
  Prenom: ${firstName} \n 
  Ville: ${city} 
    `);

// Exercie 3: Afficher une boîte de dialogue
let saisie = prompt("Quel est votre prénom ?");
alert("Bonjour " + saisie);

// Exercie 4: Refaire l'exercice 2
let lastNom = prompt("Nom");
let firstNom = prompt("Prénom");
let cVille = prompt("Ville");

// Exercice 5: Deux nombres à virgule
let nbr1 = prompt("Entrez le premier nombre à virgule");
let nbr2 = prompt("Entrez le deuxième nombre à virgule");
let entier = parseInt(nbr1);

let note = entier * nbr2;
alert(note);