/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// A $( document ).ready() block.
$( document ).ready(function() {  
  console.log( "ready!" );



const createTweetElement = function(tweetData) {

  const article = `<article id="tweet-container">
<div class="tweetId">
  <div>
    <tr>
      <img class="human-picture" style="-webkit-user-select: none;margin: auto;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;" src="${tweetData.user.avatars}">
    </tr>
    <a class="container-name">xxx${tweetData.user.name}</a>
  </div>
  <div>
    <a class="container-email">${tweetData.user.handle}</a>
  </div>
</div>

<div class="old-text">
  <p>${tweetData.content.text}</p>
</div>

<div class="tweet-footer">
  <div><p>10 days ago</p></div>
  <div class="tweet-edit">
    <i type="submit" class="submit far fa-flag"></i>
    <i type="submit" class="submit fas fa-retweet"></i>
    <i type="submit" class="submit far fa-heart"></i>
    <!-- <input type="submit" value="&hearts;"> -->
  </div>
</div>

</article>`;
 return article;

}
// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}



// $(#tweet-container).append(article);
// document.body.innerHTML = article;
 
const $tweet = createTweetElement(tweetData);
// Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure

});