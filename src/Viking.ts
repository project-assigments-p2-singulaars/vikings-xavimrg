import { Soldier } from "./Soldier";

export class Viking extends Soldier {
  name: string;
  constructor(name: string, strength: number, health: number) {
    super(strength, health);
    this.name = name;
  }
}
