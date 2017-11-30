console.log("Up and running!");
// cardOne = "queen";

//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";

//console.log("User flipped " + cardOne);

//console.log("User flipped " + cardThree);

var cards = ["queen", "queen", "king","king"]; 

var cardsInPlay = [];

//cardOne store the fitst item in the cards
/*var cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo); */

//cardTwo stored third item in the cards
//var cardTwo = cards[2];

//add cardTwo to end cardsInPlay

//cardsInPlay.push(cardTwo);

//display the card
// console.log("User flipped king " + cardsInPlay);


/*  cardsInPlay;
 if(cardsInPlay[0] === cardsInPlay[1])
 	alert("You found a match");
 else
 	alert("Sorry, try again"); */


  var flipCard = function(cardId){
  	  //use console to access card 
      console.log("User flipped" + cards[cardId]);
      // Use the push method to add the card.
      cardsInPlay.push(cards[cardId]);

      cardsInPlay;

      console.log("User flipped " + cards[cardId]);

      checkForMatch();

  }

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
	} else {
	console.log("Sorry, try again.");
	}
}

