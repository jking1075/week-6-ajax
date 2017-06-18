
//=================================================================================================================================
//Global Variables

var topics = ["basketball","football","soccer","baseball","hockey","tennis","lacrosse"];


function renderButtons() {
//deleting the sport buttons prior to adding a new button
$("#sports-view").empty();

//looping through the array of sports
for (var i = 0; i < topics.length; i++)
	{
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
$("add-sport").on("click", function(event) {
//ent.prentDefault() prevents the form from trying to submit itself.
event.preventDefault();
//This line will grab the text from the input bos
var sport = $("#sport-input").val().trim();
//The sport from the textbox is then added to our array.
topics.push(sport);

//calling renderButtons which hadles the processing of our sports array
//renderButtons();
});

//calling the renderButtons function to display the initial list of sports
renderButtons();


// getElementsByTagName('')
function createInput() {
        var $input = $('<input type="button" value="#sport-input"/>');
        $input.appendTo($("body"));
    }



	$('button').on('click',function(){
		var x = $(this).attr("q");
		console.log(x);

		var queryURL = "http://api.giphy.com/v1/gifs/search?q="+x+"&api_key=dc6zaTOxFJmzC&limit=10";
	

		$.ajax({url:queryURL,method:'GET'})
			.done(function(response){
				console.log("<p>Rating: "+response.data[0].rating);
				for(var i=0;i<response.data.length;i++){
				$('#sports-view').prepend("<p>Rating: "+response.data[i].rating+"</p>");
				$('#sports-view').prepend("<img src="+response.data[i].images.downsized_still.url+"'>");
				
				}
			})
			

})

	// Event handler for user clicking the select-sport button
  $("#select-sport").on("click", function(event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the artist name
    var sport = $("#sport-input").val().trim();
    console.log(sport);

});
   // console.log(input);
	
