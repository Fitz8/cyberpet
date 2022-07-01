// const myFunctions = require("./app.js");
// console.log(myFunctions.add(2, 5));
// console.log(myFunctions.subtract(5, 2));

// const { add, subtract } = require("./app.js");
// console.log(add(2, 5));
// console.log(subtract(5, 2));

// const os = require("os");
// const fs = require("fs");
// let userDetails = os.userInfo().username;
// fs.appendFile("oh-hi.txt", `Hello ${userDetails}`, (err) => {
//   if (err) {
//     console.log("oops");
//   }
// });


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
    this.stats();
    return this;
  }
}

module.exports = {Dog};