/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-25 19:59:14
 * @version $Id$
 */

var num=1;
var length=1;
var i;

$(init)

function init() {
    $("body").on('click', '.add', function(event) {
        var item = $(".item");
        	++num;
        $(".table").append("<div class='item'><div class='example'></div><div class='delete'>Delete</div></div>");
        	++length;
		for(i=0;i<length;++i){
			$(".example").eq(i).text(i+1);
 		}
	});
	$("body").on('click', '.delete', function(event) {
   		var index = $(this).parent().index();
   		--length;
   		--num;
		$(this).parent().remove();
		for(i=0;i<length;++i){
			$(".example").eq(i).text(i+1);
	}
 });
 }
