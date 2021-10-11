import Personaje from "./Personaje.js";

class Asesor extends Personaje {
  characterHeAdvises; // rey, luchador, asesor o escudero

  constructor(nombre, familia, edad, estado, characterHeAdvises) {
    super(nombre, familia, edad, estado);
    this.characterHeAdvises = characterHeAdvises;
    this.frase = "No sé por qué, pero creo que voy a morir pronto";
  }

}

export default Asesor;