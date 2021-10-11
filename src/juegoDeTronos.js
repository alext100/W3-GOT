class JuegoDeTronos {
  nombre;

  familia;

  edad;

  estado;

  frase;

  constructor(nombre, familia, edad, estado) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.estado = estado;
  }

  comunicar() {
    return this.frase;
  };

}

export default JuegoDeTronos;