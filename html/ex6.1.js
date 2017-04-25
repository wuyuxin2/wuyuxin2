/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-25 18:51:38
 * @version $Id$
 */

$(init)
function init() {
    $(".picture-back").hide();
    $("body").on('click', 'li', showimg);
    $(".picture-back").on('click',function(){$(".picture-back").fadeToggle();})
    
}
function showimg(e) {
    $(".picture-back").fadeToggle();
    var url=$(e.target).attr("src");
    $(".picture img").attr("src",url);

}
