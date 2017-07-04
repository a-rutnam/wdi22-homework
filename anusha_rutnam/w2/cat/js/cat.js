var cat = document.querySelector("#mainCatGif");

cat.style.left = 0;
var windowMinusCat = 500;
var step = 10;
//not working window.innerWidth-200;  // window.innerWidth = '1440' cat is 200px wide should 1240



var catWalk = function() {

  var oldLeft = parseInt(cat.style.left);

  var newLeft = (oldLeft+step)

  cat.style.left = (newLeft + 'px')

  if (newLeft === windowMinusCat){
  console.log('bla');

  cat.style.transform = 'scaleX(1)';

  clearInterval();
  step = -10
  var newLeft = (oldLeft+step)

  cat.style.left = (newLeft + 'px')

    if (newLeft === 400){
      console.log('back at 0');
    }//2nd if why doesn't this work



  }//if
};
