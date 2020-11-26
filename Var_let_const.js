// Redeclaration allowed
var x = 56;
// 1000 lines of code
var x = "sdfs";

// Var is function scoped or global
function add()
{
    var xx = "sdsf";
}

// Var cam be hoisted
console.log(age);
var age = 67;
//let age = 67;

//  Redeclaration not allowed but can mutate
let y = 45;
//let y = "sdfs";
y = "sdfs";

// no mutation allowed
//const z = true;
//z= false;

// Block scoped: let and const
function add1()
{
    var xx = "sdsf";

    if(xx == "")
    {
        let x1 = 234.6;
    }
}