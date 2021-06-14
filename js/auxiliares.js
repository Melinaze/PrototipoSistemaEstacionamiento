const classId = "class = idTable";
const classDir = "class = direccionTable";
const classMont = "class = montoTable";
const classRem = "class = remolcadoTable";

function cambiarVisibilidadDOM(dom) {
    if (dom.style.visibility == "hidden") {
        dom.style.visibility = "initial";
    } else {
        dom.style.visibility = "hidden";
    }
}

function cambiarValorImput(inmput) {
    document.getElementById("inputPatente").value = "";
}

// listaInfracciones.innerHTML += `Id: ${infraccion.id}  Lugar: ${infraccion.direccionRegistrada} Monto: ${infraccion.montoAPagar} ${remolc}<br>`;

function tablaInfraccion(id, direccionRegistrada, montoAPagar, remolcado) {
    var colapsable;
    if (remolcado == "Si") {
        colapsable = "class = collapsible";
    }
    var file = `<tr id="filaTabla${id}" ${colapsable}><td ${classId}>${id}</td><td ${classDir}>${direccionRegistrada}</td><td ${classMont}>${montoAPagar}</td><td ${classRem}>${remolcado}</td></tr>`;
    var tableTags = `<table>${file}</table>`;
    return tableTags;
}

function tablaColumnas() {
    var columns = `<tr><th ${classId}>Id.</th><th ${classDir}>Lugar</th><th ${classMont}>Monto</th><th ${classRem}>Remolcado</th></tr>`;
    var tableTags = `<table>${columns}</table>`;
    return tableTags;
}

function agregar() {}
