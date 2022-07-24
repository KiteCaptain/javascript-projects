// Sum of a range
/**
 function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}
 
 */

function sum(a, b) {
    let totalSum = 0
    totalSum = a + b 
    return totalSum
}

// console.log(sum(10,3))

// Reversing an array
function reverseArray(arr){
    let newArray = [];

    for (let i = arr.length - 1; i != -1 ; i--){
        newArray.push(arr[i]);
    };
    return newArray    
}

r = reverseArray([1,2,3,4,5])
console.log(r)