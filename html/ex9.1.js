/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-04 14:13:29
 * @version $Id$
 */
var p;
var map = new BMap.Map("myMap");


var myGeo = new BMap.Geocoder();

myGeo.getPoint("西湖风景区", function(point) {
    if (point) {
        p = point;
        map.centerAndZoom(point, 15);
        /*var marker = new BMap.Marker(p); // 创建标注    
        map.addOverlay(marker);
        marker.enableDragging();
        marker.addEventListener("dragend", function(e) {
            alert("当前位置：" + e.point.lng + ", " + e.point.lat);
        });*/

    }
}, "杭州市");


var local = new BMap.LocalSearch(map, {
  renderOptions: {
    map: map,
    autoViewport: true,
     panel: "result"
  }
});

local.searchNearby("宾馆", "西湖风景区");
