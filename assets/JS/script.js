$(function(){
   'use strict';

var clickCounter = 0;
var firstClick = "";
var secondClick = "";
var memoryLives = $(".memory-lives").children();
var firstSelected = "";
var secondSelected = "";

function clickTile(){
   clickCounter++;
//first click function here
   if (clickCounter === 1) {
      firstClick = $(this).html();
      firstSelected = $(this);

      $(firstSelected).addClass('clicked').removeClass('tile');

   }
//second click function here
   else
   {
      secondClick = $(this).html();
      secondSelected = $(this);
      $(this).addClass('clicked').removeClass('tile');
//if the two icons match
      if(firstClick === secondClick){
         clickCounter = 0;
         setTimeout(function(){
            $(secondSelected).addClass('found').removeClass('clicked').removeClass('tile');
         }, 1000);
         var found = $('.found');
         console.log(found);
         if(found.length === 8){
            alert('You won the game Sad Panda!');
            location.reload();
         }
//if the two icons are not a match
      } else {

         clickCounter = 0;
//lives counter control
         memoryLives[memoryLives.length - 1].remove();
         memoryLives = $(".memory-lives").children();
         if(memoryLives.length === 0){
            alert('You lost, Sad Panda');
            location.reload();
         };
         setTimeout(function(){
            $(firstSelected).addClass('tile').removeClass('clicked');
            $(secondSelected).addClass('tile').removeClass('clicked');
         }, 1000);
      }
//reset all variables for the next round of clicking

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
