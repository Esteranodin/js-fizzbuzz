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

let a = 11;

let resultat ="";

if (a % 3 === 0) {
    resultat = resultat + "fizz";
}

if (a % 5 === 0) {
    resultat = resultat + "buzz";
}

console.log(resultat || a);