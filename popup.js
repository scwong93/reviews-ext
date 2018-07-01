'use strict';

var productTitle;

chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message) {
      productTitle = request.message;
    }
  }
);

let getItems = document.getElementById('reviews-btn');

getItems.onclick = () => {
  fetch("https://api.walmartlabs.com/v1/search?apiKey=vck5ypdbw4jnhuceesmjjce5&query="+productTitle+"&format=json")
    .then(function (response) {
      return response.json();
    }).then(function (responseText) {
      if (responseText) {
        var product = responseText.items[0];
        var itemId = product.itemId;
        fetch(`https://api.walmartlabs.com/v1/reviews/${itemId}?apiKey=vck5ypdbw4jnhuceesmjjce5&format=json`)
          .then(function (response) {
            return response.json();
          }).then(function (responseText) {
            var reviews = document.getElementById('reviews');
            var walmartReviews = responseText.reviews;
            walmartReviews.map(review => {
              var li = document.createElement('li');
              li.innerHTML = review.reviewText;
              reviews.append(li);
            })
          });
      }
    });
}
