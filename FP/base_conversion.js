/**
 * This requires the use of parseInt() function 
 * The fuction takes two arguments -> parseInt(string, radix)
 * If one is givenit converts a str to an integer
 * if the radix is given it converts the string to a number of that base
 * Radix can be an integer from 2 to 36
 */

function binaryToDecimal(str) {
    return parseInt(str, 2);
}


console.log(binaryToDecimal("10101"));