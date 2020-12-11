const a = 0b1010100001;      // binary
const b = 0o34561;          // octal
const c = 0x12AF;           // hex

// Number API
let age = "67";
let ageNumber = Number.parseInt(age);
let ageNumber1 = Number.parseFloat(age);

//console.log(typeof NaN);

Number.isNaN();
Number.isInteger();
Number.isFinite();

// Math API
Math.abs(-89);
Math.pow();
let r = Math.random(); // [0,1) includes o and excludes 1
//console.log(r);


//Find sd of set of numbers

let GetSD = (numbers) => {
    //Finding mean
    let sum = 0;
    const numberOfItems = numbers.length;
    for (const num of numbers) {
        sum += num;
    }
    const mean = sum / numberOfItems;

    //Finding SUM[(x - mean)^2]
    let sqrDiffSum = 0;
    for (const num of numbers) {
        let diff = num - mean;
        let sqrDiff = Math.pow(diff, 2);
        sqrDiffSum += sqrDiff;
    }

    //Finding sd
    const sd = Math.sqrt(sqrDiffSum / numberOfItems);
    return sd;
}

const ages =  [23, 45, 21, 56, 32, 43, 22, 89, 76, 10];
let sdAges = GetSD(ages);
console.log('Standard Deviation of ages: ${sdAges}');
  

