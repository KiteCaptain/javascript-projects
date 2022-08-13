/**
 
 *A function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind. 
  
 */

// There are different ways of doing the same countdown


//  v1
function countdown1(n) {
    if (n < 1) {
      return [];
    } else {
      const arr = countdown(n - 1);
      arr.unshift(n);
      return arr;
    }
  }


//   v2
function countdown2(n) {
    if (n < 1) {
      return [];
    } else {
      const arr = countdown(n - 1);
      arr.splice(0, 0, n);
      return arr;
    }
  }


//   v3
function countdown3(n){
    return n < 1 ? [] : [n].concat(countdown(n - 1));
 }

//  v4
function countdown4(n){
    return n < 1 ? [] : [n, ...countdown(n - 1)];
 }

