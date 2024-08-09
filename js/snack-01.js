// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

const numero1 = prompt('Inserisci un numero')
const numero2 = prompt('Inserisci un altro numero')

if (numero1 === numero2) {
   console.log('I due numeri inseriti sono uguali')
} else if (numero1 < numero2) { 
   console.log(numero2)
} else
   console.log(numero1)
