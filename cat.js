const {Animal} = require("./animal.js");

class Cat extends Animal {
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
    console.log(`\nYou throw a ball of yarn for ${this.name} and they play with it for a while\n`);
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
    console.log(`\n${this.name} reluctantly gets into the bath, scratching your hand in the process and staring at you with a look of betrayal.\n`);
    console.log(`Hunger - | Thirst - | Boredom - | Energy + \n`)
    this.stats();
    return this;
  }
}

module.exports = {Cat};