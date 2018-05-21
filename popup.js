'use strict';

let getReview = document.getElementById('reviews-btn');

getReview.onclick = function(element) {
  chrome.tabs.executeScript({
    file: "content.js"
  });
};
