import Personaje from "./Personaje.js";

class Luchador extends Personaje {
  weapon;
  skill; // 0-10
  frase;
  constructor(nombre, familia, edad, estado, skill, frase) {
    super(nombre, familia, edad, estado);
    this.skill = skill;
    this.frase = "Primero pego y luego pregunto"
  }

}

export default Luchador;