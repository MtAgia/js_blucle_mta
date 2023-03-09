let cadena= prompt('Ingrese un texto');
let cadenaRevez="";
for (let i = cadena.length-1; i >= 0; i--) {
    cadenaRevez+= cadena.charAt(i)
}
document.write(cadenaRevez.toLowerCase());