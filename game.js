//Importing modules
let inquirer = require("inquirer");
const { Cat } = require("./cat.js");
const { Dog } = require("./dog.js");

//Creating a global pet variable
let pet;


//Game set up function

async function startGame() {
  console.log(`  ____ _   _ ___  ____ ____    ___  ____ ___ ____ 
  |     \\_/  |__] |___ |__/    |__] |___  |  [__  
  |___   |   |__] |___ |  \\    |    |___  |  ___]`);
  console.log("\nWelcome to cyber pets!\n");
  console.log(`Rules:
  Do not let your pets hunger, thirst or energy reach 0!
  Do not let your pets boredom reach 100!
  If this happens, your pet will perish. Take good care of them :)\n
  `);
  
  //Asking for the player's choice on pet species
  const petChoice = await inquirer.prompt([
    {
      type: "expand",
      message:
        `Select which animal you want as a pet!
        Press 'c' for cat.
        Press 'd' for dog.`,
      name: "animal",
      choices: [
        {
          key: "c",
          value: "cat",
        },
        {
          key: "d",
          value: "dog",
        },
      ],
    },
  ]);

  //Asking for the player's choice on pet name
  const petName = await inquirer.prompt([
    {
      type: "input",
      message: "\nPlease name your new pet!",
      name: "name",
    },
  ]);

  //Creates a new pet, depending on the user's choice

  if (petChoice.animal == "dog") {
    pet = new Dog(petName.name);
    console.log(`You have chosen a dog named ${pet.name}!`)
    console.log(`       __
    o-''|\\_____/)
     \\_/|_)     )
        \\  __  /
        (_/ (_/`);

  } else if (petChoice.animal == "cat") {
    pet = new Cat(petName.name);
    console.log(`You have chosen a cat named ${pet.name}!`)
    console.log(`
    _._     _,-'""\`-._
    (,-.\`._,'(       |\\\`-/|
        \`-.-' \\ )-\`( , o o)
              \`-    \\\`_\`"'-
    `);
  }

mainGame();

}


//Function for the main game loop

async function mainGame() {

  let quit = false;

  while (quit == false) {

    if (isGameOver()) {
      break;
    }

    const player = await inquirer.prompt([
      {
        type: "expand",
        message: 
        `\nPick an activity to do with your pet:\n 
        Press 'W' to go for a walk
        Press 'E' to feed your pet 
        Press 'D' to give your pet some water 
        Press 'P' to play with your pet 
        Press 'R' to have a nap 
        Press 'B' to give your pet a bath
        Press 'Q' to quit the game`,
        name: "choice",
        choices: [
          {
            key: "e",
            value: "eats",
          },
          {
            key: "d",
            value: "drinks",
          },
          {
            key: "p",
            value: "plays",
          },
          {
            key: "w",
            value: "walks",
          },
          {
            key: "r",
            value: "rest",
          },
          {
            key: "B",
            value: "bath",
          },
          {
            key: "q",
            value: "quit",
          },
        ],
      },
    ]);

    switch (player.choice) {
      case "eats":
        pet.eats();
        break;
      case "drinks":
        pet.drinks();
        break;
      case "plays":
        pet.plays();
        break;
      case "walks":
        pet.walks();
        break;
      case "rest":
        pet.rest();
        break;
      case "bath":
        pet.bath();
        break;
      case "quit":
        quit = true;
        break;
      default:
        console.log("how?");
        break;
    }
  }

  //Don't give the player the option to play again if quitting
  
  if (quit) {
    console.log ("\nThank you for playing!");
  } else {
    playAgain();
  }
}

//Checking if the pets stats are acceptable values.

const isGameOver = () => {
  if (pet.hunger < 1) {
    console.log("\nYour pet died due to lack of food :(");
    return true;
  } 
  
  else if (pet.thirst < 1) {
    console.log("\nYour pet died due to lack of water :(\n");
    return true;
  }

  else if (pet.boredom > 99) {
    console.log("\nYour pet died of boredom :(\n");
    return true;
  }

  else if (pet.energy < 1) {
    console.log("\nYour pet died due to lack of energy :(\n");
    return true;
  }

  else {
    return false;
  }
}


//Asking the player if they would like to restart the game

async function playAgain() {
  const again = await inquirer.prompt([
    {
      type: "expand",
      message: `Would you like to play again?
      Press 'Y' for yes! 
      Press 'N' for no!`,
      name: "choice",
      choices: [
        {
          key: "y",
          value: "yes",
        },
        {
          key: "n",
          value: "no",
        },
      ],
    },
  ]);

  if (again.choice == "yes") {
    startGame()
    } else {
      console.log("\nThanks for playing!");
  }
}

startGame();
