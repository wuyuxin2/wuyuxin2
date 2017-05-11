/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-04 14:13:29
 * @version $Id$
 */

var map = new BMap.Map("myMap");
var point = new BMap.Point(120.016789, 30.294284);
map.centerAndZoom(point, 15);
map.addControl(new BMap.ScaleControl());
map.addControl(new BMap.NavigationControl());
map.addControl(new BMap.MapTypeControl());


var marker = new BMap.Marker(point); // 创建标注    
map.addOverlay(marker); //添加覆盖物*/


marker.enableDragging(); //开启拖拽功能
marker.addEventListener("dragend", function(e) {

    alert("当前位置：" + e.point.lng + ", " + e.point.lat);
});


var school_building = [
    [120.014346, 30.295157, "体育场", "img/体育场.jpg"],
    [120.016987, 30.29536, "1号超市", "img/1号超市.jpg"],
    [120.012315, 30.29628, "篮球场", "img/篮球场.jpg"],
    [120.022215, 30.298728, "图书馆", "img/图书馆.jpg"],
    [120.019816, 30.296393, "恕园11号楼", "img/恕园11号楼.jpg"],
    [120.019017, 30.295266, "恕园7号楼", "img/恕园7号楼.jpg"],
    [120.020436, 30.295718, "恕园2号楼", "img/恕园2号楼.jpg"]
];

var opts = {
    width: 250,  
    height: 200,  
}

for (var i = 0; i < school_building.length; i++) {
    var marker = new BMap.Marker(new BMap.Point(school_building[i][0], school_building[i][1]));
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.style.width = "250px";
    img.style.height = "150px";
    img.src = school_building[i][3];
    div.append(img);
    div.append(school_building[i][2]);
    map.addOverlay(marker);

    OnClick(div, marker);


}

function OnClick(div, marker) {
    marker.addEventListener("click", function(e) {
        var infoWindow = new BMap.InfoWindow(div, opts);
        map.openInfoWindow(infoWindow, e.target.getPosition());
    });
}
