var btnMenu = document.getElementById("btn-menu");
var nav = document.getElementById("nav");
btnMenu.addEventListener("click", function() {
    nav.classList.toggle("ocultar");
});

var btnInfracciones = document.getElementById("infracciones_menu");
var cartelPatente = document.getElementById("cartelPatente");
btnInfracciones.addEventListener("click", (e) => {
    cambiarVisibilidadDOM(cartelPatente);
});

var consultarPatenteBtn = document.getElementById("consultarPatenteBtn");
var inputPatente = document.getElementById("inputPatente");


consultarPatenteBtn.addEventListener("click", () => {
    if (inputPatente.value.length != 0) {
        console.log("a");
        var listaDeInfracciones = [];
        listaDeInfracciones = getInfraccionesByPatente(inputPatente.value.toUpperCase());
        console.log(listaDeInfracciones);
    }
});