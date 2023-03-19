// Dada una matriz de cadenas y un valor (longitud), 
// elimina las cadenas más cortas que la longitud de la matriz. 


function quitarCadenaCorta(arr, length) {
    return arr.filter(function(str) {
      return str.length >= length;
    });
  }

var strings = ["hola", "adiós", "buenos días", "buenas tardes"];
var length = 5;

var filteredStrings = quitarCadenaCorta(strings, length);

console.log(filteredStrings); // ["adiós", "buenos días", "buenas tardes"]

