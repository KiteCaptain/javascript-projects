/*
NOTES
call stack - The place where the computer stores a context of a function called inside another function.
Everytime a function is called, the current context is stored on top of this stack.
When a function returns, it removes the top context from the stack and uses
that context to continue execution.
*/

const square = function (x) {
    return x*x
} 
// console.log(square(3)) -> 9

// Arrow function
const addition = x => { return x+x}
console.log(addition(4))

const power = function(base, exponent ) {
    result = base**exponent 
    return result
}
// console.log(power(2)) //-> 1024

// Example of an infinite stack
// function chicken() {
//     return egg();
// }

// function egg() {
//     return chicken()
// }
// console.log(chicken() +" Came first") --> Maximum call stack size exceeded

// Recursive functions 
// this are functions that call themselves
function exponent1(base,  exponent) {
    if (exponent == 0){
        return 1
    } else {
        return base * exponent1(base, exponent - 1)
    }
}
console.log(exponent1(2,3))
/*
 write a function that, given a number, tries to find a
sequence of such additions and multiplications that produces that number?
*/
function findSolution(target) {
    function find(current, history) {
        if (current == target){
            return history ;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}
console.log(findSolution(24)); // -> (((1 * 3) + 5) * 3)

/* The inner function find does the actual recursing. It takes two arguments: the current number and a string that records how we reached this
number. If it finds a solution, it returns a string that shows how to get to the
target. If no solution can be found starting from this number, it returns null.
To do this, the function performs one of three actions. If the current
number is the target number, the current history is a way to reach that target, so it is returned. If the current number is greater than the target, there’s
no sense in further exploring this branch because both adding and multiplying will only make the number bigger, so it returns null. Finally, if we’re
still below the target number, the function tries both possible paths that start
from the current number by calling itself twice, once for addition and once
for multiplication. If the first call returns something that is not null, it is
returned. Otherwise, the second call is returned, regardless of whether it
produces a string or null.
find(1, "1")
    find(6, "(1 + 5)")
        find(11, "((1 + 5) + 5)")
            find(16, "(((1 + 5) + 5) + 5)")
                too big
            find(33, "(((1 + 5) + 5) * 3)")
                too big
        find(18, "((1 + 5) * 3)")
            too big
    find(3, "(1 * 3)")
        find(8, "((1 * 3) + 5)")
            find(13, "(((1 * 3) + 5) + 5)")
                found!

The indentation indicates the depth of the call stack. The first time
find is called, it starts by calling itself to explore the solution that starts with
(1 + 5). That call will further recurse to explore every continued solution that
yields a number less than or equal to the target number. Since it doesn’t
find one that hits the target, it returns null back to the first call. There the
|| operator causes the call that explores (1 * 3) to happen. This search has
more luck—its first recursive call, through yet another recursive call, hits
upon the target number. That innermost call returns a string, and each of
the || operators in the intermediate calls passes that string along, ultimately
returning the solution.

*/


/*
GROWING FUNCTIONS
write a program that prints two numbers: the numbers
of cows and chickens on a farm, with the words Cows and Chickens after
them and zeros padded before both numbers so that they are always three
digits long. make it scalable for future animals in the farm.
*/
function zeroPad(number, width) {
    paddedNum = String(number)
    while (paddedNum.length < width){
        paddedNum = "0" + paddedNum;
    }
    return paddedNum;
} // tHis 

function printFarmInventory (cows, chickens, pigs){
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`)
}

printFarmInventory(3,4,28)

/*
Write a function min that takes two arguments and returns
their minimum.
*/
function minimum(a,b) {
    return console.log(Math.min(a,b));
}
minimum(12, 400)


