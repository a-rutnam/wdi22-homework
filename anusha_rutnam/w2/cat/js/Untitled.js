var cat = document.querySelector("#mainCatGif");

cat.style.left = '0px';
var direction = "right";

//
var catWalk = function () {

  // Decide the amount the image moves depending on the direction
  var displacement = (direction === "right") ? 5 : -5;

  // Calculate the new value for the image's LEFT style
  var currentLeft = parseInt(cat.style.left);
  var newLeft = currentLeft + displacement;
  cat.style.left = newLeft + 'px';

  // Make the cat dance at the halfway point
  // The maths makes sure the halfway point is a multiple of the displacement
  //    so that the condition can be met
  var halfway = Math.ceil(((window.innerWidth/2)-(cat.width/2))/displacement)*displacement;
  if(currentLeft === halfway) {
    window.clearInterval(timer);
    catDance();
  }

  // Turn the cat around at right edge of the screen
  if(currentLeft > window.innerWidth) {
    window.clearInterval(timer);                    // Stop the current animation
    direction = "left";                             // Set the direction
    cat.className = "left-cat";                     // Change the image orientation
    timer = window.setInterval(catWalkRight, 40);   // Start the new animation
  }

  // Turn the cat around at left edge of the screen
  if(currentLeft < 0-cat.width) {
    window.clearInterval(timer);                    // Stop the current animation
    direction = "right";                            // Set the direction
    cat.className = "right-cat";                    // Change the image orientation
    timer = window.setInterval(catWalk, 40);        // Start the new animation
  }
};



//
//
// // //
// // // //
// var img = document.querySelector("#mainCatGif");
// img.style.left = 0;
// img.style.right = 0;
// var newleft = 0
// var maxWidth = window.innerWidth -296; //296 is the length od the cat
// var newRight =maxWidth;
// var animateright;
//
// var  catWalk = function(){
//
//     newleft +=  10;
//     img.style.left = newleft + 'px';
//     if(parseInt(img.style.left) >= maxWidth)
//     {
//        // clearInterval(animate);
//         console.log(img.style.left);
//         img.style.transform = "scaleX(-1)";
//         console.log(img.style.left);
//         animateright = setInterval(walkBack,100);
//         clearInterval(animate);
//     }
//
// };
//
//
// var walkBack = function() {
//  console.log('walking back')
//     newleft = newleft-10;
//     img.style.left = newleft + 'px';
//       if(parseInt(img.style.left) === 0){
//         clearInterval(animateright);
//         //clearInterval(animate);
//       }
//
//
// }
// var animate = setInterval(catWalk,100);
// var animateright = setInterval(walkBack,30);
