// var bootstrap = function () {
const url = "https://infraccionesweb.herokuapp.com/api";
const infracciones = '/infracciones';
const tiposInfracciones_id = 'tiposInfraccion/';
const patente = 'AAA000'
const depositos_id = 'depositos/';
const acarreos_id = '/acarreos/'; // hay que poner el numero de infracción

/*var requestInfracciones = function(patente) {
    routaURL = url + patente + infracciones_id;
    return $.ajax(url + patente + infracciones_id, "JSON");
};

var responseExtract = function(attr, response) {
    console.log(response);
    return response[attr];
};*/


const getInfracciones = () => {
    routaURL = url + '/' + patente + infracciones;
    console.log(routaURL);
    fetch(routaURL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        });


};