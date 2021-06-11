
var elReyDelPancho = punto(
    "El rey del pancho",
    -34.5067,
    -58.705,
    "pancheria",
    "comercio"
);
var est = punto(
    "Estacionamiento",
    -34.5067,
    -58.706,
    "estacionamiento libre",
    "estacionamiento"
);
var depo = punto("El deposito", -34.5067, -58.703, "pancheria", "deposito");

drawer.drawLocationInMap(elReyDelPancho, map);
drawer.drawLocationInMap(est, map);
drawer.drawLocationInMap(depo, map);
