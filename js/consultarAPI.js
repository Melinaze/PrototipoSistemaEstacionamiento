// var bootstrap = function () {
var url = "https://infraccionesweb.herokuapp.com/api";
var infracciones = '/infracciones';
var tiposInfracciones_id = 'tiposInfraccion/';
var patente = 'AAA000'
var depositos_id = 'depositos/';
var acarreos_id = '/acarreos/'; // hay que poner el numero de infracción

/*var requestInfracciones = function(patente) {
    routaURL = url + patente + infracciones_id;
    return $.ajax(url + patente + infracciones_id, "JSON");
};

var responseExtract = function(attr, response) {
    console.log(response);
    return response[attr];
};*/


var getInfracciones = () => {
    routaURL = url + '/' + patente + infracciones;
    console.log(routaURL);
    fetch(routaURL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        });


};