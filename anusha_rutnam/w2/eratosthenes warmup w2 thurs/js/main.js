// var sieve = function (limit) {
//   var numbersToCheck = []
//
//   for (var i = 2; i < limit; i++) {
//     // push to numbersToCheck array}
//
//     if
// // square root of number is a whole number (can you check this?) it not a prime
// // any thing with integer sq root is not a prime ???
// };// this isn't as below because the sqrt finder is another operation that takes time/energy(?)

//
// sieve(20);

//solution
var sieve = {

number: [],
counter: 0,

  calculatePrimes: function(max){

  this.counter = 0;//reset each time we call calculatePrimes

    //initialise all numbers in the range to True for prime
    for (var i = 0; i < max; i++) {
      this.numbers[i] = true;//
    }


// iterate through all the numbers in our range
      for (var i = 2; i < this.numbers.length; i++) {
        var currentNumber = i; //helps with readability//

        for (var j = currentNumber+1; j < this.numbers.length; j++) {
          if ((this.numbers[j]===true)&&(j% currentNumber === 0)){
            this.numbers[j] = false
          }//if
          this.counter++
        }//inner for

      }//outer for
      console.log(this.numbers);
  },
printPrimes: function (primes){
  //output our results in an array
  // can join array as well to make a long starting
  var primesList = {};
  for (var i = 0; i < primes.length; i++) {
    if (primes[i] === true) {
      primesList.push(i)
    }
  }
console.log("primes: " primesList.length);
}//print primes
}




// The Sieve of Eratosthenes
//
// The Sieve of Eratosthenes is a simple, ancient algorithm for finding all prime numbers up to any given limit.
//
// Create your range, starting at two and ending at the given limit.
//
// The algorithm consists of repeating the following over and over:
//
// take the next available unmarked number in your list (it is prime)
// remove all the multiples of that number (they are not prime)
// Repeat until you don't have any possible primes left in your range.
//
// When the algorithm terminates, all the numbers in the list that have not been removed are prime.
//
// Do this in Javascript!
