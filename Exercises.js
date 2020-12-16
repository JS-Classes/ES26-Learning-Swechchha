// 1. Program to print multiplication table for a number
function printmultiplication(number) {
    console.log(`multiplication of ${number}`);
    for(let i= 1; i<=10; i++)
    {
        let result = number* i;
        console.log(`${number} * ${i} = ${result}`);
    }
}
printmultiplication(2);


// 2. Program to print multiplication table for a number upto some range (default should be 10)
function printmultiply(num,range=10)
{
    console.log(`Up to range = ${range}`);
    for(let i = 1; i <= range; i++) {
        let product = num*i;
        console.log(`${num} * ${i} = ${product}`);
}
}
printmultiply(2,7);


// 3. Program to print multilication table for numbers from m to n.
function numberRange(k,j,range=10) {
    for(let i = k; i<=j; i++)
    {
        console.log(`multiplication of ${k} up to range ${range}`);
        for(let y = 1; y<=range; y++)
        {
            let result = k * y;
            console.log(`${k}*${y}=${result}`)
        }
        k++;
    }
}
numberRange(2,4,5);


const people = [
    {name:'Swechchha' , dob:'2324234', isMale: false},
    {name:'Ram' , dob:'23242341212', isMale: true},
];

console.table(people);
process.stdout.write("Hey");
process.stdout.write("Hey");
process.stdout.write("Hey");


//1. Declare a string variable with paragraph as value. Find following:
    // a. Number of sentences, words and word characters
    // b. Number of special characters
    // c. Number of vowels and consonants

    let pragrph = `The fes!tival is ob@served for a fortnight.
    The first nine days are called Navaratri. 
    The goddess Durga is worshiped on these days.
    People worship the image of the goddess in their houses.
    They also visit the temple of the gods and goddess.`;
    let pragrphObj = new String(pragrph);
    
    function countSentences(pragrph){
      console.log(`Number of sentences splited by decimal are ${(pragrphObj.split(".").length-1)}`);
      console.log(`Number of words splited by space are ${(pragrphObj.split(" ").length)}`);
      
      let word = pragrphObj.split(" ");
      const wordarray = Array.from(word);
      //console.log(`no. of words ${wordarray}`);
        for (let i = 0; i < word.length; i++) {
        console.log(`In ${i+1} position of word : there are ${wordarray[i].length} characters`);
        }
    }
    
    countSentences(pragrph);
    
    
    function countSpecialCharacters(pragrph){
        let specialchar = ["@","!","."];
        let count = 0;
        for(let i = 0; i < pragrph.length; i++){
            if(pragrph.includes(specialchar[i])){
              console.log(`There is special charc ${specialchar[i]} `);
            };
            count++;
        }
    }
    
      countSpecialCharacters(pragrph);
    
      function countVowelsConsonants(pragrph){
        const count = pragrphObj.match(/[aeiou]/gi).length;
        console.log(`count of vowel is ${count}`);
      }
    
      countVowelsConsonants(pragrph);

//1. Find normal distribution of set of normal numbers


//2. Find a random number between provided m and n
//function getRandom(m, n) {  // m = 20, n = 25;
  //  let x = Math.random();
   // let randomNumber = m + x * (n - m);
   // return randomNumber;

   // return m + Math.random() * (n-m); // we can replace the above lines of code with this one line.
//}
// console.log(getRandom(34, 56)); 

// using Arrow Array
let getRandom = (m, n) => m + Math.random() * (n-m);

console.log(getRandom(34, 56));


//3. Find a random string of particular length
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

console.log(generateString(5));


//3. Find a random string of particular length

let GetRandomString = (length) => {
    const wordChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';

    for (let i = 0; i < length; i++) {
        let randomNum = Math.random() * wordChars.length;
        let index = Math.floor(randomNum);
        let c = wordChars.charAt(index);
        randomString += c;
    }

    return randomString;
}

let randString = GetRandomString(20);

console.log(randString);

//console.log('a'.charCodeAt(0)); // ASCII value of a 

//1. Implement a calculator using ES6 classes.
