//Array destructuring
let x, y, rest;

[x, y] = [23, 56]; //unpacking

[x, y, ...rest] = [12, 34, 56, 78, 21, 89];

const numbers = [12, 34, 56, 78, 21, 89];
[x, y, ...rest] = numbers;

//[x=1, y=2, ...rest] = numbers;

console.log(rest);

let a, b;

({ x, y, ...rest} = {x : 34, y : 78, z : 56, w : 45});

console.log(rest);

//Swap value of two variables
let m = 100;
let n = 200;

[m, n] = [n, m];

let f = () => [2, 3, 4, 5];

//classical way of let f = () => [2, 3, 4, 5];
//function f() {
//    return [2, 3, 4, 5];
//}

let [c, , , d] = f();


//Object examples
const user = {
    id : 1,
    name : 'Swechchha'
};

const {id, name} = user;

//Computed properties

let key = 'z';
let ({[key]: 'fsdf'} = {z: 'hkjjlk'});
