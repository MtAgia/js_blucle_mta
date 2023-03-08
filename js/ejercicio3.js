let text = "";

while (true) {

  let textoInicial = prompt(
    "ingresar texto para concatenar"
  );

  if (textoInicial == null || textoInicial.length == 0) {
    
      document.write("pulsa F5 para reiniciar el ciclo");
      break;
    } else {
        
        text = `${text}-${textoInicial}`;
    } 
}

let borrarGuion = text.substring(1);

confirm(`concatenacion completada: ${borrarGuion}`);