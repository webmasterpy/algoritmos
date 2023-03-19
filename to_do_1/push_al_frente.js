/* 
Dada una matriz y un valor adicional, inserta este valor al principio de la matriz. Haz esto sin utilizar ningún método de matriz incorporado.
*/

let matriz = [1, 2, 3, 4, 5]; // matriz original
let valor = 0; // valor adicional

let nuevaMatriz = [valor]; // nueva matriz con el valor adicional al principio
for (let i = 0; i < matriz.length; i++) {
  nuevaMatriz.push(matriz[i]); // agregar los elementos de la matriz original
}

console.log(nuevaMatriz); // [0, 1, 2, 3, 4, 5]