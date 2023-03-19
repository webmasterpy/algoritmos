/*
    Acepta una cadena y devuelve el número de caracteres sin espacio que encuentre en una cadena.
    Por ejemplo, dado, "Amor, me estás volviendo loca"
*/

function contarCaracteresSinEspacios(cadena) {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i] !== " ") {
        contador++;
      }
    }
    return contador;
  }

  console.log(contarCaracteresSinEspacios("Amor, me estás volviendo loca"));