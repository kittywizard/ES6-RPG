let id = 0

export class Character {
    constructor(name, level) {
        this.name = name
        this.level = level
        this.id = id++
    }
    
    domElement() {
        const domElement = document.getElementById(`character-${this.id}`)
        if (domElement) {
            return domElement
        }
    }
    
    view(details = '') {
        return `<div class="character" id="character-${this.id}">
            <div>${this.name}</div>
            <div>Lv. ${this.level}</div>
            <div>${details}</div>
        </div>`
    }
}
