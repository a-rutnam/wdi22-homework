//
//
// var mainWord = function (originalWord) {
// [originalWord].split('')
//
//   }

//
// anagramChecker: function (newPossAnagram1) {
// // can't control what people are going to parse into this function (in terms of case)
// word = newPossAnagram1.todoupperCase();
// //initial value for the total score of the word
// var sum = 0;
// //itterate over the word that is input and then look at each character
//   for (var i = 0; i < newPossAnagram1.length; i++) {
//   var letter = newPossAnagram1[i];
//   //use of this below, figure out
//     for(var key in this.mainWord){
//     //includes gives back boolean
//       if (this.mainWord[key].includes(letter)){
//
//         console.log(newPossAnagram1 +" includes the letters "+ key);
//
//       }//if
//     }//for...in
//   }//word letter
// },


// mainWord ("listen");

// newPossAnagram1("enlists");

// Anagram Detector
//
// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the first word.
//
// In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".
//
// Suggestions
//
// Start out by getting this working with discrete functions.
// If you feel comfortable with that, try to put all your functions, collections, etc, into an object.


//solution
var anagramChecker = {
  //inside object no semi colons only commas
anagram:[],
// sort can work well on arrays so make input word an array (do you have to split?)
// yes, split word and house in an array, alphabetise and then compare to potential anagrams
customSort: function (word){
  // var temp = word.split('');
  // temp = temp.sort();
  // temp = temp.join('')
// bettery way, this is chaining :

// without the following return, you couldn't use customs sort in console, it doesn't save??
return word.split('').sort().join('');
//in console type anagramChecker to checl


  //don't compare two arrays, so turn arrays back into strings
  //splits after every letter
  // join with '' in () makes the array join w/o commas
  // in console 'catarpiller'.split('').sort().join('')

},
    checkForAnagrams: function(word, candidateWords){
      word = word.toLowerCase();
      word = this.customSort(word);
  //this is object

  // i on first iteration would be the string enlists (first string in array)
  ["enlists", "google", "inlets", "bannana"]
  for (var i = 0; i < candidateWords.length; i++) {
    var candidate = this.customSort(candidateWords[i].toLowerCase())

    if(candidate === word){
      this.anagrams.push(candidateWords[i])
    }

    }
    return this.anagrams
  }
};

//write in your log what you expect to return
console.log('expecting to see ["inlets, 'net'"]' );
