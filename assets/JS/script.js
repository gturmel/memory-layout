$(function(){
   'use strict';

// The function to flip the tiles. Will also add the class of the clicked tile to the [classArray]

var classArray = [];

function clickTile() {
   $(this).addClass("clicked");
   classArray.push($(this).html());
   console.log(classArray);

   if (classArray.length === 2) {
      if(classArray[0] === classArray[1]){
         console.log("this works");
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

// this is the closing tag

});
