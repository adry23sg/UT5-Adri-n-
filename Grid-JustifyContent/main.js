function cambiarClaseJustifyContent(clase) {
    document.getElementById("grid").classList.remove("jc-space-evenly");
    document.getElementById("grid").classList.remove("jc-space-around");
    document.getElementById("grid").classList.remove("jc-space-between");
    document.getElementById("grid").classList.remove("jc-center");
    document.getElementById("grid").classList.remove("jc-start");
    document.getElementById("grid").classList.remove("jc-end");
    document.getElementById("grid").classList.add(clase);
};