# Memory Game

## **The Overview:**

There's a few things that we'll need here.
* Animation
* A gameboard
* Tiles
* Icons on Tiles
* Life-bar
* Timer
* header

## **Animation**

### Life-bar:
Needs to shrink when two icons in the flipped tiles are not equal.  
`".remove(<icon class = "fa-fa heart"></i>)"`  
Needs to go to a new page when all the hearts are out. This is the lose screen. Similar to the win screen. I want to log time, tries, and a link to a new game.

### Tiles:

Needs to flip on the click.  
`.on("click", function(){})`  
So this will be the basis of what I'm going to build, and I need to append things in the function. There's going to be a two click limit. Then they compare `<icon>` class. If same, they're locked open. If they're different, they flip back over, and a heart goes away. If all the tiles get flipped correctly, there's a new screen presented. The win screen. Similar to the lose screen. Show time, tries, and link to a new game (and a harder version).
I think that having the matched icons go to a new class, or remove all classes to get them out of the rotating game, is going to be a good way to switch things.  
`.animate(properties[duration][easing][complete])`

`setTimeout(function, delay)` will use a click event, and then pause for a sec before starting the animation.  
`requestAnimationFrame(callback)` lets the browser know that I'm trying to do an animation.
`.rotate`  
[This](https://api.jquery.com/category/effects/) is a link to the page for jQuery animations. Definitely going to be useful.
`.animate`


### Timer:

Counts up form first `click`. One time event, so I'll need to `stopPropagation` at some point. Ends when the game is over, and logs out to win/lose screen. Is there an appropriate `getDate()` out there for this, or is there a timer function?

### New Game Screen:
  Optional. That bounce thing was kinda annoying, but could be fun to put together.

## **Static Elements**

### Tiles:

Need to have an Icon on one side. Need to be able to flip.

### Icons:

I'm going to need the ability to pull out something specific enough so that I can reveal it, but non-specific enough that I don't need to hard-code each interaction, because that would be too much. Let's automate the tedious stuff.
`<i></i>` could be what I'm looking for. Otherwise I may have to wrap each `<i></i>` element in a `<div>`. Not an ideal solution.

### Header:

Do I want to add a link back to the title page? Do I want to change anything about how it looks right now?
