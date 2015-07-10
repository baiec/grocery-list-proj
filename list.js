//This function takes the textarea value, puts it in an array,
//clears the textarea, then adds a new <p>,
//and puts the textarea value on the page as clickable text.
var toBuy = [];
var undo = [];
$("#submit").click(function(){
	var item = $("#inputList").val();
	$("#inputList").val("");
	$("#list").append("<li class='hi'>"+item+"</li>");
	toBuy.push(item);
});

$(document).on('click','.hi',function(){
	$("#toBuy").append($(this).clone().removeClass("hi").addClass("buy").appendTo("#buy"));
});
	
$(document).on('click','.buy',function(){
	undo[0] = $(this).val();
	alert("hi");
	$(this).remove();
});

$("#undo").click(function(){
	$("#toBuy").append("<li class='buy'>"+undo+"</li>");
});


/*
$(".hi").hover(function(){
	$(".hi").animate({
		color:'orange',
		height:'+=5px',
		width:'+=5px'
	});
});
*/





