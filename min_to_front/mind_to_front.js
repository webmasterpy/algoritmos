/*
    Dada una matriz de valores comparables, mueve el elemento más bajo al comienzo de la matriz, 
    desplazando hacia atrás los elementos que estaban antes. De lo contrario, no cambies el orden 
    de la matriz. Dado [4,2,1,3,5], cámbialo a [1,4,2,3,5] y devuélvelo. Como siempre, haz esto sin 
    usar funciones integradas. ejemplo en javascript
*/

  function moverAbajo(arr) {
    let minIndex = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }
    const minValue = arr[minIndex];
    for (let i = minIndex; i > 0; i--) {
      arr[i] = arr[i-1];
    }
    arr[0] = minValue;
    return arr;
  }
  
  // Ejemplo de uso:
  const arr = [4, 2, 1, 3, 5];
  const result = moverAbajo(arr);
  console.log(result); // [1, 4, 2, 3, 5]
  
  