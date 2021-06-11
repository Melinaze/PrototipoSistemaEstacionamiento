var url = Config.url;
const infracciones = "/infracciones";
const tiposInfracciones_id = "tiposInfraccion/";
const depositos_id = "depositos/";
const acarreos_id = "/acarreos/"; // hay que poner el numero de infracción

// var drawer = Drawer();

var getInfraccionesByPatente = function (patente) {
    routaURL = url + "/" + patente + infracciones;
    console.log(routaURL);
    var lista = [];
    fetch(routaURL)
        .then((res) => res.json())
        .then((data) => {
            data.infracciones.forEach((infraccion) => {
                var remolc = "";
                if (infraccion.existeAcarreo) {
                    remolc = " remolcado";
                    getDepositoByPatente(patente, infraccion.id);
                }
                listaInfracciones.innerHTML += `Id: ${infraccion.id}   Lugar: ${infraccion.direccionRegistrada} Monto: ${infraccion.montoAPagar} ${remolc}<br>`;
            });
        });
    return lista;
};

var getDepositoByPatente = function (patente, id) {
    //infraccionesweb.herokuapp.com/api/ABC123/acarreos/42
    https: routaURL = url + "/" + patente + acarreos_id + `${id}`;
    console.log(routaURL);
    fetch(routaURL)
        .then((res) => res.json())
        .then((data) => {
            if (ultimoMarker != undefined) {
                map.removeLayer(ultimoMarker);
                console.log("Ultimo marker distino de null");
            }
            var lat = data.acarreo.deposito.ubicacion.lat;
            var long = data.acarreo.deposito.ubicacion.lon;
            var nombre = data.acarreo.deposito.nombre;
            var descripcion = `Telefono ${data.acarreo.deposito.telefono} Horarios: ${data.acarreo.deposito.horarios}`;
            var depo = punto(nombre, lat, long, descripcion, "deposito");
            map.setView([lat, long], 14);
            drawer.drawLocationInMap(depo, map);
        });
};

//getInfracciones('ABC123')
