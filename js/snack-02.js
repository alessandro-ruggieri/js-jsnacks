// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const parola1 = prompt ('Inserisci una parola')
const parola2 = prompt ('Inserisci un\' altra parola')

console.log(parola1, parola2)
console.log(parola1.length, parola2.length)

if (parola1.length == parola2.length) {
   console.log('La parola ' + parola1 + ' e la parola ' + parola2 + ' sono di eguale lunghezza' )
} else if (parola1.length > parola2.length){
   console.log(parola2, parola1)
} else {
   console.log(parola1, parola2)
}