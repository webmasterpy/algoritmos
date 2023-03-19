/*
    Sara está buscando contratar a un desarrollador web increíble y ha recibido postulaciones de varias fuentes. 
    Su asistente los ordenó alfabéticamente, pero notó algunos duplicados. 
    Dada una matriz ordenada, elimina los valores duplicados. Debido a que los elementos de la matriz 
    ya están en orden, todos los valores duplicados se agruparán. Al igual que con todos estos desafíos 
    de arreglos, hazlo sin utilizar ningún método de arreglo incorporado.
*/

function eliminarDuplicados(arr) {
    let ultimoUnico = 0; // índice del último elemento único encontrado
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[ultimoUnico]) {
        ultimoUnico++; // actualizar el índice del último elemento único
        arr[ultimoUnico] = arr[i]; // mover el elemento único al siguiente índice
      }
    }
    arr.length = ultimoUnico + 1; // actualizar la longitud de la matriz
    return arr;
  }
  
  let matriz = ["Eduardo", "Eduardo", "Beatriz", "Carlos", "Carlos", "Carlos", "Diego", "Diego", "Estela"]; // matriz original
  
  matriz = eliminarDuplicados(matriz); // actualizar la matriz original
  
  console.log(matriz); // [ 'Eduardo', 'Beatriz', 'Carlos', 'Diego', 'Estela' ]
  