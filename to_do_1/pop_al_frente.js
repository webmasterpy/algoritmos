// Dada una matriz, elimina y devuelve el valor al principio de la matriz. Haz esto sin utilizar ningún método de matriz incorporado, excepto pop().

let matriz = [1, 2, 3, 4, 5]; // matriz original

let primerElemento = matriz[0]; // almacenar el primer elemento en una variable
for (let i = 0; i < matriz.length - 1; i++) {
  matriz[i] = matriz[i + 1]; // mover los elementos a la izquierda
}
matriz.pop(); // eliminar el último elemento duplicado

console.log(primerElemento); // 1
console.log(matriz); // [2, 3, 4, 5]
