var url = Config.url;
const infracciones = "/infracciones";
const tiposInfracciones_id = "tiposInfraccion/";
const depositos_id = "depositos/";
const acarreos_id = "/acarreos/";
var tieneAcarreo;
var finalizoProm;

const tipoDeInfraccion = (id, tipo) => {
    this.id = id;
    this.tipo = tipo;
    this.getId = () => id;
    this.getTipo = () => tipo;
    return { getId, getTipo };
};

const tiposInfraccionArray = [];
fetch(url + "/" + tiposInfracciones_id)
    .then((res) => res.json())
    .then((data) => {
        data.tipos.forEach((tipo) => {
            tiposInfraccionArray.push(
                tipoDeInfraccion(tipo.id, tipo.descripcion)
            );
        });
    });

const obtenerTipoInfraccion = (id) => {
    for (let i = 0; i < tiposInfraccionArray.length; i++) {
        if (id == tiposInfraccionArray[i].getId()) {
            return tiposInfraccionArray[i].getTipo();
        }
    }
    return tiposInfraccionArray[-1].getTipo();
};

var getInfraccionesByPatente = function(patente) {
    tieneAcarreo = false;
    finalizoProm = false;
    routaURL = url + "/" + patente + infracciones;
    listaInfracciones.innerText = "";
    fetch(routaURL)
        .then((res) => res.json())
        .then((data) => {
            if (data.infracciones.length > 0) {
                listaInfracciones.innerHTML = tablaColumnas();

                data.infracciones.forEach((infraccion) => {
                    var remolc = "No";

                    if (infraccion.existeAcarreo) {
                        remolc = "Si";
                        tieneAcarreo = true;
                    }

                    console.log(
                        `Tipo de infraccion ${obtenerTipoInfraccion(
                        infraccion.tipoInfraccion
                    )}`
                    );

                    listaInfracciones.innerHTML += tablaInfraccion(
                        infraccion.id,
                        infraccion.direccionRegistrada,
                        infraccion.montoAPagar,
                        remolc,
                        obtenerTipoInfraccion(infraccion.tipoInfraccion)
                    );

                    if (tieneAcarreo) {
                        getDepositoByPatente(patente, infraccion.id);
                    }
                    finalizoProm = true;
                    if (finalizoProm && tieneAcarreo) {
                        document.getElementById("map").style.visibility = "initial";
                    }
                });
            } else {
                listaInfracciones.innerText +=
                    "La patente no registra infracciones";
            }
        });
};

var getDepositoByPatente = function(patente, id) {
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