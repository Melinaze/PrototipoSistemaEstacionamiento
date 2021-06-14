var listaComercios = [];
//var markers = L.markerClusterGroup();
var markerGroup = L.markerClusterGroup({
        iconCreateFunction: function(cluster) {
            return L.divIcon({ html: '<b class = "leaflet-div-icon2">' + cluster.getChildCount() + '</b>' });
        }
    }),
    marker;

var elReyDelPancho = punto(
    "El rey del pancho", -34.5067, -58.705,
    "pancheria",
    "comercio"
);
var dia = punto(
    "Supermercado Dia", -34.5060, -58.710,
    "supermercado",
    "comercio"
);





var setComercios = () => {
    listaComercios.push(elReyDelPancho);
    listaComercios.push(dia);
}


var dibujarComercios = () => {
    for (let i = 0; i < listaComercios.length; i++) {
        markerGroup.addLayer(
            drawer.drawLocationInMap(listaComercios[i], map));
        console.log(markerGroup);
        //setComercioEnMenu(listaComercios[i]);
    }
    map.addLayer(markerGroup);
}

var setComercioEnMenu = (comercio) => {

   // var li = comercio;
   var li = document.createElement('li');


    //li.id = nuevoLi;
   // console.log(comercio.getNombre())
   li.innerHTML = comercio.getNombre();
    
   document.getElementById("menu").appendChild(li);    
    
    
}

setComercios();





// validacion de marker markerGroup._needsClustering[0]._popup._content == "El rey del pancho - pancheria"

btnMostrarComercios.addEventListener("click", () => {
    for (let i = 0; i < listaComercios.length; i++) {
        setComercioEnMenu(listaComercios[i]);
        dibujarComercios(); //habria q modificar un por el dibujar, o separarlo del drawer pq 
        //dibuja dos veces el punto grande en rojo
    }

})

function find_li(contenido) //no funca muy bien 
        {
            var el = document.getElementById("menu").getElementsByTagName("li");
            for (var i=0; i<el.length; i++)
            {
                if(el[i].innerHTML==contenido)
                    return false;
            }
            return true;
        }