let repeticiones = parseInt(
  prompt("Ingrese un numero de repeticiones del 1 al 30")
);

if (repeticiones > 0 && repeticiones <= 30) {
  for (let fila = repeticiones; fila <= 30; fila++) {
    for (let columna = fila; columna <= fila; columna++) {
      document.write(fila);
    }
    document.write("<br>");
  }
} else {
  alert("Ingresaste una opcion invalida");
}
