class Animal {
  constructor(name) {
    this.name = name;
    this.hunger = 50;
    this.thirst = 50;
    this.boredom = 50;
    this.energy = 50;
  }
  drinks() {
    this.thirst += 30;
    if (this.thirst > 100) {
      this.thirst = 100;
    }
    this.hunger -= 10;
    this.boredom += 10;
    this.energy -= 10;
    console.log(`\n${this.name} has a nice drink of water\n`);
    this.stats();
    return this;
  }

  eats() {
    this.hunger += 30;
    if (this.hunger > 100) {
      this.hunger = 100;
    }
    this.thirst -= 10;
    this.boredom += 10;
    this.energy -= 10;
    console.log(`\n${this.name} eats some food out of their food bowl\n`);
    this.stats();
    return this;
  }

  walks() {
    this.hunger -= 10;
    this.thirst -= 10;
    this.boredom -= 30;
    if (this.boredom < 0) {
      this.boredom = 0;
    }
    this.energy -= 10;
    console.log(`\nYou take ${this.name} for a nice long walk!\n`);
    this.stats();
    return this;
  }

  rest() {
    this.hunger -= 10;
    this.thirst -= 10;
    this.boredom += 10;
    this.energy += 30;
    if (this.energy > 100) {
      this.energy = 100;
    }
    console.log(`\nYou and ${this.name} take a much needed nap\n`);
    this.stats();
    return this;
  }

  stats() {
    return console.table({
      Name: this.name,
      Hunger: this.hunger,
      Thirst: this.thirst,
      Boredom: this.boredom,
      Energy: this.energy
    });
  }
}

module.exports = {Animal};