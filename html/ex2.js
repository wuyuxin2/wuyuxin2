/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-04 00:18:02
 * @version $Id$
 */


function myFunction11(event) {
    var table = document.getElementById("table");
    document.getElementById("table").style.backgroundColor = "red";
    
}


function myFunction12() {
	var table = document.getElementById("table");
    var myDate = new Date();
    var td = table.rows[0].cells[1];
    td.innerHTML = myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + myDate.getDate();

}

function myFunction21() {
    var table = document.getElementById("table");
    var row = table.insertRow(2);
    row.innerHTML = "create a new row!";
}

function myFunction22() {
   var table = document.getElementById("table");
    table.deleteRow(1);

}

function myFunction31(event) {
    x = event.clientX;
    y = event.clientY;
    alert("X 坐标: " + x + ", Y 坐标: " + y);
}

function myFunction32() {
    window.open("https://www.taobao.com/");
}
