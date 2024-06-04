/*
Chiedi all’utente il suo nome, 
poi chiedi il suo cognome, 
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23
*/

// Chiedi all’utente il suo nome

let nameUser = prompt("Inserisci il tuo nome");

// chiedi il suo cognome
let SurnameUser = prompt("Inserisci il tuo cognome");

// chiedi il suo colore preferito
let ColorUser = prompt("Inserisci il tuo colore preferito");

// Risultato
let passGenerator = nameUser + SurnameUser + ColorUser + "23";

// risultato console
console.log("La tua password generata è " + passGenerator);

// Risultato in pagina
document.getElementById("PassGenerator").innerHTML = "La tua password generata è " + passGenerator;