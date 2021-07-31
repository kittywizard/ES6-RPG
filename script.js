
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

/* 
Section Review Challenge:

    Create a new module, Enemies.js
        It should include 3 new classes extending Character
        Each should have their own placeholder ability
            which we'll flesh out later:
                Spider🕷 - bite()
                Scorpion🦂 - sting()
                Dragon🐉 - fireBreath()
        The constructors for these classes should only require the enemy's level
            The name will always just be the species 
            + the emoji representation: `Dragon🐉`
    
    Then, update the Character class
        -Add 2 new properties, hitpoints & maxHitpoints
            both can be initialized to 4 times the Character's level
        -Update the view method,
            Finally, add a new div, that displays the Character's Hitpoints 
            out of the maxHitpoints, this should have an id such as 'character-0-hitpoints' 
            
    Finally, create a new module called 'combat.js'
        At this point, it should only export 1 function
          startBattle(player, opponent)
            This function should use Template Literals to 
            construct and return a string with the views of both 
            characters that are passed into it, 
            and an additional button between 
            them labelled "Attack" with an id of "attack-button"
*/

class Spider extends Character {
    constructor(name, level) {
        super(name + " 🕷 ", level)
    }

    bite() {
        console.log("spider bite");
    }

    view() {
        return super.view(" ")
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
