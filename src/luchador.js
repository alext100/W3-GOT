import JuegoDeTronos from "./JuegoDeTronos.js";

class Luchador extends JuegoDeTronos {
  weapon;
  skill; // 0-10

  constructor(nombre, familia, edad, estado, skill) {
    super(nombre, familia, edad, estado);
    this.skill = skill;
    this.frase = "Primero pego y luego pregunto"
  }

}

export default Luchador;