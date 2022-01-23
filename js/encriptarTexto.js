/**
 * Instacias a las etiquetas del HTML
 */
var txtNoTraducido = document.querySelector("#txtNoTraducido");
var txtTraducido = document.querySelector("#txtTraducido");
var btnEncriptar = document.querySelector("#btnEncriptar").addEventListener("click", encriptarTexto);

/**
 * Metodo para encriptar el texto ingresado por el usuario
 */
function encriptarTexto(event) {
    event.preventDefault();
    entrada = txtNoTraducido.value;
    if (validarTexto(entrada)) {
        alert("INGRESE UN TEXTO QUE NO SEA VACÍO, SIN MAYÚSCULAS NI ACENTOS");
    }  else {
        entrada = entrada.replaceAll("e", "enter");
        entrada = entrada.replaceAll("i", "imes");
        entrada = entrada.replaceAll("a", "ai");
        entrada = entrada.replaceAll("o", "ober");
        entrada = entrada.replaceAll("u", "ufat");

        txtNoTraducido.value = "";
        txtTraducido.value = entrada;
    }
}

