
// NESTING
let password = "cat dog";
if (password.length >= 6) {
    if (password.indexOf('') !== -1) {
        console.log("Password cannot include spaces");
    }
    else {
        console.log("Valid Password!");
    }
}
else {
    console.log("Password too short!");
}

// SWITCH CASE
switch (fruitType) {
    case "Oranges":
        console.log("Oranges are $0.59 a pound.");
        break;
    case "Apples":
        console.log("Apples are $0.31 a pound.");
        break;
    case "Bananas":
        console.log("Bananas are $0.48 a pound.");
        break;
    default:
        console.log('Sorry, we are out of ${fruitType}.');
    console.log("Is anything else you'd like?");
}

// FOR LOOPS
for (
    [initialExperission];
    [condition];
    [incrementExpression]
);

// OUR FIRST FOR LOOPS
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// INFINITE LOOPS
// DO NOT RUN THIS CODE!
for (let i = 20; i >= 0; i++) {
    console.log(i);
}

// LOOPING OVER ARRAYS
const animals = ['lions', 'tigers', 'bears'];

for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}