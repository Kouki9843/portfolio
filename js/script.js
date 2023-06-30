// JavaScript Document

// ニュースリストスクロール
$(function(){
	var $newslist = $("a.timeLine_scroll");
	
	$newslist.on("click", function(event){
		event.preventDefault();
		if($(this).parent().next().hasClass("close")){
			$(this).parent().next().removeClass("close");
		}else{
			$(this).parent().next().addClass("close");
		}
	});
});