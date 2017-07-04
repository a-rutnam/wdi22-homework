//SOLUTION
//created a new html called soup.HTML
// under title link style sheet type link tab, in href type file structure css/style.css;
// then before closing body tag type script src tab , js/jquery.js THEN js/soup.js (but we are getting an update on that today)


// put html instructions in html file

// create a hidden div and past text in it in the html


//use jQuery to get the contents of the div.
// turns it into massive string
// (/[]/)means split on more than one thing
//words is an array
var words = $('#words').text().split(/[;\-,.\n]+/)
// console.log(words);

var $body = $('body');

// create a random number var
//max is a global ??
var randy = function (max){
  return Math.floor(Math.random()* max)
};

var putWord = function () {
// get a random word from the array of words we just made
  var randomIndex = randy(words.length);
  // use this number as an index on words, above
  var text = words[randomIndex];//didnt work until function putWord had been called in console
  console.log(text);
  // debugger;/
};


var $div = $('<div class="word">').html (text)
$div.css({
top: randy(window.innerHeight 400)+'px'
left:randy(window.innerWidth 400)+'px'
})

$div.appendTo($body).fadeIn(1000).fadeOut(2000, function(){


  $(this).remove();
}


$body.append($div);
}

setInterval(putWord, 100);


//compare above to edge's


//
// var $wordsAll =  $('div');
// // var eachPossWord = $wordsAll.split("");
//
// {console.log($wordsAll);}
//
// //
// // $eachPossWord.each(function() {
// //
// //   var url = $(this).attr('href');
// //   console.log(this);
// //   console.log('original url', url);
// //
// //   var thumbnail = youtube.generateThumbnailUrl(url);
// //   console.log('thumbnail', thumbnail);
// //
// //   var $img = $('<img>').attr('src', thumbnail);
// //
//   $(this).append( $img );
//
//
// });



// Text Soup
//
// Using HTML, CSS and JS + jQuery, create a web page which prints a random word from a large sample of text, in a random position on the page, every 100 milliseconds.
//
// Hints:
//
// Grab some plain text (20-50 paragraphs should do) from one the top 100 novels in the public domain at Project Gutenberg; paste the text into a hidden <div> element in your HTML file, and use jQuery to get the contents of the div.
// Bonus:
//
// Fade the text in to make it appear, and then fade it out to disappear, to stop the page getting too dense with texty text.
// Try random colours, random font sizes, rotation, whatever floats your boat.
