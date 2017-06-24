
//=================================================================================================================================
//Global Variables

var topics = ["basketball","football","soccer","baseball","hockey","tennis","lacrosse"];




//=================================================================================================================================
//Functoins

function renderButtons() {
	//deleting the sport buttons prior to adding a new button
	console.log(topics);
	$("#sports-view").empty();


	//looping through the array of sports
	for (var i = 0; i < topics.length; i++){
		//Dynamicaly generating buttons for each sport.
		var a = $("<button>");
		//add a class
		a.addClass("sport");
		//Adding a data-attrubute with a value of the topics at index i
		a.attr("q", topics[i]);
		a.html(topics[i]);
		//Providing the button's text with a value of the sport at index i
		$("#sports-view").append(a);

	}
}

//This function handles events where one button is clicked
	$("#add-sport").on("click", function(event) {
	//event.prentDefault() prevents the form from trying to submit itself.
	event.preventDefault();
	//This line will grab the text from the input bos
	var sport = $("#sport-input").val().trim();
	//The sport from the textbox is then added to our array.
	topics.push(sport);
	console.log(sport);
	

	//calling renderButtons which hadles the processing of our sports array
	//renderButtons();
	renderButtons();
});

//calling the renderButtons function to display the initial list of sports
renderButtons();


// getElementsByTagName('')
function createInput() {
        var input = $("#sport-input");
        topics.push(input);
        renderButtons();
    }




	$("#sports-view").on('click', "button",function(){
		var x = $(this).attr("q");
		console.log(x);

		var queryURL = "http://api.giphy.com/v1/gifs/search?q="+x+"&api_key=dc6zaTOxFJmzC&limit=10";
	

		$.ajax({url:queryURL,method:'GET'})
			.done(function(response){
				console.log("<p>Rating: "+response.data[0].rating);
				for(var i=0;i<response.data.length;i++){
					console.log(response.data[i])
				$('#sports-view').prepend("<p>Rating: "+response.data[i].rating+"</p>");
				$('#sports-view').prepend("<img class='gif' data-state='still' data-still="+response.data[i].images.downsized_still.url+" data-animate="+response.data[i].images.original.url+" src="+response.data[i].images.downsized_still.url+"'>");
				
				}
			})
			

})


$(document).on("click", 'img', function() {
	console.log('i clicked a gif');
	// The attr jQuery method allows us to get or set the value of any attribute on our HTML element
	var state = $(this).attr("data-state");		
	// If the clicked image's state is still, update its src attribute to what its data-animate value is.
	// Then, set the image's data-state to animate
	// Else set src to the data-still value
	if (state === "still") {
	
		//console.log()
	$(this).attr("data-state", "animate");
//	} else {
//		$('#sports-view').prepend("<img src="+response.data[i].images.downsized_still.url+"'>");
			
	$(this).attr("src", $(this).attr("data-animate"));
	
	} else {
		console.log("Im in the else");
		$(this).attr("src", $(this).attr("data-still"));
		$(this).attr("data-state", "still");
	}
});


// $(".gif").on("click", function() {
// 	console.log('i clicked a gif');
// 	// The attr jQuery method allows us to get or set the value of any attribute on our HTML element
// 	var state = $(this).attr("data-state");
// 	// If the clicked image's state is still, update its src attribute to what its data-animate value is.
// 	// Then, set the image's data-state to animate
// 	// Else set src to the data-still value
// 	if (state === "still") {
// 		debugger;
// 	("<img src="+response.data[i].images.downsized_animate.url+"'>");
// 	console.log()
// 	$(this).attr("data-state", "animate");
// 	} else {
// 		debugger;
// 		$('#sports-view').prepend("<img src="+response.data[i].images.downsized_still.url+"'>");
			
// 	$(this).attr("src", $(this).attr("data-still"));
// 	$(this).attr("data-state", "still");
// 	}
// });

	// Event handler for user clicking the select-sport button
  $("#select-sport").on("click", function(event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the artist name
    var sport = $("#sport-input").val().trim();
    console.log(sport);
    topics.push(sport);
    renderButtons();

});
   // console.log(input);
	
