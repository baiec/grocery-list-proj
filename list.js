//This function takes the textarea value, puts it in an array,
//clears the textarea, then adds a new <p>,
//and puts the textarea value on the page as clickable text.
var undo = [];
var i = 0;
$("#submit").click(function(){
	var item = $("#inputList").val();
	$("#inputList").val("");
	$("#list").append("<li class='hi'>"+item+"</li>");
});

$(document).on('click','.hi',function(){
	$("#toBuy").append($(this).clone().removeClass("hi").addClass("buy").appendTo("#buy"));
	document.getElementById("sparkle").play();
});
	
$(document).on('click','.buy',function(){
	undo.push(this);
	document.getElementById("no").play();
	$(this).remove();
});

$("#undo").click(function(){
	i = undo.length;
	$("#toBuy").append(undo[i-1]);
	undo.splice(i-1,1);
});


$(document).on('mouseover','.hi',function(){
	$(this).animate({
		opacity: 2
	});
	$(document).on('mouseout',this,function(){
		$(this).animate({

		});
	});
});





