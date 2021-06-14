var listaLugarsLibres = [];

//var markers = L.markerClusterGroup();
var markerGroupEstacionamiento = L.markerClusterGroup({
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

var est = punto(
    "Estacionamiento",
    -34.5067,
    -58.709,
    "estacionamiento libre",
    "estacionamiento"
);

var est2 = punto(
    "Supermercado Dia",
    -34.506,
    -58.71,
    "Cod1234",
    "estacionamiento"
);

var miAuto = punto("Auto Estacionado", -34.5067, -58.71, "Mi Auto", "Mi Auto");

var miAutoMarker = drawer.drawLocationInMap(miAuto, map);

const agregarMarkersEstacionamiento = () => {
    for (let i = 0; i < listaLugarsLibres.length; i++) {
        markerGroupEstacionamiento.addLayer(
            drawer.drawLocationInMap(listaLugarsLibres[i], map)
        );
    }
};

var setEstacionamientos = () => {
    listaLugarsLibres.push(est);
    listaLugarsLibres.push(est2);

    agregarMarkersEstacionamiento();
};

var dibujarEstacionamientos = () => {
    map.addLayer(markerGroupEstacionamiento);
};

var setEstacionamientoEnMenu = (estacionamiento) => {
    // var li = comercio;
    var li = document.createElement("li");

    //li.id = nuevoLi;
    // console.log(comercio.getNombre())
    li.innerHTML = estacionamiento.getNombre();

    document.getElementById("listaMenu").appendChild(li);
};

// validacion de marker markerGroup._needsClustering[0]._popup._content == "El rey del pancho - pancheria"

document
    .getElementById("btnMostrarEstacionamientos")
    .addEventListener("click", () => {
        document.getElementById("listaMenu").innerHTML = "";
        document.getElementById("labelMenu").innerHTML = "";
        for (let i = 0; i < listaLugarsLibres.length; i++) {
            setEstacionamientoEnMenu(listaLugarsLibres[i]);
        }
        dibujarEstacionamientos(); //habria q modificar un por el dibujar, o separarlo del drawer pq
        document.getElementById("labelMenu").innerHTML = "Estacionamientos";
    });

document.getElementById("btnMostrarMiAuto").addEventListener("click", () => {
    document.getElementById("listaMenu").innerHTML = "";
    document.getElementById("labelMenu").innerHTML = "";
    map.addLayer(miAutoMarker);
    document.getElementById("listaMenu").innerHTML = "Argregar direccion";
});

function find_li(contenido) {
    //no funca muy bien
    var el = document.getElementById("menu").getElementsByTagName("li");
    for (var i = 0; i < el.length; i++) {
        if (el[i].innerHTML == contenido) return false;
    }
    return true;
}
setEstacionamientos();
// dibujarEstacionamientos();
