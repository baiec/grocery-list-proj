//This function takes the textarea value, puts it in an array,
//clears the textarea, then adds a new <p>,
//and puts the textarea value on the page as clickable text.
//
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

//help mode
var helpM = false;
$("#helpMode").click(function(){
	if(helpM===false){
		helpM = true;
		$("#buy").css("background-color","green");
	}
	else{
		helpM = false;
		$("#buy").css("background-color","#33BDBA");
	}
});


$(document).on('mouseover','#removeMode',function(){
	if (helpM === true){
		$("#toolTips").html("Press the X button to toggle delete mode, <br> which allows you to delete things<br> on the red side. When it is yellow, <br> you are in delete mode.");
	}
	$(document).on('mouseleave','#removeMode',function(){
		$("#toolTips").html("");
	});

});


//When this button is clicked, it will toggle the sound effects the website plays.
//Click this help icon, so that when you hover over things you don’t understand,  it will display what that item does.
$(document).on('mouseover','#submit',function(){
	if (helpM === true){

	}
});

$(document).on('mouseover','#undo',function(){
	if(helpM === true){
		$("#toolTips").html("Click this button to undo an <br>accidental delete, so you can bring<br> the item back. It will return <br>the most recent item.");
	}
	$(document).on('mouseleave','#undo',function(){
		$("#toolTips").html("");
	});
});

$(document).on('mouseover','#helpMode',function(){
	$("#toolTips").html("Click this help icon, <br>so that when you hover over things<br> you don’t understand, it<br> will display what that item does.");
	$(document).on('mouseleave','#helpMode',function(){
		$("#toolTips").html("");
	});
});

$(document).on('mouseover','#toggleNoise',function(){
	if(helpM===true){
		$("#toolTips").html("When this button is clicked, <br>it will toggle the sound effects<br> the website plays.");
	}
	$(document).on('mouseleave','#toggleNoise',function(){
		$("#toolTips").html("");
	});
});

//Type what you normally run out of into this text box. Then hit submit to turn your input into a button. Whenever you click that button, it will add the text on the "to buy" side. 
$(document).on('mouseover','#submit',function(){
	if(helpM===true){
		$("#toolTips").html("When you click this button, <br>it will put whatever you put in <br>the text box onto the page.");
	}
	$(document).on('mouseleave','#submit',function(){
		$("#toolTips").html("");
	});
});

$(document).on('mouseover','#inputList',function(){
	if(helpM===true){
		$("#toolTips").html("Type what you normally run<br> out of into this text box. <br>Then hit submit to turn <br>your input into a button.");
	}
	$(document).on('mouseleave','#inputList',function(){
		$("#toolTips").html("");
	});
});

//
$(document).on('mouseover','.hi',function(){
	if(helpM===true){
		$("#toolTips").html("Whenever you click one of these items, <br>it will add the text on <br>the 'to buy' side.");
	}
	$(document).on('mouseleave','.hi',function(){	
		$("#toolTips").html("");
	});
});

$(document).on('mouseover','.buy',function(){
	$("#toolTips").html("These are the items you need to buy. <br>Click on them to remove them.");
	$(document).on('mouseleave','.buy',function(){
		$("#toolTips").html("");
	});
});




