// // console.log("Hello world")

// // var my_variable = ["a", "c", "f"];
// // let variable2 = "string";
// // const another_variable = {
// //     "1": "kite",
// //     "2": "Getty"
// // }

// // var my_variable = "We changed this";
// // console.log(my_variable)

// // function with no arguments
// function printName() {
//     console.log("My name is Gertrude")
// }

// // funtion requiring arguments
// function strLength(str) {
//     console.log(str.length)
// }
// // strLength("Gertrude")


// function perimeter (a, b, optional) {
//     return a + b + optional;
// }

// console.log(perimeter(12, 24, 48, 4));


// function perimeter2 (a, b, c) {
//     // p = a + b + c ;
//     while (perimeter2 < 20 ) {
//         console.log("That's a small perimeter")
//     };
//     return p;
// }

// console.log(perimeter2(1, 7, 1))

function chicken(){
    return egg() + "came first"
}

function egg() {
    return "no" + chicken() + "I came first"
}

console.log(egg())

