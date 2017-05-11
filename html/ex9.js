/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-05 08:15:01
 * @version $Id$
 */
var map = new BMap.Map("myMap"); 
var point = new BMap.Point(116.404, 39.915);
map.centerAndZoom(point,15);




window.setTimeout(function() {
  map.panTo(new BMap.Point(116.409, 39.918));
}, 2000); 
/*
var marker = new BMap.Marker(point);// 创建标注    
map.addOverlay(marker);
marker.addEventListener("click", function(){    
 alert("您点击了标注");    
});

marker.enableDragging();    
marker.addEventListener("dragend", function(e){    
 alert("当前位置：" + e.point.lng + ", " + e.point.lat);    
})*/

/*var opts = {
  width: 250, // 信息窗口宽度    
  height: 100, // 信息窗口高度    
  title: "Hello" // 信息窗口标题   
}
var infoWindow = new BMap.InfoWindow("World", opts); // 创建信息窗口对象    
map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口
*/
/*//搜索服务
map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
var local = new BMap.LocalSearch(map, {
  renderOptions: {
    map: map
  }
});
local.search("天安门");
//BMap.LocalSearch还提包含searchNearby和searchInBounds方法，为您提供周边搜索和范围搜索服务
*/
/*
map.centerAndZoom(new BMap.Point(116.404, 39.915), 14);
var transit = new BMap.TransitRoute(map, {
  renderOptions: {
    map: map,
    panel: "result"
  }
});
transit.search("王府井", "西单");*/


map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
var local = new BMap.LocalSearch(map, {
  pageCapacity: 8,
  renderOptions: {
    map: map,
    panel: "result"
  }
});
local.search("中关村");