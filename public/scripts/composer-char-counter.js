$(document).ready(function() {
  // --- our code goes here ---
  console.log("the composer is loaded");
  $('#tweet-text').keyup(function(i) {
    let tweetLength= i.target.value.length;
    $('.counter').tex(140 - tweetLength);
    if (tweetLength > 140) {
      $('.counter').css('color', 'red');
    } else {
      $('.counter').css('color', 'black');
    }
  })
});