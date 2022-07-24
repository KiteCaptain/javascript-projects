function greaterThan(n) {
    return m => m > n;
}

let greaterThan10 = greaterThan(10);
// console.log(greaterThan10(2))

// Functions that change other functions
function noisy(f) {
    return (...args) => {
        console.log("Calling with", args);
        let result = f(...args);
        console.log("called with", args, " returned", result);
        return result;
    };
}

// noisy(Math.min)(3, 2, 1)


// Functions that provide new types of control flow
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}


function unless(test, then) {
    if (!test) then();
}

repeat(3, n => {
    unless(n % 2 == 1, () => {
        console.log(n, "is even")
    })
})

// There is a built-in array method, forEach, that provides something like a
// for/of loop as a higher-order function.


// Script data set

// The binding contains an array of objects, each of which describes a script.
// the variable is asigned to prevent error highlighting, otherwise it's not needed
script = {
    name: "Coptic",
    ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
    direction: "ltr",
    year: -200,
    living: false,
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
    }
   

    // Filtering arrays
    function filter(array, test) {
        let passed = [];
        for (let element of array) {
            if (test(element)) {
                passed.push(element)
            }
        }
        return passed
    }
// the below  code can only run in r (https://eloquentjavascript.net/code#5) 
// console.log(filter(SCRIPTS, scripts => script.living));



// Transforming with map
// The map method transforms an array by applying a function to all of its
// elements and building a new array from the returned values.
//  mao is a std array method

function map(array, transform) {
    let mapped = [];
    for (let element of array){
        mapped.push(transform(element));
    }
    return mapped
}
// let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
// console.log(map(rtlScripts, s => s.name));

// Summarizing with reduced
function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}
console.log(reduce([1,2,3,4],(a,b) => a + b, 0));
// //String and character codes;
// let horseShoe = "🐴👟"
// // → 4
// console.log(horseShoe[0]);
// // → (Invalid half-character)
// console.log(horseShoe.charCodeAt(0));
// // → 55357 (Code of the half-character)
// console.log(horseShoe.codePointAt(0));
// // → 128052 (Actual code for horse emoji)


// Recognizing text
function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({name, count: 1});
        } else {
            counts[known].count++;
        }
    }
    return counts;
}
// console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
// → [{name: false, count: 2}, {name: true, count: 3}]

/*
Arrays provide a number of useful higher-order methods. You can use
forEach to loop over the elements in an array. The filter method returns
a new array containing only the elements that pass the predicate function.
Transforming an array by putting each element through a function is done
with map. You can use reduce to combine all the elements in an array into a
single value. The some method tests whether any element matches a given
predicate function. And findIndex finds the position of the first element that
matches a predicate
*/