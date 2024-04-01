console.log("hii from inde.js")

setInterval(function(){
    console.log('hello from js file')

fetch("https://api.quotable.io/random")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        let randomQuote = data.content;
        console.log(randomQuote);
        // Replace "quote" with the id of the HTML element where you want to display the quote
        document.getElementById("Quote").innerHTML = randomQuote;
    })
    .catch(error => {
        console.error('Error fetching quote:', error);
    });

},5000)