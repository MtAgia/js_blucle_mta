let sum = 0;

while (true) {

  let input = prompt("ingrese un numero para sumar");

  if (input == null) {
    
    document.write("pulse f5 para reiniciar")
    break;
  } else if (isNaN(parseInt(input))) {
    
    alert("solo se permiten numeros");
  } else {
    
    sum += parseInt(input);
  }
}

alert(`La totalidad es: ${sum}`);
