
//import { Archer, Warrior, Monk, Wizard } from './modules/classes.js'
let id = 0;

class Character {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        this.id = id++;

        this.hitpoints = level * 4;
        this.maxHitpoints = level * 4;
    }
    view(details = '') {
        return `
        <div class="character" id="id-${this.id}">
            <div>${this.name} Lv. ${this.level} </div>
            <div class="${this.id}-hitpoints">HP: ${this.hitpoints} / ${this.maxHitpoints}</div>
            <div>${details}</div>
        </div>`
    }

    domElement() {
        const element = document.getElementById(`id-${this.id}`);
        if(element) {
            return element;
        }
    }

        /* 
        Challenge: Add a new method 'updateHitpoints(newHitpoints)'
            This should update the hitpoints property,
            and then use document.getElementById() to get the 
            Character's hitpoints display, and use object destructuring 
            to update the innerHTML without using "this" in the string
    */

    updateHP(newHP) {
        let { maxHitpoints, id } = this;
        return document.getElementById(`${id}-hitpoints`).innerHTML = `HP: ${newHP} / ${maxHitpoints}`
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

/* ENEMIES */

class Spider extends Character {
    constructor(level) {
        super("Spider 🕷 ", level)
    }

    bite() {
        console.log("spider bite");
    }

    view() {
        return super.view(" Spider Nonsense");
    }
}

class Scorpion extends Character {
    constructor(level) {
        super("Scorpion 🦂")
    }

    sting() {
        console.log("scorpion sting")
    }

    view() {
        return super.view(" Scorpion Nonsense")
    }
}

/* COMBAT */

function startBattle(player, opponent) {
    return `${player.view()} vs. ${opponent.view()}
            <button class="btn" id="attack-btn">Attack</button>`;
}

let newChar = new Wizard('Tali', 8);
let newChar2 = new Archer('Kuroi', 9); 
let newChar3 = new Warrior("Raja", 7);
let newChar4 = new Monk("Binx", 1);

let newEnemy = new Spider(4)


document.body.innerHTML += startBattle(newChar, newEnemy);

newChar.updateHP(4);
