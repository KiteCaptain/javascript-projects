/**
class Animal {
    constructor(lg) {
        this.legs = lg;
    }
}

class Dog extends Animal {
    constructor() {
        super(4);
    }
}

var result = new Dog();
console.log(result.legs);
*/

/**
class Animal {

}

class Cat extends Animal {
  constructor() {
    super();
    this.noise = "meow";
  }
}

var result = new Animal();
console.log(result.noise);
*/

/**
class Person {
    sayHello() {
        console.log("Hello");
    }
}

class Friend extends Person {
    sayHello() {
        console.log("Hey");
    }
}

var result = new Friend();
result.sayHello();
*/

/**
const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter);
 */


/**
let obj = {
  key: 1,
  value: 4
};

let output = { ...obj };
output.value -= obj.key;
console.log(output)
console.log(output.value);

 */

/**
let [a, b] = [1,2,3,4,5]
console.log(b) // return 2
 */

/**
function count(...food) {
  console.log(food.length)
}

count("Burgers", "Fries", null, undefined, Number, String, BigInt); // returns 7
*/

const letter = "a"
letter = "b"

