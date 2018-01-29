// selecting and checking item's from list
$("ul").on("click", "li", function(){
	$(this).toggleClass("final");

});
// selecting span's and delete items from list

$("ul").on("click", "span", function(event){
	// function parent() for selecting whole li, not just span
	$(this).parent().fadeOut(600, function(){
		$(this).remove();
	});
	event.stopPropagation(); 
});

// creating new to do and input them in list

$("input[type='text']").keypress(function(event){
	// creating if statement
	if(event.which === 13) {
		// variable for saving value from input
		var inp = $(this).val(); 
		$(this).val("");
		// create new li and input the value in it
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + inp + "</li>");
	}

});

// creating a toggle for input

$(".fa-pencil-square-o").click(function(){
	$("input[type='text']").fadeToggle(); 
});
