const {Animal} = require("./animal.js");

class Dog extends Animal {
  constructor(name) {
    super (name);
  }

  plays() {
    this.hunger -= 5;
    this.thirst -= 5;
    this.boredom -= 20;
    if (this.boredom < 0) {
      this.boredom = 0;
    }
    this.energy -= 5;
    console.log(`\nYou throw a ball for ${this.name} and they chase after it\n`);
    console.log(`Hunger - | Thirst - | Boredom - | Energy - \n`)
    this.stats();
    return this;
  }

  bath() {
    this.hunger -= 5;
    this.thirst -= 5;
    this.boredom -= 15;
    if (this.boredom < 0) {
      this.boredom = 0;
    }
    this.energy += 15;
    if (this.energy > 100) {
      this.energy = 100;
    }
    console.log(`\n${this.name} leaps into the bath and enjoys the warm water. Afterwards they shake to get dry, splashing water everywhere.\n`);
    console.log(`Hunger - | Thirst - | Boredom - | Energy + \n`)
    this.stats();
    return this;
  }
}

module.exports = {Dog};