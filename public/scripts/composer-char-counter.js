$(document).ready(function() {
  // --- our code goes here ---
  console.log("the composer is loaded");
  $('#tweet-text').keyup(function(i) {
    let tweetLength= i.target.value.length;
    $('.tweet-counter').text(140 - tweetLength);
    if (tweetLength > 140) {
      $('.tweet-counter').css('color', 'red');
    } else {
      $('.tweet-counter').css('color', 'black');
    }
  })
});