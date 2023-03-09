
while (true) {
    let inputDni = prompt(`ingrese su dni (numero valido de 0 a 99999999)`)
    if(inputDni == null){
        break;
    }else if (!isNaN(inputDni) || inputDni < 0 || inputDni > 999999999 ) {
        let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        let numeroDni = inputDni % 23;
        let resultado = letras.charAt(numeroDni)
        alert(`La letra correspondiente al DNI es "${resultado}". (resto ${resultado})`)
    } else {
        document.write(`ingrese datos validos porfavor `)
    }
}