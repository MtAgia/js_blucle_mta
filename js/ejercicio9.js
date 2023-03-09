/*
Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 
líneas muestre una línea horizontal. Por ejemplo :
*/
for (let i = 1; i <= 500; i++) {
    if (i % 4 === 0 ) {
        document.write(`${i} el numero es `)
        document.write(`multiplo de 4 `);

    }
    if (i % 9 === 0) {
      document.write(`${i} el numero es `);
      document.write(`multiplo de 4 `);
    }
    if (i % 5 === 0) {
      document.write("—————————————————————<br>");
    }
    document.write(i)
    document.write(`<br>`)
}