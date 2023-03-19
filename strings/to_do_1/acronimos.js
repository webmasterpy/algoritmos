function acronym(str) {
    let acr = '';
    let nuevo = str.replace(/[^a-zA-Z.,\s]/g, "");
    nuevo = nuevo.replace(/[.]/i,"-");
    const words = nuevo.split(' ');

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (/^[A-Za-z.,-]+$/.test(word)) {
        acr += word.charAt(0).toUpperCase();
      }
    }
    return acr;
  }

  // Ejemplo de uso:
  console.log(acronym("no hay almuerzo gratis. Debes pagar por tu comida")); // NHAG-DPPTC
  //console.log(acronym("¡En vivo desde Nueva York, es sábado por la noche!")); // ENDNYESPLN