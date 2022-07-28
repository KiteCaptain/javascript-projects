
/**
 * the function will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.
 */

let count = 0;

function cc(card) {

switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        count+=1;
        break
    case 10:
    case "J":
    case "Q":       
    case "K":
    case "A":
        count -=1;
        break
  }
  var holdbet = "Hold";
  if(count > 0) {
      holdbet = "Bet";
  }
  return count + " " + holdbet;
}

cc(2); cc(3); cc(7); cc('K'); cc('A');