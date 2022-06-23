/* 
this is a program that prints numbers from 1 to 100
- Prints Fizz for a number divisible by 3
- Prints Buzz for a number divisible  by 5
- prints FizzBuzz for a number divisible by both 3 and 5

*/
function fizzbuzz() {
    for(let count = 1; count <= 100; count ++) {
        if (count % 3 == 0 && count % 5 ==0) {
            console.log("FizzBuzz");
        }else if(count % 3 == 0) {
            console.log("Fizz");
        }else if (count % 5 == 0 ) {
            console.log("Buzz")
        }else { console.log(count)}
    }
}

fizzbuzz()
