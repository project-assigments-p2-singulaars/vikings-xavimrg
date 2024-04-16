import { Viking } from "./Viking";
import { Saxon } from "./Saxon";

export class War {
  vikingArmy: Viking[] = [];
  saxonArmy: Saxon[] = [];

  constructor(vikingArmy: Viking[] = [], saxonArmy: Saxon[] = []) {
    this.vikingArmy = vikingArmy;
    this.saxonArmy = saxonArmy;
  }

  addViking(viking: Viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon: Saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack(Saxon.receiveDamage === Viking.health){
this
  }
}
