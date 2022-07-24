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