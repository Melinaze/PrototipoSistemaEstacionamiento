var listaComercios = [];

//var markers = L.markerClusterGroup();
var markerGroupComercios = L.markerClusterGroup({
        iconCreateFunction: function (cluster) {
            return L.divIcon({
                html:
                    '<b class = "leaflet-div-icon2">' +
                    cluster.getChildCount() +
                    "</b>",
            });
        },
    }),
    marker;

var comercio1 = punto(
    "El principe del pancho - Kiosco",
    -34.548804, -58.715324,
    "Callao 4820 - Horarios de atención: 10hs a 20hs",
    "comercio"
);
var comercio2 = punto(
    "Supermercado dia - supermercado",
    -34.5511,
    -58.7029,
    "Helguera 2020 - Horarios de atención: 08hs a 20hs",
    "comercio"
);

var comercio3 = punto(
    "Mundo nuevo - Libreria",
    -34.555581, -58.706807,
    "Marcos Paz 1920 - Horarios de atención: 08hs a 18hs",
    "comercio"
);


var comercio4 = punto(
    "Casa E - Libreria ",
    -34.5459,
    -58.7014,
    "Letonia 4545 - Horarios de atención: 09hs a 18hs",
    "comercio"
);

var comercio5 = punto(
    "Disco - Supermercado ",
    -34.564707, -58.694199,
    "Letonia 4545 - Horarios de atención: 09hs a 18hs",
    "comercio"
);

var comercio6 = punto(
    "Grido - Heladeria",
    -34.555520, -58.689771,
    "Letonia 4545 - Horarios de atención: 09hs a 18hs",
    "comercio"
);

var setComercios = () => {
    listaComercios.push(comercio3);
    listaComercios.push(comercio1);
    listaComercios.push(comercio2);
    listaComercios.push(comercio4);
    listaComercios.push(comercio5);
    listaComercios.push(comercio6);
    agregarMarkersComercio();
};

var agregarMarkersComercio = () => {
    for (let i = 0; i < listaComercios.length; i++) {
        markerGroupComercios.addLayer(
            drawer.drawLocationInMap(listaComercios[i], map)
        );
        // console.log(markerGroup);
        //setComercioEnMenu(listaComercios[i]);
    }
};
var dibujarComercios = () => {
    map.removeLayer(markerGroupEstacionamiento);
    map.removeLayer(miAutoMarker);
    map.addLayer(markerGroupComercios);
};

var setComercioEnMenu = (comercio) => {
    // var li = comercio;
    var li = document.createElement("li");

    //li.id = nuevoLi;
    // console.log(comercio.getNombre())
    li.innerHTML = comercio.getNombre();

    document.getElementById("listaMenu").appendChild(li);
};

setComercios();

// validacion de marker markerGroup._needsClustering[0]._popup._content == "El rey del pancho - pancheria"

btnMostrarComercios.addEventListener("click", () => {
    document.getElementById("listaMenu").innerHTML = "";
    document.getElementById("labelMenu").innerHTML = "";
    for (let i = 0; i < listaComercios.length; i++) {
        setComercioEnMenu(listaComercios[i]);
    }
    dibujarComercios(); //habria q modificar un por el dibujar, o separarlo del drawer pq
    document.getElementById("labelMenu").innerHTML = "Comercios";
});

function find_li(contenido) {
    //no funca muy bien
    var el = document.getElementById("menu").getElementsByTagName("li");
    for (var i = 0; i < el.length; i++) {
        if (el[i].innerHTML == contenido) return false;
    }
    return true;
}
