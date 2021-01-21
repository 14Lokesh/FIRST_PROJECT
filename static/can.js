// chech off specific Todos by clicking
$("ul").on("click", "li" ,function(){
	// if li is gray
$(this).toggleClass("complited")
  });
//	//turn it black
	//else
	//turn it gray
//	if ($(this).css("color") === "rgb(128, 128, 128)") {
	//	$(this).css({
	//	color : "black",
	//	textDecoration: "none"});
	//}

//	else{
//	$(this).css({
//		color : "rgb(128, 128, 128)",
//		textDecoration: "line-through"
//	});
//}
// click on X to dele todo
$("ul").on("click", "span" ,function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
	if (event.which === 13) {
		//grabing new input todo text from input
		var todoText = $(this).val();
		// creat a new li and add to ul
		$(this).val("");
			$("ul").append("<li><span><i class= 'fas fa-trash-alt'></i></span>  " + todoText + "</li>")
			// remove the input
			
	}
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});