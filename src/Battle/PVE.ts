import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  protected _fighter: Fighter;
  protected _monsters: SimpleFighter[];

  constructor(
    fighter: Fighter,
    monsters: SimpleFighter[],
  ) {
    super(fighter);
    this._fighter = fighter;
    this._monsters = monsters;
  }

  fight(): number {
    while (
      this._fighter.lifePoints > 0
      && this._monsters.every((monster) => monster.lifePoints > 0)
    ) {
      this._monsters.forEach((monster) => {
        monster.attack(this._fighter);
        this._fighter.attack(monster);
      });
    }
    return super.fight();
  }
}