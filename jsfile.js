fetch("https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js")
.then(function (response) {
    response.text().then(function (responseText) {
        console.log(responseText);
        alert("Done using Fetch!");
    });
});
