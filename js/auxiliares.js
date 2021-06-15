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
    var divColappsable = "";
    if (remolcado == "Si") {
        colapsable = "class = collapsible";
        divColappsable = `<div id= "remolque${id}" class="content"></div>`;
    }
    var file = `<tr id="filaTabla${id}" ${colapsable}><td ${classId}>${id}</td><td ${classDir}>${direccionRegistrada}</td><td ${classMont}>${montoAPagar}</td><td ${classRem}>${remolcado}</td></tr>`;
    var tableTags = `<table>${file}</table>${divColappsable}`;
    return tableTags;
}

function tablaColumnas() {
    var columns = `<tr><th ${classId}>Id.</th><th ${classDir}>Lugar</th><th ${classMont}>Monto</th><th ${classRem}>Remolcado</th></tr>`;
    var tableTags = `<table>${columns}</table>`;
    return tableTags;
}

function colapsadorDeRemolque(id) {
    // let idColap = id;
    document.getElementById(`filaTabla${id}`).addEventListener("click", () => {
        // this.classList.toggle("active");
        var content = document.getElementById(`remolque${id}`);
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

function remolqueColumnas() {
    var columns = `<tr><th ${classId}>Id.</th><th ${classDir}>Lugar</th><th ${classMont}>Monto</th><th ${classRem}>Remolcado</th></tr>`;
    var tableTags = `<table>${columns}</table>`;
    return tableTags;
}

function agregarInfoRemolque(id, nombre, telefono, horarios) {
    // this.classList.toggle("active");
    var content = document.getElementById(`remolque${id}`);

    var columns = `<tr><td >Nombre</td><td>Telefono</td><td >Horarios</td></tr>`;

    var file = `<tr><td >${nombre}</td><td>${telefono}</td><td >${horarios}</td></tr>`;

    content.innerHTML = `<table>${columns} ${file}</table>`;
}
