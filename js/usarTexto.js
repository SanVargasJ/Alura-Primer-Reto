var btnCopiar = document.querySelector("#btnCopiar").addEventListener("click", copiarTexto);

/**
 * Metodo para copiar el texto en el portapales
 */
function copiarTexto(event) {
    var texto = document.getElementById('txtTraducido');
    texto.select();
    document.execCommand('copy');
}

/**
 * Metodo para validar que no este vacio, sea mayuscula o tenga acentos
 */
function validarTexto(texto) {
    var esValido = false;
    if (entrada.length === 0) {
        esValido = true;
    } else {
        for (var i = 0; i < texto.length; i++) {
            var letraActual = texto.charAt(i);
            if (!letraActual === ' ' && (letraActual === letraActual.toUpperCase()) || letraActual === 'á' ||
                letraActual === 'é' || letraActual === 'í' || letraActual === 'ó' || letraActual === 'ú') {
                esValido = true;
            }
        }
    }
    return esValido;
}