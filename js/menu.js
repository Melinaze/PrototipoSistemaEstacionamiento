btnMenu.addEventListener("click", function () {
    nav.classList.toggle("ocultar");
});

btnInfracciones.addEventListener("click", (e) => {
    listaInfracciones.innerHTML = "";
    cambiarVisibilidadDOM(cartelPatente);
    document.getElementById("map").style.visibility = "hidden";
});

consultarPatenteBtn.addEventListener("click", () => {
    listaInfracciones.innerHTML = "";

    if (inputPatente.value.length != 0) {
        getInfraccionesByPatente(inputPatente.value.toUpperCase());
        console.log(
            `Con innerHTML ${
                document.getElementById("listaInfracciones").innerHTML.trim()
                    .length === 0
            }`
        );

        if (listaInfracciones.innerHTML == "") {
        }
    }
});
