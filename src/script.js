
//import { Archer, Warrior, Monk, Wizard } from './modules/classes.js'

let id = 0;

class Character {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        this.id = id++;
    }
    view(details = '') {
        return `
        <div class="character" id="id-${this.id}">
            ${this.name} Lv. ${this.level} 
            ${details}
        </div>`
    }

    domElement() {
        const element = document.getElementById(`id-${this.id}`);
        if(element) {
            return element;
        }
    }

}

class Wizard extends Character {
    constructor(name, level) {
        super(name + "🧙🏽‍♀️", level)
        this.mana = 4 * level
    }
    
    restore() {
        this.mana++
    }
    
    view() {
        return super.view(" Mana: " + this.mana)
    }
}

 class Archer extends Character {
    constructor(name, level) {
        super(name + " 🏹", level);
        this.arrows = 3 * level;
    }

    reload() {
        this.arrows++;
    }

    view() {
        return super.view(" Arrows: " + this.arrows);
    }
}


 class Warrior extends Character {
    constructor(name, level) {
        super(name + " ⚔️", level);
        this.strength = level * 2.5;
    }
    charge(){
        this.strength++;
    }

    view() {
        return super.view(" Strength: " + this.strength);
    }


}

 class Monk extends Character {
    constructor(name, level) {
        super(name + " 🤜", level);
        this.ki = level * 3;
    }

    flurry() {
        this.ki * 4;
    }

    view() {
        return super.view( " Ki Level: " + this.ki);
    }
}


let newChar = new Wizard('Tali', 8);
let newChar2 = new Archer('Kuroi', 9); 
let newChar3 = new Warrior("Raja", 7);
let newChar4 = new Monk("Binx", 1);

document.body.innerHTML = `testing`;
document.body.innerHTML += newChar.view();

document.body.innerHTML += newChar2.view();
document.body.innerHTML += newChar3.view();
document.body.innerHTML += newChar4.view();
