var url = Config.url;
const infracciones = "/infracciones";
const tiposInfracciones_id = "tiposInfraccion/";
const depositos_id = "depositos/";
const acarreos_id = "/acarreos/";
var tieneAcarreo;
var finalizoProm; // hay que poner el numero de infracción

// var drawer = Drawer();

var getInfraccionesByPatente = function (patente) {
    tieneAcarreo = false;
    finalizoProm = false;
    routaURL = url + "/" + patente + infracciones;
    console.log(routaURL);
    listaInfracciones.innerText = "";
    fetch(routaURL)
        .then((res) => res.json())
        .then((data) => {
            listaInfracciones.innerHTML = tablaColumnas();
            data.infracciones.forEach((infraccion) => {
                var remolc = "No";

                if (infraccion.existeAcarreo) {
                    remolc = "Si";
                    tieneAcarreo = true;
                    getDepositoByPatente(patente, infraccion.id);
                }
                // hacer otr aconsulta por el tipo de infraccion

                // listaInfracciones.innerHTML += `Id: ${infraccion.id}  Lugar: ${infraccion.direccionRegistrada} Monto: ${infraccion.montoAPagar} ${remolc}<br>`;
                listaInfracciones.innerHTML += tablaInfraccion(
                    infraccion.id,
                    infraccion.direccionRegistrada,
                    infraccion.montoAPagar,
                    remolc
                );
                finalizoProm = true;
                if (finalizoProm && tieneAcarreo) {
                    document.getElementById("map").style.visibility = "initial";
                }
                getTipoInfraccionesByID(infraccion.tipoInfraccion);
            });
        });
};

var getDepositoByPatente = function (patente, id) {
    //infraccionesweb.herokuapp.com/api/ABC123/acarreos/42
    routaURL = url + "/" + patente + acarreos_id + `${id}`;
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
            map.addLayer(ultimoMarker);
        });
};

async function getTipoInfraccionesByID(idInfrac) {
    routaURL = url + "/" + tiposInfracciones_id + `${idInfrac}`;
    console.log(routaURL);
    fetch(routaURL)
        .then((res) => res.json())
        .then((data) => {
            var descripcion = `Tipo de Infracccion: ${data.descripcion}`;
            return descripcion;
        });
}

//getInfracciones('ABC123')
