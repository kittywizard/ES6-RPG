
import { Archer, Warrior, Monk, Wizard } from './modules/classes.js'


let newChar = new Wizard('Tali', 8);
let newChar2 = new Archer('Kuroi', 9); 
let newChar3 = new Warrior("Raja", 7);
let newChar4 = new Monk("Binx", 1);

document.body.innerHTML = `testing`;
document.body.innerHTML += newChar.view();

document.body.innerHTML += newChar2.view();
document.body.innerHTML += newChar3.view();
document.body.innerHTML += newChar4.view();
