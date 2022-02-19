$(document).ready(function() {
  // --- our code goes here ---
  $('#tweet-text').keyup(function(i) {
    let tweetLength= i.target.value.length;
    $('.tweet-counter').text(140 - tweetLength);
    if (tweetLength > 140) {

      $('.tweet-counter').removeClass("counter-black").addClass('counter-red');
    } else {
      $('.tweet-counter').removeClass("counter-red").addClass('counter-black');
    }
  })
});
