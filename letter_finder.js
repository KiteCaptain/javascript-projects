/**
 Function which will be able to take a word and locate the position of a chosen letter in that given word.  
 */
// function letterFinder(word, match){
//     try {
//         if (word.length < 2 && typeof(word != 'string')){
//             console.log("The word doesn't pass!");
//             throw new ReferenceError;
//         } 
//         else if (match.length > 1  && typeof(match) != 'string'){
//             console.log("The match does not meet the criteria!");
//             throw new ReferenceError;
//         }
//         else {
//             for (var i = 0; i < word.length; i++){
//                 if(word[i] == match) {
//                     console.log("Found the letter ",match, " at ", i);
//                 } else {
//                     console.log("...No match found at ", i);
//                 }
//             }
//         }     
//     }
//    catch (errors){
//     console.log("The error is a:", errors)
//    }
// }

// letterFinder("Eugine", true)

// console.log("...>>> Moving on >>>")

function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(match) == 'string' && match.length == 1;
    if(condition1 && condition2) {
        for(i = 0; i < word.length; i++) {
            if(word[i] == match) {
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder([],[])
letterFinder("cat","c")