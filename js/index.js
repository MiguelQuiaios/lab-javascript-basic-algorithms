// Iteration 1: Names and Input

let hacker1 = 'Miguel';
let hacker2 = 'Filipe';
console.log(`The driver´s name is ${hacker1}`);
console.log(`The naviator´s name is ${hacker2}`);
//
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let driverCapitals = '';
for (let i = 0; i < hacker1.lenght, i++){
    drverCapitals += hacker1[i].toUpperCase + ' ';
}
console.log (driverCapitals)
