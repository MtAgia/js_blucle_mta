let notas = parseInt(prompt(`ingrese su nota 0-10`))
if(!isNaN(notas) === true){
    if((notas >= 0 && notas <= 10)  ){
        switch (notas) {
          case 0:
          case 1:
          case 2:
            document.write(`tu nota es deficiente`);
            break;
          case 3:
          case 4:
            document.write(`tu nota es insufisiente`);
            break;
          case 5:
          case 6:
            document.write(`tu nota es suficiente`);
            break;
          case 7:
            document.write(`tu nota esta bien `);
            break;
          case 8:
          case 9:
            document.write(`tu nota esta notable `);
            break;
            case 10:
            document.write(`tu nota es sobresaliente :) `)
          default:
            document.write(`porfavor ingresar correctamente los datos erroneo`)
            break;
        }
}else{
    document.write(`numero erroneo`)
}
    
}else{
    document.write(`ingrese correctamente las notas`)
}