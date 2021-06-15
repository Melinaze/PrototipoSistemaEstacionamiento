btnMenu.addEventListener("click", function() {
    nav.classList.toggle("ocultar");
});

btnInfracciones.addEventListener("click", (e) => {
    listaInfracciones.innerHTML = "";
    cambiarVisibilidadDOM(cartelPatente);
    cambiarValorImput(inputPatente);
    document.getElementById("map").style.visibility = "hidden";
});

consultarPatenteBtn.addEventListener("click", () => {
    document.getElementById("map").style.visibility = "hidden";
    listaInfracciones.innerHTML = "";

    if (inputPatente.value.length != 0) {
        getInfraccionesByPatente(inputPatente.value.toUpperCase());
        delay(200).then(() => {
            console.log(
                `Con innerHTML ${
                    document
                        .getElementById("listaInfracciones")
                        .innerHTML.trim().length === 0
                }`
            );

            if (listaInfracciones.innerHTML.lengthn == 223) {
                listaInfracciones.innerText +=
                    "La patente no registra infracciones";
                document.getElementById("map").style.visibility = "hidden";
            }
        });
    }
});