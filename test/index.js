import { Wizard, Archer, Warrior } from './characters/Heroes.js'
import { Food } from './Food.js'

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

const croissant = new Food("🥐", 5)
const dani = new Warrior("Dani", 5)
const moe = new Archer("Moe", 3)
const liz = new Wizard("Liz", 10)

document.body.innerHTML += croissant.view()
document.body.innerHTML += dani.view()
document.body.innerHTML += moe.view()
document.body.innerHTML += liz.view()