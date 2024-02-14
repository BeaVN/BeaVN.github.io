function mostrarTelefonoPopup() {
    document.getElementById("popup-telefono").style.display = 'block';
    document.getElementById("fondoOscuro").style.display = "block";
}

function mostrarGmailPopup() {
    document.getElementById("popup-gmail").style.display = "block";
    document.getElementById("fondoOscuro").style.display = "block";
}


function mostrarLinkerinPopup() {
    document.getElementById("popup-linkerin").style.display = "block";
    document.getElementById("fondoOscuro").style.display = "block";
}

// Función para cerrar el pop-up
function cerrarPopup(id) {
    document.getElementById(id).style.display = "none";
    document.getElementById("fondoOscuro").style.display = "none";
}