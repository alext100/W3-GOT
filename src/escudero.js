import Personaje from "./Personaje.js";

class Escudero extends Personaje {

  characterHeServes; // luchador
  levelOf; // 0-10

  constructor(nombre, familia, edad, estado, levelOf, characterHeServes) {
    super(nombre, familia, edad, estado);
    this.levelOf = levelOf;
    this.characterHeServes = characterHeServes;
    this.frase = "Soy un loser";
  }

}

export default Escudero;