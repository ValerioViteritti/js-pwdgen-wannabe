/*
Chiedi all’utente il suo nome, 
poi chiedi il suo cognome, 
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23
*/

// Chiedi all’utente il suo nome

let nameUser = prompt("Inserisci il tuo nome");
let SurnameUser = prompt("Inserisci il tuo cognome");
let ColorUser = prompt("Inserisci il tuo colore preferito");

let passGenerator = nameUser + SurnameUser + ColorUser + "23";

console.log("La tua password generata è " + passGenerator);

document.getElementById("PassGenerator").innerHTML = "La tua password generata è " + passGenerator;