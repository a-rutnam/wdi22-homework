// # Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').
// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.
// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
//
//
// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

var answerArray = ["F","O","X"];

var guessArray = ["","",""];

var allGuesses = [];

var hangman = 0;

var checkForHangman = function() {
  if (hangman == 6) {
    console.log("Sorry, you died.");
    return hangman;
  }
}

var guessLetter = function(letter) {
  allGuesses.push(letter);
  hangman += 1;

  for (var i = 0; i < answerArray.length; i++) {
    if (letter == answerArray[i]) {
      guessArray[i] = letter;
      console.log(guessArray);
      console.log('Well done, correct guess!');
      console.log(allGuesses);
      checkForHangman();
    }
  }
}



// // # Array and Functions Bonus Material
// //
// // 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

var maxOfTwoNumbers = function(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
    return num1;
  } else if (num1 < num2) {
    console.log(num2);
    return num2;
  } else {
    console.log("Numbers are equal")
  }
}

maxOfTwoNumbers(2, 200);

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

var maxOfThree = function(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(num1);
  } else if (num2 > num1 && num2 > num3) {
    console.log(num2);
  } else if (num3 > num1 && num3 > num2) {
    console.log(num3);
  } else {
    console.log("Something, somewhere is equal")
  }
}

maxOfThree(1,2,3)

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

var vowelCheck = function(letter) {
  if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
    console.log("true");
  } else {
    console.log("false");
  }
}

vowelCheck("a");

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

var numbers = [1,2,3,4,5];

var sumArray = function(numbers) {
  for (var i = 0; i < numbers.length; i++){
    var numbers[i]++;
  }
}

console.log(sumResult);


// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
