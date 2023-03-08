/* 
Crea script para generar pirámide siguiente con los del 1 al número que indique el usuario (no mayor de 50) 
*/

let num = prompt("Ingrese un número de 1 a 50:");
let seguido = "";

if (num <= 50 || !isNaN(num)) {
  for (let i = 1; i <= num; i++) {
    seguido += i;
    document.write(`${seguido}<br>`);
  }
} else {
  document.write(
    "ingrese un numero menor o igual a 50"
  );
}

