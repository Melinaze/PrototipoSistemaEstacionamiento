// var bootstrap = function () {
var url = "https://infraccionesweb.herokuapp.com/api/";
var infracciones_id = "/infracciones/";
var tiposInfracciones_id = "tiposInfraccion/";
var depositos_id = "depositos/";
var acarreos_id = "/acarreos/"; // hay que poner el numero de infracción

var requestInfracciones = function (patente) {
    return $.ajax(url + patente + infracciones_id);
};

var responseExtract = function (attr, response) {
    console.log(response);
    return response[attr];
};
