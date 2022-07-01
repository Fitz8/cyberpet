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
    this.stats();
    return this;
  }
}

module.exports = {Cat};