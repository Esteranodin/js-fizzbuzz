let a = 2;

if (a % 3 === 0 && a % 5 !== 0) {
    console.log("fizz");
}
else if (a % 5 === 0 && a % 3 !== 0) {
    console.log("buzz");
}
else if (a % 5 === 0 && a % 3 == 0) {
    console.log("fizzbuzz");
}
else if (a % 3 !== 0 && a % 5 !== 0) {
    console.log(a);
}

