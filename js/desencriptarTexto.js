/**
 * Instacias a las etiquetas del HTML
 */
var txtNoTraducido = document.querySelector("#txtNoTraducido");
var txtTraducido = document.querySelector("#txtTraducido");
var btnDesencriptar = document.querySelector("#btnDesencriptar").addEventListener("click", desencriptarTexto);

/**
 * Metodo para desencriptar el texto ingresado por el usuario
 */
function desencriptarTexto(event) {
    if (validarTexto(entrada)==true) {
        alert("INGRESE UN TEXTO QUE NO SEA VACÍO, SIN MAYÚSCULAS NI ACENTOS")
    } else {
        event.preventDefault();
        entrada = txtNoTraducido.value;
        entrada = entrada.replaceAll("enter", "e");
        entrada = entrada.replaceAll("imes", "i");
        entrada = entrada.replaceAll("ai", "a");
        entrada = entrada.replaceAll("ober", "o");
        entrada = entrada.replaceAll("ufat", "u");

        txtNoTraducido.value = "";
        txtTraducido.value = entrada;
    }
}