// Scrivere un programma che stampi la tabellina del 2, fino al numero 1000.
// Modificate poi il programma in modo che venga chiesto all’utente il numero massimo consentito, 
// e stampare tutta la tabellina del 2 fino al numero inserito.

/* PARTE 1 DELL'ESERCIZIO

let num = 2
let risultato = 0

for (let i = 0; i <= 500; i++) {
   risultato = num * i
   console.log(num + ' x ' + i + ' = ' + risultato)
}
*/

// PARTE 2 DELL'ESERCIZIO

let num = 2
let risultato = 0
let i = 0
let max = parseInt(prompt('Inserisci il numero massimo che vuoi ottenere come prodotto della tabellina del 2'))
console.log (max)

while (risultato <= max) {
   console.log(num + ' x ' + i + ' = ' + risultato)
   i++
   risultato = num * i
}
