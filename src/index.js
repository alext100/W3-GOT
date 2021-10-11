import Personaje from "./Personaje.js";
import Rey from "./Rey.js";
import Luchador from "./Luchador.js";
import Escudero from "./Escudero.js";
import Asesor from "./Asesor.js";

const joffreyBaratheon = new Rey("Joffrey", "Baratheon", 17, 1);
const jaimeLannister = new Luchador("Jaime", "Lannister", 35, "espada", 9);
const daenerysTargaryen = new Luchador("Daenerys", "Targaryen", 15, "dragones", 7);
const tyrionLannister = new Asesor("Tyrion", "Lannister", 35);
tyrionLannister.characterHeAdvises = daenerysTargaryen;
const bronn = new Escudero("Bronn");
bronn.characterHeServes = jaimeLannister;

const characteresOfGot = [];
characteresOfGot.push(joffreyBaratheon);
characteresOfGot.push(jaimeLannister);
characteresOfGot.push(daenerysTargaryen);
characteresOfGot.push(tyrionLannister);
characteresOfGot.push(bronn);

function comunication(listOfCaracteres) {
  listOfCaracteres.forEach(character => character.frase);
}
console.log(comunication(characteresOfGot));
