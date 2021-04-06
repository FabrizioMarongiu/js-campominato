// Descrizione
// - Il computer deve generare 16 numeri casuali da 1 a 100 (bombe).
// - In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, se il numero è presente nella lista dei numeri generati la partita termina altrimenti continua chiedendo all’utente un altro numero.
// - La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// - Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50

var range;
var bombe = 16;

var numeriBombe = [];
var numeriUtente = [];


// SCELTA DEL LIVELLO

var livello = parseInt(prompt('Scegli il livello da 1 a 3'));

while (isNaN(livello) || (livello < 1 || livello > 3)){

    livello = parseInt(prompt('Il valore che hai inserito è errato. Inserisci il livello da 1 a 3'));
}

switch(livello){
    case 1:
        range = 100;
        break;
    case 2:
        range = 80;
        break;
    case 3:
        range = 50;
}

var tentativi = range - bombe;

console.log(tentativi);


// CREAZIONE NUMERI RANDOM PER LE BOMBE

for ( var i = 0; numeriBombe.length < bombe; i++){

    var number = numeriRandom();

    if(numeriBombe.includes(number) === false){
        numeriBombe.push(number);
    }

}

console.log('Bombe: ', numeriBombe);





/*********************************************************************
 * FUNZIONI
 **********************************************************************/

//FUNZIONE PER CREARE NUMERI RANDOM
function numeriRandom(){
    var numeroRandom = Math.floor(Math.random() * range) + 1;
    return numeroRandom;
}