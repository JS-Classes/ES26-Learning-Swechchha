// if else
let x = 34
if (x<=45)
{

}
else if(x<60)
{

}
else{

}
// switch
let y = "b";
switch(y)
{
    case "a":
        break;
    case "b":
        break;
    case "c":
    case "d":
        break;
    default:

}
// for loop
for(let i = 0; i<10; i++)
{
    console.log(i);
}
// while
let j = 0
while(j<10)
{
    console.log(j);
    j++;
}
do{
    console.log(j);
    j++; 
}while(j<20);

let numbers = [2,4,5,7,8,9];
for(let num of numbers)
{
    console.log(num);
}
let person = {name: "Bikram", address: "dang"};
for(let prop in person)
{
    console.log(`${prop} = ${person[prop]}`);
}
// break , continue: label
for(let x = 0; x<5; x++)
{
    if (x==3)
    {
        continue;
    }
    if(x == 4)
    {
        break;
    }
    console.log(x);
}