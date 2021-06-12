const dibujarPolygon = function (coord1, coord2, coord3, coord4, coord5, coord6, color){
    L.polygon([coord1, coord2, coord3,coord4, coord5, coord6]).addTo(map);
    polygon.setStyle({fillColor: color});
    polygon.setStyle({color: color});
    polygon.setStyle({fillOpacity: 0.5});
}