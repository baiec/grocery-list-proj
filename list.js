//This function takes the textarea value, puts it in an array,
//clears the textarea, then adds a new <p>,
//and puts the textarea value on the page as clickable text.
var undo = [];
var i = 0;
var noise = true;
var toolTips = false;

$(document).ready(function(){
	$("#noiseoff").hide();
});

$("#toggleNoise").click(function(){
	if(noise===true){
		noise = false;
		$("#noiseon").hide();
		$("#noiseoff").show();
	}
	else {
		noise = true;
		$("#noiseoff").hide();
		$("#noiseon").show();
	}
});

$("#submit").click(function(){
	var item = $("#inputList").val();
	$("#inputList").val("");
	$("#list").prepend("<li class='hi'>"+item+"</li>");
});
	
$(document).on('click','.buy',function(){
	undo.push(this);
	if(noise===true){
		document.getElementById("no").play();
	}
	$(this).remove();
});

$("#undo").click(function(){
	i = undo.length;
	$("#toBuy").prepend(undo[i-1]);
	undo.splice(i-1,1);
});

//delete mode
var deletemode = false;
$("#removeMode").click(function(){
	if(deletemode===false){
		deletemode = true;
		$("#items").css("background-color","orange");
	}
	else {
		deletemode=false;
		$("#items").css("background-color","#F52C2C");
	}
});
$(document).on('click','.hi',function(){
	if(deletemode===true){
		$(this).remove();
	}
	else {
		var test = $(this).clone();
		$("#toBuy").prepend(test.removeClass("hi").addClass("buy").prependTo("#buy"));
		if(noise===true){
			document.getElementById("sparkle").play();
		}
	}
});







