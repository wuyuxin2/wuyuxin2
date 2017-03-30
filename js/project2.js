/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-16 14:12:32
 * @version $Id$
 */

//动态定义函数指针
//先取出，
/*document.querySelector('#d11').addEventListener('click',function(){
	alert('a');
})*/


var tdList=document.querySelectorAll('td')

for(i=0;i < tdList.length;i++){

	item = tdList[i];
	/*item.addEventListener('click',function(){
	alert('a');
})*/
	item.addEventListener('click',showMsg)
}

function showMsg(event){
	//console.log("click at row 1 column 1")//在console里面出现
	//console.log("document.getElementById('d11').innerHTML");
	console.log(event.target.innerHTML);
	alert('a');
}
