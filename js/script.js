// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// 1. creo ciclo for per fare numeri da 1 a 100
for (var i = 1; i <= 100; i++) {
  console.log([i]);
// 2.per i multipli di 3 faccio uscire Fizz,quindi uso il modulo/resto,lo stesso per i multipli di 5 e se sono uguali esce FizzBuzz
if (i % 3 == 0 && i % 5 == 0) {
        document.getElementById('list').innerHTML += '<li>' + 'FizzBuzz' + '</li>';
    }
    else if (i % 3 == 0) {
        document.getElementById('list').innerHTML += '<li>' + 'Fizz' + '</li>';
    }
    else if (i % 5 == 0) {
        document.getElementById('list').innerHTML += '<li>' + 'Buzz' + '</li>';
    }
    else {
        document.getElementById('list').innerHTML += '<li>' + i + '</li>';
    }
}
