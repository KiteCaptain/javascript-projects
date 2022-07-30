/**
 * The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same. */

function rangeOfNumbers1(startNum, endNum) {
    if (endNum - startNum === 0) {
      return [startNum];
    } else {
      var numbers = rangeOfNumbers1(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
  }



  function rangeOfNumbers2(startNum, endNum) {
    return startNum === endNum
      ? [startNum]
      : rangeOfNumbers2(startNum, endNum - 1).concat(endNum);
  }


  function rangeOfNumbers3(startNum, endNum) {
    return startNum === endNum
      ? [startNum]
      : [...rangeOfNumbers3(startNum, endNum - 1), endNum ];
  }
