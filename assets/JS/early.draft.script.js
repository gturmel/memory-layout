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

var firstClassClick = $(".tile").click("i", function(){
   console.log($(this).html());
});

var memoryTile = $(".memory-tile");

console.log(memoryTile);

var memoryLives = $(".memory-lives").children();

console.log(memoryLives);

if (firstClassClick === secondClassClick) {
   console.log("You found a match");
   $(this).addClass("solved");
   if(".solved".length === memoryTile.length){
      alert("You win!");
   };
}
   else if (firstClassClick !== secondClassClick) {
      console.log("You did not find a match");
      $(this).removeClass("flipOver").addClass("flipBack");
      $(memoryLives).pop();
      // may have to remove something else instead of just pop...
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



// The function to flip the tiles. Will also add the class of the clicked tile to the [classArray]
var clickCounter = 0;
var classArray = [];
var memoryLives = $(".memory-lives").children();
var totalMatches = 0;

function clickTile() {
   clickCounter++;
   $(this).addClass("clicked");
// pointer-events: none will stop the same one from getting clicked on
   classArray.push($(this).html());
   console.log(classArray);

   if (classArray.length === 2) {
      if(classArray[0] === classArray[1]){
         console.log("You found a match");
// this sets the cards to not rotate back when a match is found
         $(classArray).each(function(){
         $(".clicked").addClass("found").removeClass("clicked")});
// resets the classArray to zero so I can get two new classes
         classArray.pop();
         classArray.pop();
      }
      else if (classArray[0] !== classArray[1]){
         console.log("These don't match");
// set timeout wraps this whole things!! That will make this get that delay that I want
         if(clickCounter % 2 === 0){
            // I was hoping that this would delay the return flip back
            // $(".clicked");
            $(".clicked").delay(1000).addClass("tile").removeClass("clicked");
         }
// this empties out the array, so I can get two new things to compare
         classArray.pop();
         classArray.pop();
// this is the part that removes the hearts
         console.log(clickCounter);
         $(memoryLives[clickCounter / 2]).detach();
// alerts if you get to zero lives
         if(memoryLives.length === 0){
            alert("You ran out of tries.");
         }
      }
   }

};

$(".tile").on("click", clickTile);


// This is the timer!

var start = new Date();

$(".tile").on("click", function(){
   setInterval(function(){
   $(".memory-time").text(Math.round((new Date - start)/1000) + " seconds");

}, 1000);
});
