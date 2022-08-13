/*
This is a program to print out the grid of a chessboard
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
*/

/*
Not scalable code
function chessboard () {
    let board =  "| # # # #\n# # # # |";
    let height = 8;
    for (let count = 0; count < height/2; count++){
        console.log(board)
    }
}
chessboard()
*/

let size = 20;
let board = "";

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++){
        if ((i + j) % 2 == 0){
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board)




