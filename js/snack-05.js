// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array. Stampa l’array alla fine.

let numeri = []
let num = 0

for (let i = 0; i < 6; i++) {
   num = parseFloat(prompt('Inserisci un numero'))
   while (isNaN(num)) {
      num = parseFloat(prompt('Numero non valido. Inserisci un altro numero'))
   }
   numeri.push (num)
}
console.log(numeri)