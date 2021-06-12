function cambiarVisibilidadDOM(dom) {
    if (dom.style.visibility == "hidden") {
        dom.style.visibility = "initial";
    } else {
        dom.style.visibility = "hidden";
    }
}

function cambiarValorImput(inmput) {
    document.getElementById("inputPatente").value = ""
}