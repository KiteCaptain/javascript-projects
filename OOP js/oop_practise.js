class Animal{

}


// there are teo ways to create a new object
// Using Object.create() 
var dog = Object.create(Animal);

// Using new keyword
var cat = new Animal()


// INHERITANCE
// To show inheriatnce we use the extends keyword
class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!")

// POLYMORPHISM
const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!";
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come out, please!";
    }
}

function ringTheBell(something) {
    console.log(something.bell())
}

// ringTheBell(bicycle)

// CONSTRUCTORS
function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}