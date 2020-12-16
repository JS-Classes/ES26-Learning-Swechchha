const authors = ["Swechchha", "Ranjit", "Ranjit1"];

authors.push("Sheprata");
console.log(authors);
authors.pop("Sheprata");
console.log(authors);

console.log(authors.length);
let f = authors[0];
let l = authors[authors.length - 1];

authors.shift("Ranjit1"); //remove Ranjit1 from list
authors.unshift("Ram");

authors.splice(2, 1); //Remove 1 element from index 2

let isTheresAnyNameStartingWithS = authors.some(x => x.startsWith("S"));
let areAllNamesStartingWithS = authors.every(x => x.startsWith("S"));

authors.slice(2, 5); // create sub-array






let sum = (x, y, z) => x + y + z;

let numbers = [3, 4, 5, 6, 1, 2, 3];

sum(numbers[0], numbers[1], numbers[2]);
sum(...numbers);

const allNumbers = [34, 45, ...numbers, 12, 89];

//multidimensional array
//let numbers = [[3, 4, 5], [6, 1, 2, 3]]; //2 * 3 matrix


authors.forEach(author => console.log(author));
