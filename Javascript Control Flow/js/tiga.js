// NESTED LOOPS
let str = 'LOL';
for (let i = 0; i <= 4; i++) {
    console.log("Outer:", i);
    for (let j = 0; j < str.length; j++) {
        console.log('Inner:' , str[j]);
    }
}

// EN EXAMPLE FOR OF
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
    text += x + "<br>";
}

// AN EXAMPLE FOR IN
const person = {fname:"Thaniea", lname:"Luqizahwa", age:25};

let txt = "";
for (let x in person) {
    txt += person[x] + " ";
}

// WHILE LOOPS
let num = 0;
while (num < 10) {
    console.log(num);
    num++;
}

// WHILE LOOPS
// do {
//     // code block to be executed
// }
// while (condition);

// AN EXAMPLE DO... WHILE LOOPS
// do {
//     text += "the number is" +
// i;i++;
// }
// while (i < 10);