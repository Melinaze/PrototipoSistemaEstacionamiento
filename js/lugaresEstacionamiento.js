var listaLugarsLibres = [];


var est = punto(
    "Estacionamiento", -34.5067, -58.709,
    "estacionamiento libre",
    "estacionamiento"
);

var miAuto = punto(
    "Auto Estacionado", -34.5067, -58.7100,
    "Mi Auto",
    "Mi Auto"
);


var setEstacionamientos = () => {
    listaLugarsLibres.push(est);
    listaLugarsLibres.push(miAuto);
}


var dibujarEstacionamientos = () => {
    for (let i = 0; i < listaLugarsLibres.length; i++) {
        drawer.drawLocationInMap(listaLugarsLibres[i], map);
    }
}
setEstacionamientos();
dibujarEstacionamientos();