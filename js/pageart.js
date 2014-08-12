

$(document).ready(function(){	
	$("#qa a").click(function(){
		$("#qa .a").css("display","none");
	$(this).parent().parent().find(".a").slideToggle("fast");
	
	
});
});
	
