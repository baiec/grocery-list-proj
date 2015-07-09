//This function takes the textarea value, puts it in an array,
//clears the textarea, then adds a new <p>,
//and puts the textarea value on the page as clickable text.
$("#submit").click(function(){
	var item = $("#inputList").val();
	$("#inputList").val("");
	$("#list").append("<li class='hi'>"+item+"</li>");
});

$(document).on('click','li',function(){
		$("#toBuy").append($(this).clone().appendTo("#buy"));
});
	






