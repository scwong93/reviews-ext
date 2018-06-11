fetch("https://api.walmartlabs.com/v1/search?apiKey=vck5ypdbw4jnhuceesmjjce5&query=NETGEAR&format=json")
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
      var walmartReviews = responseText.reviews
      for (i in walmartReviews) {
        var li = document.createElement('li');
        li.innerHTML = walmartReviews[i].reviewText;
        reviews.append(li);
      }
    });
  }
});
