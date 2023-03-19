function removeAt(arr, index) {
    let valor = arr[index]; // almacenar el valor del elemento en una variable
    for (let i = index; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1]; // mover los elementos a la izquierda
    }
    arr.pop(); // eliminar el último elemento duplicado
    return valor;
  }
  
  let matriz = [1, 2, 3, 4, 5]; // matriz original
  let indice = 2; // índice deseado
  
  let valor = removeAt(matriz, indice); // almacenar el valor eliminado
  
  console.log(valor); // 3
  console.log(matriz); // [1, 2, 4, 5]
  