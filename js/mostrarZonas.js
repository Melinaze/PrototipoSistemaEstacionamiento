//Poligono para marcar las zonas verdes más centricas
var polygon = L.polygon([
    [-34.5429, -58.7121],
    [-34.5655, -58.6901],
    [-34.5557, -58.708],
]).addTo(map);
polygon.setStyle({ fillColor: "green" });
polygon.setStyle({ color: "green" });
polygon.setStyle({ fillOpacity: 0.5 }); // transparencia de relleno

//Poligono para marcar las zonas azules menos centricas
var polygon2 = L.polygon([
    [-34.5346, -58.6513],
    [-34.5154, -58.7681],
    [-34.5637, -58.6608],
]).addTo(map);
polygon2.setStyle({ fillColor: "blue" });
polygon2.setStyle({ color: "blue" });
polygon2.setStyle({ fillOpacity: 0.5 }); // transparencia de relleno
