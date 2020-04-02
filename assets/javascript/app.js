// Create a "topics" array of different kinds of topics
var topics = ["The Office", "Parks and Rec", "Rick and Morty", "That 70's Show", "Breaking Bad", "Seinfeld", "Hey Arnold", "Sponge Bob"];

// Function to create buttons for each item in the topics array and displays them in the #button-box div
function renderButtons() {
    for (var i = 0; i < topics.length; i++) {
        button = $('<button>'+ topics[i] + '</button>');
        $(button).appendTo("#button-box");
        button.addClass("tvshows");
        button.attr("data-name", topics[i]);
    }
}

renderButtons();

// On click function that retreives the top 10 gifs for the button that was clicked
$(".tvshows").click(function() {
    var tvShows = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + tvShows + "&api_key=brAL4zu8mGOUouJNI30dQQ68Zaji8rFY&limit=10";

    // AJAX call to get the gif data
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        // Create a var called results and set it equal to response.data
        var results = response.data;
        console.log(results);

        // For loop for the results
        for (var x = 0; x < results.length; x++) {
            // Create a div and store it in a var called topicsDiv and put the image and rating into that div
            var topicsDiv = $("<div>");
            var rating = $("<p>").text("Rating: " + results[x].rating);
            var topicsImage = $("<img>");
            topicsDiv.addClass("gif");
            topicsImage.attr("src", results[x].images.fixed_height.url);
            topicsDiv.append(rating);
            topicsDiv.append(topicsImage);
            $("#gifreturn-box").prepend(topicsDiv);
        }
    });
});

// On click function to start and stop the animation of the gifs
$(".gif").click(function animate() {
// $(".gif").on("click", function() {
    var state = $(this).attr("data-state");
    var still = $(this).attr("data-still");
    var animate = $(this).attr("data-animate");
    if (state === "still") {
        state = "animate";
        console.log("still");
        $(this).attr("src", animate);
        $(this).attr("data-state", state);
    } else if (state === "animate") {
        console.log("animate");
        state = "still";
        $(this).attr("src", still);
        $(this).attr("data-state", state);
    }
});