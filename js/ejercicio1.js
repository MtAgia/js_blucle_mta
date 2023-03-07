let edad = parseInt(prompt(`ingrese su edad. `));
if (!isNaN(edad) === true) {
  if (edad >= 18 && edad < 80) {
    document.write(`este usuario puede conducir porque tiene ${edad} años`);
  } else {
    document.write(`este usuario no puede conducir porque tiene ${edad} años`);
  }
} else {
  document.write(`ingrese numeros validos porfa`);
}
