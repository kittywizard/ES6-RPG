
/* COMBAT */

export function startBattle(player, opponent) {
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
export function attack(attacker, target) {
    target.updateHP(target.hitpoints - attacker.level);
    
    if(isKnockedOut(target)) endBattle(attacker);
}

export function isKnockedOut(character) {
    if(character.hitpoints >= 0 ) { return true}
    else { return false}
}

export function endBattle(character) {
    console.log(`${character.name} is victorious!`)
    // return document.body.innerHTML = `        
    // <div class="character" id="id-${character.id}">
    // <div>${character.name} Lv. ${character.level} </div>
    // <div id="${character.id}-hitpoints">HP: ${character.hitpoints} / ${character.maxHitpoints}</div>
    // </div>`;
}
