
btnMostrarZonas.addEventListener("click", () => {
	document.getElementById("listaMenu").innerHTML = "Precio zonas verdes: segunda hora $20.Luego de la cuarta hora, $25. Precio zonas azules: segunda hora         $12.Luego de la cuarta hora, $20";
	document.getElementById("labelMenu").innerHTML = "";
	var polygon = L.polygon([
    	[-34.5429, -58.7121],
    	[-34.5655, -58.6901],
    	[-34.5557, -58.708],
	]).addTo(map);
	polygon.setStyle({ fillColor: "green" });
	polygon.setStyle({ color: "green" });
	polygon.setStyle({ fillOpacity: 0.5 }); // transparencia de relleno

	var polygon2 = L.polygon([
    	[-34.5346, -58.6513],
    	[-34.5328, -58.7009],
    	[-34.5513,-58.7035],
	]).addTo(map);
	polygon2.setStyle({ fillColor: "blue" });
	polygon2.setStyle({ color: "blue" });
	polygon2.setStyle({ fillOpacity: 0.5 }); // transparencia de relleno

	document.getElementById("labelMenu").innerHTML = "Zonas";

});




