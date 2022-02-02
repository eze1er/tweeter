/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];


const renderTweets = function(data){
  data.forEach(element => {
    // createTweetElement(element);
    const $tweet = createTweetElement(element);
    $('#tweets-container').append($tweet); // to add it to the page so we can make sure
  });
  
}


const createTweetElement = function(tweetData) {
  const { user, content, created_at } = tweetData;
  let singleTweetElement = $(`<article class="tweet-component">
        <!-- image-username-refkey -->
        <div class="image-username-refkey">
          <div class="image-username">
            <img src=${user.avatars} alt="" />
            <span>${user.name}</span>
          </div>
          <div>${user.handle}</div>
          </div>
        <!-- tweet contect -->
        <div class="tweet-content">
          ${$("<p>")
            .text(content.text)
            .html()}
        </div>
        <!-- time and reactions icons -->
        <div class="time-reactions">
          <p>${timeago.format(created_at)}</p>
          <div class="icons">
            <i class="submit fas fa-flag"></i>
            <i class="submit fas fa-retweet"></i>
            <i class="submit fas fa-heart"></i>
          </div>
        </div>
      </article>`);
  return singleTweetElement;

}

// A $( document ).ready() block.
$( document ).ready(function() {  

  renderTweets(data);

});
