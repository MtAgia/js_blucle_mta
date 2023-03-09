/* 
Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
*/
let edad = parseInt(prompt(`porfavor ingrese una edad`));
let nombre = prompt(`ingrese un nombre`)
while (isNaN(edad)) {
  edad2 = parseInt(prompt(`Ingrese edad correcta para ${nombre} :`));
}
let edad2 = parseInt(prompt(`porfavor ingrese una edad`));
let nombre2 = prompt(`ingrese un nombre`);
while (isNaN(edad2)) {
  edad2 = parseInt(prompt(`Ingrese edad correcta para ${nombre2} :`));
}
let edad3 = parseInt(prompt(`porfavor ingrese una edad`));
let nombre3 = prompt(`ingrese un nombre`);
while (isNaN(edad3)) {
  edad2 = parseInt(prompt(`Ingrese edad correcta para ${nombre2} :`));
}

let mayorEdad = Math.max(edad, edad2, edad3)
if(mayorEdad === edad){
    document.write(`el ${nombre} es el mayor con ${edad}`)
}else if(mayorEdad === edad2){
    document.write(`el ${nombre2} es el mayor con ${edad2}`)
}else {
    document.write(`el ${nombre3} es el mayor con ${edad3}`)
}










/* 
if (edad < 0 && edad > 100) {
    document.write(`ingrese edades realistas`)
}else{
    while () {
        
    }
}
*/
