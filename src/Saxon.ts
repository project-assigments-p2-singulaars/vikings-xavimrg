import { Soldier } from "./Soldier"

export class Saxon extends Soldier {
    constructor(strength: number, health: number) {
    super(strength, health)
  }
  
  receiveDamage(damage: number){
     this.health = this.health - damage
     if (this.health > 0){
        return `A Saxon has received ${damage} points of damage`
     } else if (this.health === 0){
        return `A Saxon has died in combat`
     }
     
  }}


