'use strict';

let getReview = document.getElementById('reviews-btn');
chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

getReview.onclick = function(element) {

  // get item name off screen

  // query walmart for product id - https://developer.walmartlabs.com/docs/read/Search_API

  // use product id to find reviews
  // get ul off screen by id = Reviews
  // loop over reviews and create li for each and append to ul
  chrome.tabs.executeScript({
    file: "jsfile.js"
  });
};
