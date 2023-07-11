import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  protected _fighter: Fighter;
  protected _enemy: Fighter;

  constructor(
    fighter: Fighter,
    enemy: Fighter,
  ) {
    super(fighter);
    this._fighter = fighter;
    this._enemy = enemy;
  }

  fight(): number {
    while (this._fighter.lifePoints > 0 && this._enemy.lifePoints > 0) {
      this._fighter.attack(this._enemy);
      this._enemy.attack(this._fighter);
    }
    return super.fight();
  }
}