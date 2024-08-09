// Fate generare un numero random da 0 a 10 al computer, e chiedete all’utente di inserire un suo numero. 
// Se il numero scelto dall’utente è uguale al numero del computer informate l’utente che ha vinto, altrimenti ha perso.
// A questo punto fate giocare l’utente, fintanto che non vince la partita contro il PC


let winner = false

while (winner === false) {
   let userNumber = prompt('Inserisci un numero intero compreso tra 0 e 10 e prova ad indovinare il numero pensato dal computer!')
   while (userNumber < 0 || userNumber > 10 || isNaN(userNumber)) {
   userNumber = prompt('Il numero deve essere compreso tra 0 e 10!!!')
   }
   let rndNumber = Math.floor(Math.random()*11)
   console.log(rndNumber)
   if (parseInt(userNumber) === rndNumber) {
      console.log('Complimenti! Hai vinto')
      winner = true
   } else {
      console.log('Mi dispiace ma hai perso! Ritenta')
   }
}

