// en 4 if

// let a = 10;

// if (a % 3 === 0 && a % 5 !== 0) {
//     console.log("fizz");
// }

// if (a % 5 === 0 && a % 3 !== 0) {
//     console.log("buzz");
// }

// if (a % 5 === 0 && a % 3 === 0) {
//     console.log("fizzbuzz");
// }

// else if (a % 3 !== 0 && a % 5 !== 0) {
//      console.log(a);
//  }


// en 3 if

// let nombre = 30;

// let resultat ="le resultat est ";

// if (nombre % 3 === 0){
//     resultat = resultat + "fizz";
// }

// if (nombre % 5 === 0){
//     resultat = resultat + "buzz";
// }

// if (nombre % 5 != 0 && nombre % 3 != 0) {
//     resultat = resultat + nombre
// }

// console.log(resultat);


// en 2 if
let a = 11;

let resultat ="";

if (a % 3 === 0) {
    resultat = resultat + "fizz";
}

if (a % 5 === 0) {
    resultat = resultat + "buzz";
}

console.log(resultat || a);

