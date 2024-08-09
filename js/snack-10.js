// Scrivere un programma a cui venga chiesto all’utente di inserire numeri uno dopo l’altro.
// Quando l’utente scriverà 2 volte consecutive lo stesso numero allora il programma dovrà terminare.

//SOLUZIONE 1 
/*
let lastnumber = 0

let number = parseInt(prompt('Inserisci un numero.Se inserisci due numeri consecutivi uguali, uscirai dal programma'))
while (number != lastnumber) {
   lastnumber = number
   number = parseInt(prompt('Inserisci un numero.Se inserisci due numeri consecutivi uguali, uscirai dal programma'))
}
*/

//SOLUZIONE 2 CON ARRAY

let numeri = []
let num = 0
let lastnumber = 0
console.log (numeri)

num = parseInt(prompt('Inserisci un numero.Se inserisci due numeri consecutivi uguali, uscirai dal programma'))
do {
   numeri.push (num)
   console.log(numeri)
   lastnumber = parseInt(numeri[numeri.length - 1])
   console.log(lastnumber)
   num = parseInt(prompt('Inserisci un numero. Se inserisci due numeri consecutivi uguali, uscirai dal programma'))
} while (num != lastnumber);


