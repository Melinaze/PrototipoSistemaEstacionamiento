var url = Config.url;
const infracciones = "/infracciones";
const tiposInfracciones_id = "tiposInfraccion/";
const depositos_id = "depositos/";
const acarreos_id = "/acarreos/"; // hay que poner el numero de infracción

// var drawer = Drawer();

var getInfraccionesByPatente = function(patente) {
    routaURL = url + "/" + patente + infracciones;
    console.log(routaURL);
    listaInfracciones.innerText = "";
    let infra = []
    fetch(routaURL)
        .then((res) => res.json())
        .then((data) => {
            data.infracciones.forEach((infraccion) => {
                var remolc = "";

                if (infraccion.existeAcarreo) {
                    remolc = " remolcado";
                    cambiarVisibilidadDOM(document.getElementById("map"));
                    getDepositoByPatente(patente, infraccion.id);
                }
                // hacer otr aconsulta por el tipo de infraccion

                listaInfracciones.innerHTML += `Id: ${infraccion.id}   Lugar: ${infraccion.direccionRegistrada} Monto: ${infraccion.montoAPagar} ${remolc}<br>`;
            });
        });
};



var getDepositoByPatente = function(patente, id) {
    //infraccionesweb.herokuapp.com/api/ABC123/acarreos/42
    https: routaURL = url + "/" + patente + acarreos_id + `${id}`;
    console.log(routaURL);
    fetch(routaURL)
    .then((res) => res.json())
    .then((data) => {
        if (ultimoMarker != undefined) {
            map.removeLayer(ultimoMarker);
        }
        var lat = data.acarreo.deposito.ubicacion.lat;
        var long = data.acarreo.deposito.ubicacion.lon;
        var nombre = data.acarreo.deposito.nombre;
        var descripcion = `Telefono ${data.acarreo.deposito.telefono} Horarios: ${data.acarreo.deposito.horarios}`;
        var depo = punto(nombre, lat, long, descripcion, "deposito");
        map.setView([lat, long], 14);
        ultimoMarker = drawer.drawLocationInMap(depo, map);
    });
};

//getInfracciones('ABC123')