// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let num = 0
let somma = 0

for (i=0; i<10; i++) {
   num = prompt('Inserisci un numero')
   somma = somma + parseFloat(num)
}
console.log('La somma dei numeri inseriti è ' + somma)