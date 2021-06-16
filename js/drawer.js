var ultimoMarker;

var Drawer = function() {
    return {
        drawLocationInMap: drawLocationInMap,
    };

    /******************************************************************************
     * Función para dibujar una ubicacion en un mapa.
     */
    function drawLocationInMap(location, map) {
        console.log("Dibujando la ubicacion: " + location.getNombre());

        if (location.esEstacionamiento()) {
            var icon = estacionamientoLibreIcon;
        } else if (location.esComercio()) {
            var icon = comercioIcon;
        } else if (location.esMiAuto()) {
            var icon = autoEstacionadoIcon;
        } else {
            var icon = depositoIcon;
        }

        var info = location.getNombre() + " - " + location.getDescripcion();

        // Creamos un marker.
        var ultimoMarker = L.marker(
                L.latLng(location.getLat(), location.getLong()), {
                    icon: icon,
                }
            )
            .bindPopup(info)
        return ultimoMarker;
    }
};

var comercioIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

var estacionamientoLibreIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

var depositoIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

var autoEstacionadoIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
})