// var bootstrap = function () {
var url = Config.url;
const infracciones = '/infracciones';
const tiposInfracciones_id = 'tiposInfraccion/';
const depositos_id = 'depositos/';
const acarreos_id = '/acarreos/'; // hay que poner el numero de infracción


var getInfraccionesByPatente = function(patente) {
    routaURL = url + '/' + patente + infracciones;
    console.log(routaURL);
    var lista = []
    fetch(routaURL)
        .then(res => res.json())
        .then(data => {
            lista = data.infracciones;

        });
    return lista;
};

//getInfracciones('ABC123')