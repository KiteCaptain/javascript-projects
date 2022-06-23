/*
 This is a program to print the triangular pattern below 
#
##
###
####
#####
######
#######

*/

// Using For looop
 let pattern1 = "";
for ( let count = 0; count < 7; count ++) {
    pattern1 += "#";
    console.log(pattern1);
}

// Using While loop
let  pattern2 = ""
while (pattern2.length != 7 ) {
    pattern2 += "#"
    console.log(pattern2);
}

// Using Do -- while loop
let count = 0;
let pattern3 = "#";
do {
    console.log(pattern3);
    pattern3 += "#";
    count += 1
} while ( count < 7)
function makeTriangle(){
    Pass
}
makeTriangle()