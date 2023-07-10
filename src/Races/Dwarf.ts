import Race from './Race';

export default class Dwarf extends Race {
  protected _maxLifePoints: number;
  protected static createdInstances = 0;

  constructor(
    name: string,
    dexterity: number,
    maxLifePoints = 80,
  ) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;
    Dwarf.createdInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf.createdInstances;
  }
}