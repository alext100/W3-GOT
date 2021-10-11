import JuegoDeTronos from "./JuegoDeTronos";
import Rey from "./Rey";
import Luchador from "./Luchador";
import Escudero from "./Escudero";
import Asesor from "./Asesor";

const joffreyBaratheon = new Rey("Joffrey Baratheon");

const jaimeLannister = new Luchador("Jaime Lannister");

const daenerysTargaryen = new Luchador("Daenerys Targaryen");

const tyrionLannister = new Asesor("Tyrion Lannister");
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
