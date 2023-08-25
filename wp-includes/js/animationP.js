$(document).ready(function(){

	setTimeout(showanimation,5000);
	function showanimation(){
		$("#imgani1").attr("src","1.gif");
	}

	$("#btnanion").click(function(){
		$("#imgani1").attr("src","1.gif");
	});
	$("#btnanioff").click(function(){
		$("#imgani1").attr("src","1.jpg");
	});
});