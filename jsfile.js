fetch("http://api.walmartlabs.com/v1/search?apiKey=vck5ypdbw4jnhuceesmjjce5&query=NETGEAR")
.then(function (response) {
  console.log(response);
    response.text().then(function (responseText) {
        console.log(responseText);
        alert("Done using Fetch!");
    });
})


// get item name off screen

// query walmart for product id - https://developer.walmartlabs.com/docs/read/Search_API

// use product id to find reviews

// get ul off screen by id = Reviews

// loop over reviews and create li for each and append to ul
