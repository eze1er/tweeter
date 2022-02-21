// const { text } = require("body-parser");

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// A $( document ).ready() block.
$(document).ready(function() {
  $( "#error" ).hide();
  $( "#error1" ).hide();

  // function to load tweet in
  function loadTweets() {
    $.get("/tweets").then(function(data) {
      renderTweets(data);
    });
  }
  // loadTweets is call first when we start to fill the old tweets
  loadTweets();
  // variable for avoid the repetition in execution of program
  const $form = $('#compose-tweet');
  // always is the document ready
  $form.on("submit", function(event) {
    event.preventDefault();

    // check the empty or too long tweet
    // we used .hide and .show for deal with the error message
    const $inputText = $('#tweet-text').val();
    const maxChar = 140;
    if ($inputText === null || $inputText === '') {
      $( "#error" ).hide();
      $( "#error1" ).show();
    } else if ($inputText.length > maxChar) {
      $(".tweet-counter").val(maxChar).removeClass("counter-black").addClass('counter-red');
      $( "#error1" ).hide();
      $( "#error" ).show();
    } else {
      $(".tweet-counter").val(maxChar).removeClass("counter-red").addClass('counter-black');
      $( "#error1" ).hide();
      $( "#error" ).hide();
      // serialize the tweets
      $.post("/tweets", $form.serialize())
        .done(function(data) {
          $('#tweets-container').empty();
          loadTweets();
          $('textarea').val('');
          
        });
    }
  });

});



