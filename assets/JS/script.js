$(function(){
   'use strict';

var clickCounter = 0;
var firstClick = "";
var secondClick = "";
var memoryLives = $(".memory-lives").children();
console.log(memoryLives);

function clickTile(){
   clickCounter++;
//first click function here
   if (clickCounter === 1) {
      firstClick = $(this).html();
      $(this).addClass('clicked');
      console.log(clickCounter + " " + firstClick);
   }
//second click function here
   else if (clickCounter === 2){
      secondClick = $(this).html();
      $(this).addClass('clicked');
      console.log(clickCounter);
      if(firstClick === secondClick){
         clickCounter = 0;
          console.log('You found a match');
      } else {
         // firstClick.removeClass('clicked');
         clickCounter = 0;
         console.log("These don't match");
//lives counter control
         memoryLives[memoryLives.length - 1].remove();
         memoryLives = $(".memory-lives").children();
         if(memoryLives.length === 0){
            alert('You lost. Sad Panda');
         }
      }
      clickCounter = 0;
   }
}


$('.tile').on('click', clickTile);

var start = new Date();

$(".tile").on("click", function(){
   setInterval(function(){
   $(".memory-time").text(Math.round((new Date - start)/1000) + " seconds");

}, 1000);
});

});// end of line
