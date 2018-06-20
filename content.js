

/*chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  var activeTab = tabs[0];
  chrome.tabs.sendMessage(activeTab.id, {"message": productTitle});
});*/

var extensionId = "kcpllmimpckifppeknmiakaiaabllkcg";
var productTitle = document.getElementById('productTitle').innerHTML.trim();
console.log(productTitle);
chrome.runtime.sendMessage(extensionId, {"message": productTitle});
