var extensionId = "kcpllmimpckifppeknmiakaiaabllkcg";
var productTitle = document.getElementById('productTitle').innerHTML.trim();
chrome.runtime.sendMessage(extensionId, {"message": productTitle});
