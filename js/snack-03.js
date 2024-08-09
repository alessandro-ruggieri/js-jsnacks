// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

//SOLUZIONE 1

      /*
      let num = 0
      let somma = 0

      for ( let i=0; i<10; i++) {
         num = prompt('Inserisci un numero')
         somma = somma + parseFloat(num)
      }
      console.log('La somma dei numeri inseriti è ' + somma)
      */

//SOLUZIONE 2

      /*
      let num = 0
      let somma = 0

      for ( let i=0; i<10; i++) {
         num = prompt('Inserisci un numero')
         if (isNaN(num)) {
            console.log('Il numero ' + num + ' non è valido')
         } else {
            somma = somma + parseFloat(num)
         }
      }
      console.log('La somma dei numeri inseriti è ' + somma)
      */

// SOLUZIONE 3

      let num = 0
      let somma = 0

      for (let i=0; i<10; i++) {
         num = prompt('Inserisci un numero')
         while (isNaN(num)) {
            console.log('Il numero ' + num + ' non è valido')
            num = prompt('Il numero inserito non è valido. Inserisci un nuovo numero')
         }
         somma = somma + parseFloat(num)
      }
      console.log('La somma dei numeri inseriti è ' + somma)