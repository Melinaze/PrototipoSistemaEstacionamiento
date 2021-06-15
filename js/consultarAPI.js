var url = Config.url;
const infracciones = "/infracciones";
const tiposInfracciones_id = "tiposInfraccion/";
const depositos_id = "depositos/";
const acarreos_id = "/acarreos/";
var tieneAcarreo;
var finalizoProm; 

var getInfraccionesByPatente = function (patente) {
    tieneAcarreo = false;
    finalizoProm = false;
    routaURL = url + "/" + patente + infracciones;
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
                }
                

                listaInfracciones.innerHTML += tablaInfraccion(
                    infraccion.id,
                    infraccion.direccionRegistrada,
                    infraccion.montoAPagar,
                    remolc
                );

                if (tieneAcarreo) {
                    getDepositoByPatente(patente, infraccion.id);
                }
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
    rutaURL = url + "/" + patente + acarreos_id + `${id}`;
    console.log(rutaURL);
    fetch(rutaURL)
        .then((res) => res.json())
        .then((data) => {
            if (ultimoMarker != undefined) {
                map.removeLayer(ultimoMarker);
            }
            var lat = data.acarreo.deposito.ubicacion.lat;
            var long = data.acarreo.deposito.ubicacion.lon;
            var nombre = data.acarreo.deposito.nombre;
            var telefono = data.acarreo.deposito.telefono;
            var horarios = data.acarreo.deposito.horarios;
            var descripcion = `Telefono ${telefono} Horarios: ${horarios}`;
            var depo = punto(nombre, lat, long, descripcion, "deposito");
            map.setView([lat, long], 14);
            ultimoMarker = drawer.drawLocationInMap(depo, map);
            map.addLayer(ultimoMarker);
            agregarInfoRemolque(id, nombre, telefono, horarios);
            colapsadorDeRemolque(id);
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


