function cambiarClaseAlignContent(clase) {
    document.getElementById("grid").classList.remove("ac-space-evenly");
    document.getElementById("grid").classList.remove("ac-space-around");
    document.getElementById("grid").classList.remove("ac-space-between");
    document.getElementById("grid").classList.remove("ac-center");
    document.getElementById("grid").classList.remove("ac-start");
    document.getElementById("grid").classList.remove("ac-end");
    document.getElementById("grid").classList.add(clase);
};