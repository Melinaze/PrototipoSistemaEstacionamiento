var listaComercios = [];
//var markers = L.markerClusterGroup();
var markerGroup = L.markerClusterGroup({
        iconCreateFunction: function(cluster) {
            return L.divIcon({ html: '<b class = "leaflet-div-icon2">' + cluster.getChildCount() + '</b>' });
        }
    }),
    marker;

var elReyDelPancho = punto(
    "El rey del pancho", -34.5067, -58.705,
    "pancheria",
    "comercio"
);
var dia = punto(
    "Supermercado Dia", -34.5060, -58.710,
    "supermercado",
    "comercio"
);





var setComercios = () => {
    listaComercios.push(elReyDelPancho);
    listaComercios.push(dia);
}


var dibujarComercios = () => {
    for (let i = 0; i < listaComercios.length; i++) {
        markerGroup.addLayer(
            drawer.drawLocationInMap(listaComercios[i], map));
        console.log(markerGroup);
        //setComercioEnMenu(listaComercios[i]);
    }
    map.addLayer(markerGroup);
}

/*var setComercioEnMenu = (comercio) => {

    var li = comercio;

    li.id = nuevoLi;

    li.innerHTML = "<span onclick='eliminar(this)'>X</span>" + nuevoLi;

    document.getElementById("menu").appendChild(li);
}*/
setComercios();
dibujarComercios();


// validacion de marker markerGroup._needsClustering[0]._popup._content == "El rey del pancho - pancheria"