/**
 Function which will be able to take a word and locate the position of a chosen letter in that given word.  
 */
function letterFinder(word, match){
    try {
        if (word.length < 2){
            console.log("The word is too short!");
            throw new ReferenceError;
        } else if (match.length > 1){
            console.log("The match letter is too long!");
            throw new ReferenceError;
        } else {
            for (var i = 0; i < word.length; i++){
                if(word[i] == match) {
                    console.log("Found the letter ",match, " at ", i);
                } else {
                    console.log("...No match found at ", i);
                }
            }
        }     
    }
   catch (errors){
    console.log("The error is a:", errors)
   }
}

letterFinder("Eugine", "yi")

console.log("...>>> Moving on >>>")