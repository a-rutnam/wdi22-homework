$(document).ready(function () {
  console.log( "The page is ready" );


//rather than the following two, i'd rather have a non dom var that starts at zero and then takes the sum of the adjust arrays - is that  a better idea?
var $currentSavingsBalance = parseFloat($('#savingsBalance').text().split("$")[1])
var $currentChequeBalance = parseFloat($('#chequeBalance').text().split("$")[1])

//fundamental question: why does following array not populate unless whole code pasted to console?
var savingsAdjustArray = [0];
var chequeAdjustArray = [0];



//sum of array, don't know what to do with it - ideally make it the currentSavingsBalance rather than above referring to DOM?:
// var newBalance = function () {newBalance = savingsAdjustArray.reduce((x, y) => x + y);
// $('#savingsBalance').text("$"+newBalance)
// }



  $( "#savingsDeposit" ).click(function() {

    var $savingsAdjust = parseFloat($('#savingsAmount').val())

    $currentSavingsBalance = ($currentSavingsBalance+$savingsAdjust)

    $('#savingsBalance').text("$"+$currentSavingsBalance)
    savingsAdjustArray.push($savingsAdjust);

//why doesn't this work?:
    if ($currentSavingsBalance === 0) {
      $('.account').css({"background-color":"red"});
    }
    }); //savings deposit



  $( "#savingsWithdraw" ).click(function() {
    // why doesn't this if else statement work???:
    if ($savingsAdjust > $currentSavingsBalance)  { ($currentSavingsBalance = $currentSavingsBalance)
      alert ('unsufficient funds');}
    //
    else  {

      var $savingsAdjust = parseFloat($('#savingsAmount').val())

      $currentSavingsBalance = ($currentSavingsBalance-$savingsAdjust)

      $('#savingsBalance').text("$"+$currentSavingsBalance);
    // }//else
      savingsAdjustArray.push('-'+$savingsAdjust);
    }//else
      }); //savings withdraw



  $( "#chequeDeposit" ).click(function() {

    var $chequeAdjust = parseFloat($('#chequeAmount').val())

    $currentChequeBalance = ($currentChequeBalance+$chequeAdjust)

    $('#chequeBalance').text("$"+$currentChequeBalance)

    chequeAdjustArray.push($chequeAdjust);


    }); //cheque deposit


  $( "#chequeWithdraw" ).click(function() {

    var $chequeAdjust = parseFloat($('#chequeAmount').val())

    $currentChequeBalance = ($currentChequeBalance-$chequeAdjust)

    $('#chequeBalance').text("$"+$currentChequeBalance);
    // }
    chequeAdjustArray.push('-'+$chequeAdjust);

    }); //cheque withdraw




// //don't let '$' be part of input, numbers and decimal points only, add alert later for bad characters,


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


});
