import { Character } from './character.js';

/* ENEMIES */

export class Spider extends Character {
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

export class Scorpion extends Character {
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