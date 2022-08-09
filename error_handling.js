
function sum(a, b, c){
    sum = a + b + c;
    if (typeof(sum) !== number){
        console.log("Wrong Inputs")
        console.log(typeof(sum))
    } 
    return sum
}

try {
sum(12,23,56)
} catch(err) {
    console.log(err)
}

console.log("The error does not stop the program")