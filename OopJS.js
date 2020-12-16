let user1 = {name: "Swechchha", age: 25, email: "a@bc.com"};
let user2 = {name: "Swechchha1", age: 26, email: "ca@bc.com"};
let user3 = {name: "Swechchha2", age: 27, email: "aa@bc.com"};

//ES5
//function User(name, age, email) {
  //  this.name = name;
  //  this.age = age;
  //  this.email = email;
//}

//let user4 = new User("Swechchha",  25, "a@bc.com");
//let user5 = new User("Swechchha1", 26, "ca@bc.com");
//let user6 = new User("Swechchha2", 27, "aa@bc.com");

//console.log(user4);


//ES6
class User {
    constructor(name, age, email) {
        this._name = name;
        this.age = age;
        this.email = email;
    }

    increaseAge(){
        this.age++;
    }

    static walk() {
        console.log("Users do walk. Hey I am from static method");
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        this._name = newValue;
    }
}

let user7 = new User("Swechchha",  25, "a@bc.com");
let user8 = new User("Swechchha1", 26, "ca@bc.com");
let user9 = new User("Swechchha2", 27, "aa@bc.com");

user7.increaseAge();
user7.name;
user7.name = "Ram";

console.log(user7);

User.walk();

class Employee extends User {
    constructor(name, age, email, role) {
        super(name, age, email);
        this._role = role;
    }

    get role() {
        return this._role;
    }

    set role(newValue) {
        this._role = newValue;
    }
}

var employee1 = new Employee("Swechchha", 25, "abc@abc.com", "QA");

employee1.increaseAge();
console.log(employee1);