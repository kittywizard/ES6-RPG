let id = 0;

export class Character {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        this.id = id++;

        this.hitpoints = level * 4;
        this.maxHitpoints = level * 4;
    }
    view(details = '') {
        let {id, name, level, hitpoints, maxHitpoints} = this;
        return `
        <div class="character" id="id-${id}">
            ${name} Lv. ${level}
            <div id="${id}-hitpoints">HP: ${hitpoints} / ${maxHitpoints}</div> 
            ${details}
        </div>`
    }

    domElement() {
        const element = document.getElementById(`id-${this.id}`);
        if(element) {
            return element;
        }
    }

    updateHP(newHP) {
        let { maxHitpoints, id, hitpoints } = this;
        hitpoints = newHP;
        //need to get this to actually save new HP in the element
        const dom = document.getElementById(`${id}-hitpoints`);
        dom.innerHTML = `HP: ${hitpoints} / ${maxHitpoints}`
    }
}