let message1 = "This is 34 testing ongoing for 67 87 to find 89 numbers 7865 only and@abc.com";
let number = /\d+/g;
let matches1 = message1.match(number);

console.log(matches1);
let regexEmail = /\S+@\S+\.\S+/g;
let matches2 = message1.match(regexEmail);
console.log(matches2);