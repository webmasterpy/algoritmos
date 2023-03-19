
/*
Crea una función que, dada una cadena, devuelva todo el contenido de esa cadena, pero sin espacios en blanco.
Si se da la cadena "Pl ayTha tF u nkyM usi c", devuelve "PlayThatFunkyMusic".
*/

function removeSpaces(str) {
    return str.replace(/\s+/g, '');
}

// Ejemplo de uso:
const str = 'Pl ayTha tF u nkyM usi c';
const result = removeSpaces(str);
console.log(result); // 'PlayThatFunkyMusic'
