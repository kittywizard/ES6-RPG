//create character class
let id = 0;
class Character {
    constructor(name, level, id) {
        this.name = name;
        this.level = level;
        this.id = id;
    }
    view(details = '') {
        return "<div class='character'>" +
            this.name + " Lv. " + this.level + 
            details +
        "</div>"
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
        super(name + " 🏹");
        this.arrows = 3 * level;
    }

    reload() {
        this.arrows++;
    }

    view() {
        return super.view(" Arrows: " + this.arrows);
    }
}