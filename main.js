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

// Exercie 7: Fonction qui fait beaucoup de claculs

// function additionner(nombre1, nombre2){
//    return nombre1+nombre2;
//  }

// let resultat = additionner(5, 9);

// console.log(resultat);

let pointure = prompt("Quelle est votre pointure ?");
let annéeNaissance = prompt("Quelle est votre année de naissance ?");

let resultat = pointure;
 resultat = resultat * 2;
 resultat = resultat + 5;
 resultat = resultat * 50;
 resultat = resultat - annéeNaissance;
 resultat = resultat + 1770;
 alert(resultat);

// Exercice 8: Saisir son âge
let age = prompt("Quel est ton âge ?");
if (age >= 18) {
    alert("Vous êtes majeur")
} else {
    alert("Vous êtes mineur")
};

// Exercice 9: Afficher la table de multiplication du nombre saisi
let chiffre = parseInt(prompt("Saisissez un nombre"));
let tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let message ="";

tableau.forEach(nombre => {
    message += `${chiffre} x ${nombre}  = ${nombre * chiffre};"\n"`  
});

alert(message);

// Exercice 10 : Affichage du mot de l'utilisateur
let word = prompt("Saisissez un mot");
let printable = "";

for (const letter of word) {
    printable += letter + "\n" 
}
alert(printable);

// Exercice 11: Afficher une boîte de dialogue
let nombre = -1;

while (nombre <= 0 || nombre >= 10) {
    nombre = prompt("Saisissez un nombre compris entre 1 et 10");
}

 if (nombre <= 5) {
    alert("Le nombre saisi est inférieur à 5")};

if (nombre == 5) {
    alert("Le nombre saisi est égal à 5")
};

if (nombre >= 5) {
    alert("Le nombre saisi est supérieur à 5")
};
