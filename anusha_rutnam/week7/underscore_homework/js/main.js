console.log("start");

/////////////////////////////////// Exercises 2

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 },
];

var words = [
  "attoparsec", "batch", "Cinderalla Book", "Dr. Fred Mbogo", "eat flaming death", "fandango on core", "Foonly", "goat file", "Halloween Documents", "I see no X here", "Imminent Death Of The Net Predicted!", "jibble", "kilogoogle", "larval stage", "maximum Maytag mode", "nybble", "octal forty", "pico-", "quantum bogodynamics", "rubber-hose cryptanalysis", "sigmonster", "tail recursion", "unswizzle", "VAXen", "webmaster", "XEROX PARC", "yak shaving", "Zero-One-Infinity Rule"
]; // Random words from here... http://www.catb.org/jargon/html/go01.html


// 2.1 Sort the people by 'uid'
_.sortBy(people, 'uid');

//2.2 Group the random words by the lower case version of their first letter
_.groupBy(words, function(word){return word[0].toLowerCase();})

//2.3 Check to see if all the words have more than 3 characters

_.every( words, function ( word ) {
  return word.length > 3;
});

//2.4 Check if some words are over twenty characters long
_.some( words, function ( word ) {
  return word.length > 20;
});

//2.5 Get an array of all of the uids in people

_.pluck(people, 'uid');

//2.6  Find the person with the highest uid

_.max(people, function(person){ return person.uid; });

//2.7 Return an object that says how many even numbers and how many odd numbers there are in numbers

_.countBy(numbers, function(num) {
  return num % 2 == 0 ? 'even': 'odd';
});

//2.8 Get three random numbers out of numbers

_.sample( numbers, 3 );





////////////////////////// Exercises 3 Arrays!


var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];

//3.1 Create an array of every five numbers between 30 and 101

var fivers = _.range(30, 101, 5)


//3.2 Turn bumpyArr into one flat array (no nested arrays)
var flatBumpy = _.flatten(bumpyArr)


//3.3 Remove all of the falsey elements in the uncompactedArr
var trueUncompactedArr = _.compact(uncompactedArr)

//3.4 Find all of the unique elements in the following arrays - [ 1, 25, 100 ], [ 1, 14, 25 ] and [24, Infinity, -0]


var bumpy2 = [[ 1, 25, 100 ], [ 1, 14, 25 ], [24, Infinity, -0]]
var flat2 = _.flatten(bumpy2)

var uniqs = _.filter(flat2, function(num){ return flat2.indexOf(num) == flat2.lastIndexOf(num); });

//3.5 Find the index of the first element in numbers that is over 7 and is even

var firstEven = _.find( numbers, function ( num ) {
  return num % 2 === 0 && num > 7
} );

var indexOfFirstEven = _.indexOf(numbers, firstEven)

//could probs chain here

//3.6 Turn arrToTransform into an object that looks like this - { age: NaN, location: undefined }

var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];

var bla = _.unzip(arrToTransform)

_.object(bla)




////////////////////////////// Exercises 4 Objects!

var objectToMap = {
  start:  100,
  middle: 853,
  end:    912
}
//4.1 Multiply each value in objectToMap by a random number and return an object with the changed values

_.mapObject(objectToMap, function(val, key) {
  return val * _.random(0,100);
});


//4.2 Get an array version of objectToMap that looks like this - [["start", 100], ["middle", 853], ["end", 912]]
_.pairs(objectToMap)


// 4.3 Flip objectToMap around so that it looks like this - { "100" : "start", "853" : "middle", "912" : "end" }

_.invert(objectToMap)

//4.4  Remove the "start" key from objectToMap in two different ways
_.omit(objectToMap, 'start');

_.pick(objectToMap, 'middle', 'end');



////////////////// Exercises 5 Utilities, Functions and Chaining!




//5.1 Log out 30 random numbers between 20 and 100

function f() {
bla = _.random(20, 100);
    console.log(bla)
}
// _(30).times(f);

//this also spits out weird undefined object 30 times

//5.2 Create a function that can only ever be called once
//don't know what this means... maybe something that starts true, needs to be true to be called and flips to false when called


var paradox = (function() {
    var wehavesomethingincommon = false
    return function () {
        if (!wehavesomethingincommon) {
            wehavesomethingincommon = true;
              console.log("paradox");
        }
    };
})();


// Append a paragraph tag to the body for every person in people. It should end up looking something like this - <p> Hello A, you don't look a day over 20 </p>


_.each( people, function ( value, key, entire_object ) {
  $('body').append("<p>"+"hey " + value.username + ", what's good? You don't look a day over "+value.age+"."+"</p>");
} );



// The Final Exercise

var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 }
];

var startingData = [
  [["groucho", "marx", 1990], ["firstName", "lastName", "born"]],
  [["chico",   "marx", 1987], ["firstName", "lastName", "born"]],
  [["zeppo",   "marx", 2001], ["firstName", "lastName", "born"]],
  [["harpo",   "marx", 1988], ["firstName", "lastName", "born"]],
  [["gummo",   "marx", 1992], ["firstName", "lastName", "born"]]
];
//
// This is really, really difficult, and we don't really expect it to get done. But worth having a think about!
//
// Eventually we want five console.logs that look like the following...
//
// Groucho Marx was born in 1890.
// Chico Marx was born in 1887.
// Zeppo Marx was born in 1901.
// Harpo Marx was born in 1888.
// Gummo Marx was born in 1892.
// You'll need to rearrange the data firstly, then alter the data, then print it out.
//
// A few hints
//
// Have a think before you read these!
//
// The following functions could be helpful
//
// _.chain();
// _.map();
// _.unzip();
// _.object();
// _.invert();
// _.mapObject();
// _.isNaN();
// _.template();
// The steps you could take...
//
// First step is restructuring each one of the nested arrays (_.unzip will help). For example:
// // This...
// [["groucho", "marx", 1990], ["firstName", "lastName", "born"]]
//
// // Needs to become this...
// [["groucho", "firstName"], ["marx", "lastName"], [1990, "born"]]
// You then need to turn them into an object (_.object will help). For example:
// // This...
// [["groucho", "firstName"], ["marx", "lastName"], [1990, "born"]]
//
// // Needs to become this...
// { 1990: "born", groucho: "firstName", marx: "lastName" }
// You then need to flip that object around (_.invert will help). For example:
// // This...
// { 1990: "born", groucho: "firstName", marx: "lastName" }
//
// // Needs to become this...
// { born: "1990", firstName: "groucho", lastName: "marx" }
// You then need to change each value in that object. If the value can be turned into a number, you need to minus 100 from it. If it can't be, you need to make the first letter a capital (_.mapObject, _.isNaN will help) For example:
// // This...
// { born: "1990", firstName: "groucho", lastName: "marx" }
//
// // Needs to become this...
// { born: 1890, firstName: "Groucho", lastName: "Marx" }
// After that, for each object in the startingData, you need to create a template (_.template will help) that receives an object, and console.log a string that looks something like this:
// // This...
// { born: 1890, firstName: "Groucho", lastName: "Marx" }
//
// // Needs to be used to create a string that looks like this...
// "Groucho Marx was born in 1890."
