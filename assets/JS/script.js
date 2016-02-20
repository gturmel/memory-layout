// Testing Animations!
$(function(){
   'use strict';

// this is the start of what will be the flip
 // this turns the background color to red and turns the icon to white.
 // I can call this function with $(".tile").on("click", flipFlop);



function flipFlop() {
   $(this).animate({
      transform: "rotateY(180deg)"
      // $(this).css("transition", "background 1s -webkit-transform 1s");
   },
      500, function(){
         $(this).css("background-color", "red");
         $(this).css("color", "white");
      }
   );
};
//
$(".tile").on("click", flipFlop);

console.log($(".tile i").attr("class"));

// this is the array of all the classes for all the buttons

var classArray = $(".tile").on("click", function(){
   $(this).children().attr("class");
});

console.log(classArray);

// // get the class of the first click.

var firstClassClick = $(".tile").children().on("click", function(){$(this).attr("class")});

console.log(firstClassClick);

var memoryLives = $(".memory-lives").children();

console.log(memoryLives);

if (firstClassClick === secondClassClick) {
   console.log("You found a match");
   $(this).addClass("solved");
   if(".solved".length === ".memory-tile".length){
      alert("You win!");
   };
}
   else if (firstClassClick !== secondClassClick) {
      console.log("You did not find a match");
      $(this).removeClass("flipOver").addClass("flipBack");
      $(memoryLives).pop();
      if (memoryLives.length === 0) {
         alert("Sorry, try again")
      };
   };
//    cards dont flip ever again (change class, or something?)
//    if (cardsFlipped.length === totalCards.length){
//       go to win page
//    }
// }
//
// else if (firstClassClick !== secondClassClick){
//    remove a heart
//    if (hearts.length === 0) {
//       go to lose page
//    }
//    re-flip the cards
//
// }

// get the class of the second click.
//
// if the class of the first click === the class of the second click:
//
// They stay flipped;
// they don't take a heart away.
//
// if the class of the first click !== the class of the second click
//
// they flip background
// a heart goes away .remove
//
// if all the hearts go away: lose screen
//
// if all the cards are flipped correctly: win screen.
//


// $(".tile").on("click", function(){
//    $(this).css("background-color", "red");
//    $(this).css("color", "white");
//    $(this).css("transform", "rotateY(180deg)");
// });



// This is the timer!

var start = new Date();

$(".tile").on("click", function(){
   setInterval(function(){
   $(".memory-time").text(Math.round((new Date - start)/1000) + " seconds");

}, 1000);
});


// this is the closing tag
});
