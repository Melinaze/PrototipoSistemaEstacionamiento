const punto = (nombre, lat, long, descripcion, tipo) => {
    this.lat = lat;
    this.long = long;
    this.descripcion = descripcion;
    this.nombre = nombre;
    this.tipo = tipo;

    this.getLat = () => lat;
    this.getLong = () => long;
    this.getDescripcion = () => descripcion;
    this.getNombre = () => nombre;
    this.esComercio = () => tipo == "comercio";
    this.esEstacionamiento = () => tipo == "estacionamiento";
    this.esDeposito = () => tipo == "deposito";
    this.esMiAuto = () => tipo == "Mi Auto";
    this.equals = (punto) => {
        return (
            this.getLat() == punto.getLat() &&
            this.getLong() == punto.getLong() &&
            this.getDescripcion() == punto.getDescipcion() &&
            this.getNombre() == punto.getNombre()
        );
    };

    return {
        getLat: getLat,
        getLong: getLong,
        getDescripcion,
        getNombre,
        equals,
        esComercio,
        esEstacionamiento,
        esDeposito,
        esMiAuto
    };
};