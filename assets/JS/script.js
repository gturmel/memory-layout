// Testing Animations!
$(function(){
   'use strict';

// this is the start of what will be the flip

$(".tile").on("click", function(){
   $(this).css("background-color", "red");
   $(this).css("color", "white");
});

// This is the timer! class memory-time

var hours = new Date().getHours();
if (hours > 12) {
   hours = hours -12
};
var minutes = new Date().getMinutes();
var seconds = new Date().getSeconds();


$(".memory-time").text(hours + " " + minutes + " " +seconds);

});




   // part 1: set the events (click and 1.2function that I want to run on the click)
   // 3 animate alllll the properties. webkit transform all the things. css attributes need to get switched up.



// this is the closing tag
