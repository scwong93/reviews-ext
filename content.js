fetch("https://api.walmartlabs.com/v1/search?apiKey=vck5ypdbw4jnhuceesmjjce5&query=NETGEAR&format=json&callback=foo")
.then(function (response) {
  console.log(response);
    response.text().then(function (responseText) {
        console.log(responseText);
        alert("Found the product");
    });
}).then(function (responseText) {
  if (responseText) {
    var product = responseText[0];
    console.log(product)
    var itemId = product.itemId;
    console.log(itemId);
    fetch(`https://api.walmartlabs.com/v1/reviews/${itemId}?apiKey=vck5ypdbw4jnhuceesmjjce5&format=json&callback=foo`)
    .then(function (response) {
        response.text().then(function (responseText) {
        });
    }).then(function (responseText) {
      var reviews = document.getElementById('reviews');
      var walmartReviews = responseText.reviewText
      for (i in walmartReviews) {
        let li = document.createElement('li');
        li.innerHTML = walmartsReviews[i];
        reviews.append(li);
      }
    });
  }
});




// get item name off screen

// query walmart for product id - https://developer.walmartlabs.com/docs/read/Search_API

// use product id to find reviews

// get ul off screen by id = Reviews

// loop over reviews and create li for each and append to ul
