// Create a "topics" array of different kinds of topics
var topics = ["Hell yeah", "OMG", "Hangry", "Smug", "Shocked", "Offended", "Crazy"];
// Create a button var
var button;

// Function to create buttons for each item in the topics array and displays them in the #button-box div
function renderButtons() {
    for (var i = 0; i < topics.length; i++) {
        button = $('<button>'+ topics[i] + '</button>');
        $(button).appendTo("#button-box");
    }
}

renderButtons();

// On click function that retreives the top 10 gifs for the button that was clicked
$(button).click(function displayGifs() {
    var reaction = $(this).attr("data-reaction");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + reaction + "&api_key=brAL4zu8mGOUouJNI30dQQ68Zaji8rFY&limit=10";

    // AJAX call to get the gif data
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        // Console.log response
        console.log(response);

        // Create a var called results and set it equal to response.(where ever the image info is)

        // For loop for the results

            // Create a div and store it in a var called topicsDiv

            // Create a paragraph tag and store it in a var called p and set the text to the rating retreived

            // Create an image tag and store it in a var called topicsImage

            // Append the p var to the topicsImage var

            // Append the topicsImage var to the topicsDiv var

            // Prepend the topicsDiv var to the #gifreturn-box div

    });

});

// On click function to start and stop the animation of the gifs
