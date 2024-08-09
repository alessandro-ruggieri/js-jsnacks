// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

//SOLUZIONE 1 con ciclo FOR

/* 
const invitati = ["Marco", "Antonio", "Giuseppe", "Ilaria", "Alessia", "Anna"]
let invitato = false

let nome = prompt('Inserisci il tuo nome così che possa controllare la lista degli invitati')
for (let i = 0; i < invitati.length; i++) {
   if (nome == invitati[i]) {
      invitato = true
   } 
}

if (invitato == true) {
   console.log('Benvenuto/a ' + nome + ', accomodati pure.')
} else {
   console.log('Mi dispiace ' + nome + ' ma non sei nella lista degli invitati.')
}
*/

//SOLUZIONE 2

const invitati = ["Marco", "Antonio", "Giuseppe", "Ilaria", "Alessia", "Anna"]

let nome = prompt('Inserisci il tuo nome così che possa controllare la lista degli invitati')
 if (invitati.includes(nome)) {
   console.log('Benvenuto/a ' + nome + ', accomodati pure.')
 } else {
   console.log('Mi dispiace ' + nome + ' ma non sei nella lista degli invitati.')
 }

