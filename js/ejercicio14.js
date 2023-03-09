let texto = prompt("Ingrese un texto por favor");
let textGuions = "";
for (let i = 0; i < texto.length; i++) {
  textGuions += texto[i] + "-";
}
textGuions = textGuions.slice(0, -1);
document.write(textGuions);
