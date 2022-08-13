 function example(num){
    console.log(num);
    num -= 1;
    if (num === 0) return;
    example(num)
 }

 example(10)