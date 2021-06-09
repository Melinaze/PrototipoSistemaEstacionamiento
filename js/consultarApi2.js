var bootstrap = function() {
	//Para el ejemplo
    var url = "https://infraccionesweb.herokuapp.com/api/";
    var infracciones_id = "/infracciones/";
    var tiposInfracciones_id = "tiposInfraccion/";
    var depositos_id = "depositos/";
    var acarreos_id = "/acarreos/"; // hay que poner el numero de infracción
	
	
  

    fetch(url + "ABC123" + infracciones_id)  //pedimos la ubicacion al servidor
    .then(data => data.json() ) //parseamos la respuesta a un JSON
    .then(data => data['infraccion'] ) // extraemos la ubicacion de la respuesta del servidor 
    .then(localizacion => {
        fetch(url+infracciones_id+localizacion.tiposInfracciones_id) // resolvemos el estado
        .then( data => data.json())
    })




}

$(bootstrap)