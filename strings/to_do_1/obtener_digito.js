/*
    Crea una función de JavaScript que, dada una cadena, devuelva el número entero formado por los 
    dígitos de la cadena. Dado "0s1a3y5w7h9a2t4? 6! 8? 0", la función debería devolver el 
    número 1357924680.
*/

function extractNumber(str) {
    let numStr = '';
    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
      if (/\d/.test(char)) {
        numStr += char;
      }
    }
    return parseInt(numStr);
}
  
// Ejemplo:
const str = '0s1a3y5w7h9a2t4? 6! 8? 0';
const result = extractNumber(str);
console.log(result); // 1357924680
