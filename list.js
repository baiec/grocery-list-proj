var array = [];

//This function takes the textarea value, puts it in an array,
//clears the textarea, then adds a new <p> and puts the textarea value on the page as clickable text.
$("#submit").click(function(){
	var item = $("#inputList").val();
	array.push(item);
	$("#inputList").val("");
	$("#list").append("<p id=''></p>");
	$("#buttons").append(item + "<br>");
});

function thing(item){

}

