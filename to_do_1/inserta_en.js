function insertAt(arr, index, val) {
    let nuevaMatriz = []; // nueva matriz vacía
    for (let i = 0; i < arr.length; i++) {
      if (i === index) {
        nuevaMatriz.push(val); // agregar el valor adicional en el índice deseado
      }
      nuevaMatriz.push(arr[i]); // agregar los elementos de la matriz original
    }
    return nuevaMatriz;
  }
  
  let matriz = [1, 2, 3, 4, 5]; // matriz original
  let indice = 2; // índice deseado
  let valor = 10; // valor adicional
  
  matriz = insertAt(matriz, indice, valor); // actualizar la matriz original
  
  console.log(matriz); // [1, 2, 10, 3, 4, 5]
  