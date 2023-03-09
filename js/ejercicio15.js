let text = prompt("Ingrese un texto, por favor");
let contador = 0;
for (let i = 0; i < text.length; i++) {
  if (
    text.charAt(i) === "a" ||
    text.charAt(i) === "e" ||
    text.charAt(i) === "i" ||
    text.charAt(i) === "o" ||
    text.charAt(i) === "u"
  ) {
    contador++;
  }
}
document.write(`Hay ${contador} vocales`);
