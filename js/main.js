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
var cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("User flipped " + cardOne);
console.log("User flipped test " + cardsInPlay);

//cardTwo stored third item in the cards
var cardTwo = cards[2];

//add cardTwo to end cardsInPlay

cardsInPlay.push(cardTwo);

//display the card
console.log("User flipped king " + cardsInPlay);


if (cardsInPlay.length === 2)
  cardsInPlay;
 if(cardsInPlay[0] === cardsInPlay[1])
 	alert("You found a match");
 else
 	alert("Sorry, try again");
  
