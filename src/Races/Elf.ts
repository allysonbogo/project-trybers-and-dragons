import Race from './Race';

export default class Elf extends Race {
  protected _maxLifePoints: number;
  protected static createdInstances = 0;

  constructor(
    name: string,
    dexterity: number,
    maxLifePoints = 99,
  ) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;
    Elf.createdInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf.createdInstances;
  }
}