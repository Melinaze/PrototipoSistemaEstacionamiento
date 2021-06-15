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

var estacionamiento1 = punto(
    "COD100",
    -34.5512,
    -58.7034,
    "LIBRE",
    "estacionamiento"
);
var estacionamiento2 = punto(
    "COD501",
    -34.5511,
    -58.7029,
    "LIBRE",
    "estacionamiento"
);

var estacionamiento3 = punto(
    "COD102",
    -34.5509,
    -58.7034,
    "LIBRE",
    "estacionamiento"
);


var estacionamiento4 = punto(
    "COD105 ",
    -34.5510,
    -58.7026,
    "LIBRE",
    "estacionamiento"
);

var miAuto = punto(
	"Auto Estacionado", 
	-34.5509,
    	-58.7034,
	"Mi Auto", 
	"Estacionamiento activo");

var miAutoMarker = drawer.drawLocationInMap(miAuto, map);

const agregarMarkersEstacionamiento = () => {
    for (let i = 0; i < listaLugarsLibres.length; i++) {
        markerGroupEstacionamiento.addLayer(
            drawer.drawLocationInMap(listaLugarsLibres[i], map)
        );
    }
};

var setEstacionamientos = () => {
    listaLugarsLibres.push(estacionamiento1);
    listaLugarsLibres.push(estacionamiento2);
    listaLugarsLibres.push(estacionamiento3);
    listaLugarsLibres.push(estacionamiento4);

    agregarMarkersEstacionamiento();
};

var dibujarEstacionamientos = () => {
    map.addLayer(markerGroupEstacionamiento);
   L.markerClusterGroup({ polygonOptions: {color: 'red'} });
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
        document.getElementById("labelMenu").innerHTML = "Estacionamientos libres";
    });

document.getElementById("btnMostrarMiAuto").addEventListener("click", () => {
    document.getElementById("listaMenu").innerHTML = "";
    document.getElementById("labelMenu").innerHTML = "";
    map.addLayer(miAutoMarker);
    document.getElementById("listaMenu").innerHTML = " Dirección auto estacionado : San Jose 1515";
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
