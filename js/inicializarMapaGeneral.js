var map = L.map("map").setView([-34.5513223,-58.7035104], 14);

L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18,
}).addTo(map);

L.control.scale().addTo(map);

document.getElementById("listaMenu").innerHTML = "Precio zonas verdes: segunda hora $20.Luego de la cuarta hora, $25. Precio zonas azules: segunda hora         $12.Luego de la cuarta hora, $20";
	document.getElementById("labelMenu").innerHTML = "";
	var polygon = L.polygon([
    	[-34.532963, -58.701491],
    	[-34.551605, -58.721381],
        [-34.562759, -58.705950],
    	[-34.543855, -58.686705],
       // [-34.568882, -58.712033],
	]).addTo(map);
	polygon.setStyle({ fillColor: "green" });
	polygon.setStyle({ color: "green" });
	polygon.setStyle({ fillOpacity: 0.5 }); // transparencia de relleno

	var polygon2 = L.polygon([
        [-34.562759, -58.705950],
        [-34.543855, -58.686705],
        [-34.554419, -58.672552],
        [-34.572685, -58.692304],

	]).addTo(map);
	polygon2.setStyle({ fillColor: "blue" });
	polygon2.setStyle({ color: "blue" });
	polygon2.setStyle({ fillOpacity: 0.5 }); // transparencia de relleno

	document.getElementById("labelMenu").innerHTML = "Zonas";

const drawer = Drawer();




