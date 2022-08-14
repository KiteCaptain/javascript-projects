// forEach()
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index + 1}. ${fruit}`)
}
fruits.forEach(appendIndex);

// filter()
const nums = [0,10,20,30,40,50];
let filtered = nums.filter( function(num) {
    return num > 20;
})
console.log(filtered)

// Map()
myArr = [0,10,20,30,40,50]
mappedArray = myArr.map( function(num) {
    return num / 10
})
console.log(mappedArray)