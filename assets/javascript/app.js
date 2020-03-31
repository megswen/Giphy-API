// Create a "topics" array of different kinds of topics
var topics = ["Cats", "Dogs", "Horses", "Hamsters", "Birds"];

// Function to create buttons for each item in the topics array and displays them in the #button-box div
function renderButtons() {
    for (var i = 0; i < topics.length; i++) {
        button = $('<button>'+ topics[i] + '</button>');
        $(button).appendTo("#button-box");
        button.addClass("animals");
    }
}

renderButtons();

// On click function that retreives the top 10 gifs for the button that was clicked
$(".animals").click(function() {
    var animals = $(this).attr("data-animal");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animals + "&api_key=brAL4zu8mGOUouJNI30dQQ68Zaji8rFY&limit=10";

    // AJAX call to get the gif data
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        // Console.log response
        console.log(response);

        // Create a var called results and set it equal to response.data
        var results = response.data;

        // For loop for the results
        for (var x = 0; x < results.length; x++) {

            // Create a div and store it in a var called topicsDiv
            var topicsDiv = $("<div>");
            // Create a paragraph tag and store it in a var called rating and set the text to the rating retreived
            var rating = $("<p>").text("Rating: " + results[x].rating);
            console.log("Rating: " + results[x].rating);
            // Create an image tag and store it in a var called topicsImage
            var topicsImage = $("<img>");
            // Set the image's src to results[i]'s fixed_height.url.
            topicsImage.attr("src", results[x].images.fixed_height.url);
            // Append the rating var to the topicsImage var
            topicsImage.append(rating);
            // Append the topicsImage var to the topicsDiv var
            topicsDiv.append(topicsImage);
            // Prepend the topicsDiv var to the #gifreturn-box div
            $("#gifreturn-box").prepend(topicsDiv);
        }

    });

});

// On click function to start and stop the animation of the gifs
