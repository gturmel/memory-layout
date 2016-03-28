$(function(){
   'use strict';

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
            $(".clicked").delay(1000);
            $(".clicked").addClass("tile").removeClass("clicked");
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


});// end of line
