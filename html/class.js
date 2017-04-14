/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-13 14:53:54
 * @version $Id$
 */
$(init)
function init(){
	$("body").on('click','#bin',function(event){
		event.preventDefault();
		alert("ok");
	}
)
	
}

$(document).ready(function(){
  $(".ui-up").click(function(){
  $(".ui-up").fadeOut();
  $(".ui-down").fadeOut();
  $(".ui-up1-big").fadeIn();
  $(".ui-up1-big-center").fadeIn();
  });
  $(".ui-up1-big-center").click(function(){
  $(".ui-up").fadeIn();
  $(".ui-down").fadeIn();
  $(".ui-up1-big").fadeOut();
  $(".ui-up1-big-center").fadeOut();
  });
});





