fetch("https://api.walmartlabs.com/v1/search?apiKey=vck5ypdbw4jnhuceesmjjce5&query=NETGEAR")
.then(function (response) {
  console.log(response);
    response.text().then(function (responseText) {
        console.log(responseText);
        alert("Found the product");
    });
}).then(function (responseText) {
  if (responseText) {
    let product = responseText[0];
    let itemId = product.itemId;
    console.log(itemId);
  }
});
fetch("https://api.walmartlabs.com/v1/reviews/{itemId}?apiKey=vck5ypdbw4jnhuceesmjjce5&format=json")
.then(function (response) {
  console.log(response);
    response.text().then(function (responseText) {
      console.log(responseText);
    });
}).then(function (responseText) {
  let reviews = document.getElementById('reviews');
  let walmartReviews = responseText.reviews
  for (i in walmartReviews) {
    reviews.append(walmartReviews[i]);
  }
});



// get item name off screen

// query walmart for product id - https://developer.walmartlabs.com/docs/read/Search_API

// use product id to find reviews

// get ul off screen by id = Reviews

// loop over reviews and create li for each and append to ul
