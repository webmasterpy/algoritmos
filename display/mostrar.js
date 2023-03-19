// Crea display() que devuelva una cadena que contiene todos los valores de la lista. 
// ¡Crea lo que quisieras que hiciera console.log(myList)!

class SSL {
    constructor() {
      this.head = null;
      this.length = 0;
    }
  
    // Método para agregar un elemento al final de la lista
    add(data) {
      const newNode = { data };
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.length++;
    }
  
    // Método para eliminar un elemento de la lista
    remove(data) {
      if (!this.head) {
        return null;
      }
      if (this.head.data === data) {
        this.head = this.head.next;
        this.length--;
        return data;
      }
      let current = this.head;
      while (current.next) {
        if (current.next.data === data) {
          current.next = current.next.next;
          this.length--;
          return data;
        }
        current = current.next;
      }
      return null;
    }
  
    // Método para mostrar todos los elementos de la lista como una cadena
    display() {
      let current = this.head;
      let result = "";
      while (current) {
        result += current.data.toString() + " ";
        current = current.next;
      }
      return result;
    }
  }
  
  // Ejemplo de uso
  const myList = new SSL();
  myList.add(1);
  myList.add(2);
  myList.add(3);
  console.log(myList.display()); // muestra "1 2 3"