
// render tweet function
const renderTweets = function(data) {
  data.forEach(element => {
    // createTweetElement(element);
    const $tweet = createTweetElement(element);
    $('#tweets-container').prepend($tweet); // to add it to the page so we can make sure
  });
  
};

// create element function
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

};


