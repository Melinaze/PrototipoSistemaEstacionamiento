var map = L.map("map").setView([-34.5067, -58.7064], 14);

L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18,
}).addTo(map);

L.control.scale().addTo(map);

const drawer = Drawer();

//Poligono para marcar las zonas verdes más centricas
/* var polygon = L.polygon([
    [ -34.5429, -58.7121],
    [-34.5655,-58.6901],
    [-34.5557,-58.7080]
]).addTo(map);
polygon.setStyle({fillColor: 'green'});
polygon.setStyle({color: 'green'});
polygon.setStyle({fillOpacity: 0.5}); // transparencia de relleno
*/ 

//Poligono para marcar las zonas azules menos centricas
/* var polygon2 = L.polygon([
    [ -34.5346, -58.6513],
    [-34.5154, -58.7681],
    [-34.5637,-58.6608]
]).addTo(map);
polygon2.setStyle({fillColor: 'blue'});
polygon2.setStyle({color: 'blue'});
polygon2.setStyle({fillOpacity: 0.5}); // transparencia de relleno

*/


