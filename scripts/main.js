/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/

//["8", "7", "A", "A"], 17


function handValue (hand) {
	let total = 0
	for (let i=0; i < hand.length; i++){
		if (hand[i] === 'J' || hand[i] === 'K' || hand[i] === 'Q'){
			total += 10
		}
// let total = 0 += for each card 
// 
		else if (hand[i] === 'A') {
			
				if (total + 11 > 21) {
					total += 1
				}

				else total += 11 
					
				//if hand value +11 > 21 than use 1
				//else use 11
		}
	else 
		total += parseInt(hand[i]) 
	
	}
	if (total > 21 && hand.indexOf('A') >=0){
		total -= 10
	}
	
  return total ;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/