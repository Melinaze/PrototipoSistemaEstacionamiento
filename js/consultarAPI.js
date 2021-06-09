var url = Config.url;
const infracciones = "/infracciones";
const tiposInfracciones_id = "tiposInfraccion/";
const depositos_id = "depositos/";
const acarreos_id = "/acarreos/"; // hay que poner el numero de infracción

var getInfraccionesByPatente = function (patente) {
    routaURL = url + "/" + patente + infracciones;
    console.log(routaURL);
    var lista = [];
    fetch(routaURL)
        .then((res) => res.json())
        .then((data) => {
            data.infracciones.forEach((infraccion) => {
                listaInfracciones.innerText += `Id: ${infraccion.id}   Lugar: ${infraccion.direccionRegistrada} Monto: ${infraccion.montoAPagar}\n`;
                if (infraccion.existeAcarreo) {
                    console.log("hay acarreo");
                }
            });
        });
    return lista;
};

//getInfracciones('ABC123')
