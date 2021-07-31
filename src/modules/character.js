let id = 0;

export class Character {
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