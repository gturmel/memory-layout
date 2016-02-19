// Testing Animations!
$(function(){
   'use strict';

// this is the start of what will be the flip

function flipFlop() {
   $(this).animate({
      transform: "rotateY(180deg)",
      transition: "background 1s -webkit-transform 1s"
   },
      500, function(){
         $(this).css("background-color", "red");
         $(this).css("color", "white");
      }
   );
};
//
$(".tile").on("click", flipFlop);

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
