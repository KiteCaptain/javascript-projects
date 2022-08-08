/**
 Function which will be able to take a word and locate the position of a chosen letter in that given word.  
 */
function letterFinder(word, match){
    for (var i = 0; i < word.length; i++){
        if(word[i] == match) {
            console.log("Found the letter ",match, " at ", i)
        } else {
            console.log("...No match found at ", i)
        }
    }
}

letterFinder("Eugine", "i")