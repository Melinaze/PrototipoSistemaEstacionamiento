const classId = "class = idTable";
const classDir = "class = direccionTable";
const classMont = "class = montoTable";
const classRem = "class = remolcadoTable";
const classTipo = "class = tipoTable";
const classFecha = "class = fechaTable";
const classHora = "class = horaTable";

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

function tablaInfraccion(
    id,
    direccionRegistrada,
    montoAPagar,
    remolcado,
    tipo,
    fecha,
    hora
) {
    var colapsable;
    var divColappsable = "";
    if (remolcado == "Si") {
        colapsable = "class = collapsible";
        divColappsable = `<div id= "remolque${id}" class="content"></div>`;
    }
    var file = `<tr id="filaTabla${id}" ${colapsable}>
                        <td ${classId}>${id}</td>
                        <td ${classDir}>${direccionRegistrada}</td>
                        <td ${classMont}>${montoAPagar}</td>
                        <td ${classRem}>${remolcado}</td> 
                        <td ${classTipo}>${tipo}</td>
                        <th ${classFecha}>${fecha}</th>
                        <td ${classHora}>${hora}</td>
                    </tr>`;
    var tableTags = `<table>${file}</table>${divColappsable}`;
    return tableTags;
}

function tablaColumnas() {
    var columns = `<tr>
                                <th ${classId}>Id.</th>
                                <th ${classDir}>Lugar</th>
                                <th ${classMont}>Monto</th>
                                <th ${classRem}>Remolcado</th>
                                <th ${classTipo}>Tipo de infracción</th>
                                <th ${classFecha}>Fecha</th>
                                <th ${classHora}>Horario</th>
                            </tr>`;
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
    var columns = `<tr>
                                    <th ${classId}>Id.</th>
                                    <th ${classDir}>Lugar</th>
                                    <th ${classMont}>Monto</th>
                                    <th ${classRem}>Remolcado</th>
                                </tr>`;
    var tableTags = `<table>${columns}</table>`;
    return tableTags;
}

function agregarInfoRemolque(id, nombre, telefono, horarios) {
    // this.classList.toggle("active");
    var content = document.getElementById(`remolque${id}`);

    var columns = `<tr>
                                <td >Remolcador</td>
                                <td>Telefono</td>
                                <td >Horarios</td>
                            </tr>`;

    var file = `<tr>
                        <td >${nombre}</td>
                        <td>${telefono}</td>
                        <td >${horarios}</td>
                    </tr>`;

    content.innerHTML = `<table>${columns} ${file}</table>`;
}

const formatearHora = (fecha) => {
    let fechaParseada = Date.parse(fecha);
    date = new Date(fechaParseada);
    var hora = `${date.getHours()}:${date.getMinutes() + 1} Hs.`;
    return hora;
};

const formatearFecha = (fecha) => {
    let fechaParseada = Date.parse(fecha);
    date = new Date(fechaParseada);
    var dmy = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return dmy;
};
