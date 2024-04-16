import { Soldier } from "./Soldier";

export class Viking extends Soldier {
  name: string;
  constructor(name: string, strength: number, health: number) {
    super(strength, health);
    this.name = name;
  }

 receiveDamage(damage: number){
     this.health = this.health - damage
     if (this.health > 0){
        return `${this.name} has received ${damage} points of damage`
     } else if (this.health === 0){
        return `${this.name} has died in act of combat`
     }
     
 }

battleCry() { 
    return "Odin Owns You All!";
}
}
