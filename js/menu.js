btnMenu.addEventListener("click", function () {
    nav.classList.toggle("ocultar");
});

btnInfracciones.addEventListener("click", (e) => {
    listaInfracciones.innerHTML = "";
    cambiarVisibilidadDOM(cartelPatente);
});



consultarPatenteBtn.addEventListener("click", () => {
    listaInfracciones.innerHTML = "";
    if (inputPatente.value.length != 0) {
        console.log("a");
        var listaDeInfracciones = [];
        listaDeInfracciones = getInfraccionesByPatente(
            inputPatente.value.toUpperCase()
        );
        console.log(listaDeInfracciones);
    }
});
