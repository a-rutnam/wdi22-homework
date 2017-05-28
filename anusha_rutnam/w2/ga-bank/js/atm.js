var $balances = $('.balance');


$balances.each(function () {
    var test = (this.id);
    console.log(
      parseFloat($('#'+test).text().split("$")[1])

    );//log
}
);




var $chequeBalance =   parseFloat($('#chequeBalance').text().split("$")[1])
var $savingsBalance =  parseFloat($('#savingsBalance').text().split("$")[1])
var $chequeAdjust = parseFloat($('#chequeAmount').val())
var $savingsAdjust = parseFloat($('#chequeAmount').val())
var $allALinks = $('ul a');

$allALinks.each(function() {

  var url = $('.balance').attr('href');
  console.log(this);
  console.log('original url', url);


  $paragraphs.each(function () {
    var $this = $( this );
    $this.html( $this.html() + " wowee!!!" );
  });

//don't let '$' be part of input, numbers and decimal points only, add alert later for bad characters
// var $chequeChange = parseFloat($('#chequeAmount').val().split("$")[1])


//if the cheque deposit button is clicked
$( "#chequeDeposit" ).click(function() {
  $chequeBalance = $chequeBalance + $chequeAdjust
  // console.log('bla');
  //when this button is clicked take the .text of the input and add it to the $cheque balance. dry is probably not doing this separately for both savings and cheque. action should probs not be a dom thing?
});





var balanceIdArray = [];

$('.balance').each(function () {
    var test = (this.id);
    console.log(
      parseFloat($('#'+test).text().split("$")[1])

    );//log
}
);

//works:
var idArray = [];
$('.red').each(function () {
    idArray.push(this.id);
});

//this get the number
parseFloat ($('#___Balance.balance').text().split("$")[1])


$paragraphs.each(function () {
  var $this = $( this );
  $this.html( $this.html() + " wowee!!!" );
});




// * Add functionality so that a user can deposit money into one of the bank accounts.

//
//
// #Title: ATM App
//
// ###Type:
// - Lab
//
// ###Summary
// - This lab will help you practice JavaScript functions and manipulating the DOM with jQuery.
// - You'll be selecting elements, manipulating HTML, and manipulating style along
// with building out the logic using JavaScript.
//
// ###Objectives:
// - DOM selection, appending, removal, updating
//
// ###Specification:

// * Keep track of the checking and savings balances somewhere

// * Add functionality so that a user can deposit money into one of the bank accounts.

// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Add functionality so that a user can withdraw money from one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
// * Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
// * When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account.
// * What happens when the user wants to withdraw more money from the checking account than is in the account? These accounts have overdraft protection, so if a withdrawal can be covered by the balances in both accounts, take the checking balance down to $0 and take the rest of the withdrawal from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// * Make sure there is overdraft protection going both ways.
// * Are there ways to refactor your code to make it DRYer?




// Luke Hammer [12:42 PM]
// @channel When thinking about how achieve a good Separation of Concerns in your bank homework, consider this:
// 1. Ideally you could have some kind of Javascript variable (HINTobjectHINT) which is the primary record of your bank balance data, as opposed to querying the HTML `div` elements whenever you need to get the current balance for an account (which would mean DOM elements are the primary record of your bank balance info... not ideal).
// 2. _i.e._ You can think of the HTML as something you just get new inputs from, via the click handler callbacks you set up on the deposit/withdraw buttons, which retrieve the amount entered in the appropriate form `input` element.
// 3.  The amount you retrieve from the `input` could then be passed as an argument to one of the banking functions (which don't themselves know anything about the DOM, just about accounts and amounts).
// 4. The banking function should update the Javascript object which is the primary store of the bank balance data.
// 5. When the button click callback has finished calling the banking function, you should update the _visual representation_ of those balances in the HTML, i.e you might want a function called `updateUI()` that just refreshes the appropriate `div` elements on the screen with the data from the JS object, or turns the `div` red if there's a problem. In other words, it's not the concern of the banking functions to directly update the HTML UI. (edited)
//
// [12:42]
// _a very similar process could be applied to Project 0_
