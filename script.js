
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
            <div id="${this.id}-hitpoints">HP: ${this.hitpoints} / ${this.maxHitpoints}</div>
            <div>${details}</div>
        </div>`
    }

    domElement() {
        const element = document.getElementById(`id-${this.id}`);
        if(element) {
            return element;
        }
    }

    updateHP(newHP) {
        let { maxHitpoints, id } = this;
        this.hitpoints = newHP;
        const dom = document.getElementById(`${id}-hitpoints`);
        dom.innerHTML = `HP: ${newHP} / ${maxHitpoints}`
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

/* 
    Functions we'll need
    
    attack(attacker, target)
     - inflicts damage to the target's hitpoints
        equal to the attacker's level
     - If either our player character or the enemy is knocked out,
        call endBattle(attacker) to end the battle
    
    isKnockedOut(character)
     - returns true if the character's hitpoints are less
        than or equal to 0, and false otherwise
        
    endBattle(character) 
     - Ends the battle, displaying the Character's view and
        a button to start another battle
     -  If the player character is NOT knocked out,
        they should level-up, increasing their level
        property by 1, and celebrating their victory 
*/
function attack(attacker, target) {
    target.updateHP(attacker.level);
    if(isKnockedOut) endBattle(attacker);
}

function isKnockedOut(character) {
    if(character.hitpoints <= 0 ) { return true}
    else { return false}
}

function endBattle(character) {
    return document.body.innerHTML = `        
    <div class="character" id="id-${character.id}">
    <div>${character.name} Lv. ${character.level} </div>
    <div id="${character.id}-hitpoints">HP: ${character.hitpoints} / ${character.maxHitpoints}</div>
    </div>`
}

let newChar = new Wizard('Tali', 8);
let newChar2 = new Archer('Kuroi', 9); 
let newChar3 = new Warrior("Raja", 7);
let newChar4 = new Monk("Binx", 1);

let newEnemy = new Spider(4)


document.body.innerHTML += startBattle(newChar, newEnemy);

newChar.updateHP(4);
