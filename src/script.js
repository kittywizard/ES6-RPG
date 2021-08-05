
import { Archer, Warrior, Monk, Wizard } from './modules/classes.js';
import {Spider, Scorpion } from './modules/enemies.js';
import { startBattle, attack, isKnockedOut, endBattle } from './modules/combat.js'

// let newChar = new Wizard('Tali', 8);
// let newChar2 = new Archer('Kuroi', 9); 
// let newChar3 = new Warrior("Raja", 7);
// let newChar4 = new Monk("Binx", 1);

// document.body.innerHTML = `testing`;
// document.body.innerHTML += newChar.view();

// document.body.innerHTML += newChar2.view();
// document.body.innerHTML += newChar3.view();
// document.body.innerHTML += newChar4.view();

let tali = new Wizard('Tali', 10);
let spider = new Spider(4);


document.body.innerHTML += startBattle(tali, spider);

const attackBtn = document.getElementById('attack-btn');
attackBtn.addEventListener('click', () => {
    attack(tali, spider);
});