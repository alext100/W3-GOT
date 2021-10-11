class Personaje {
  nombre;
  familia;
  edad;
  serie = "Juego de trones";
  estado = "vivo";
  frase;

  constructor(nombre, familia, edad) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
  }

  comunicar() {
    return this.frase;
  };

  morir() {
    this.estado = "muerto";
  }

}
export default Personaje;