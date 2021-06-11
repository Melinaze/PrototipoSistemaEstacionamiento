var map = L.map("map").setView([-34.5067, -58.7064], 14);

L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18,
}).addTo(map);

L.control.scale().addTo(map);

const drawer = Drawer();

//Poligono para marcar las zonas
var polygon = L.polygon([
    [-34.5429, -58.7121],
    [-34.5067, -58.7064],
    [-34.4237,  -58.5794]
]).addTo(map);
