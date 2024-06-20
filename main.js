#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    fuel;
    constructor(NAME) {
        this.name = NAME;
        this.fuel = 100;
    }
    ;
    fuelDecrease() {
        this.fuel -= 25;
    }
    ;
    fuelIncrease() {
        this.fuel = 100;
    }
    ;
}
;
class Opponent {
    name;
    fuel;
    constructor(NAME) {
        this.name = NAME;
        this.fuel = 100;
    }
    ;
    fuelDecrease() {
        this.fuel -= 25;
    }
}
;
console.log(chalk.bold.hex("D470A2")("\n\t<<<<<<(---------------------------------------------------------------)>>>>>>"));
console.log(chalk.bold.hex("D470A2")("\t\t\t\tWelcome To My Adventure Game"));
console.log(chalk.bold.hex("D470A2")("\t<<<<<<(---------------------------------------------------------------)>>>>>>\n"));
//Prompting from Player
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter your name: "
    },
    {
        name: "selectedOpponent",
        type: "list",
        message: "Select your opponent:",
        choices: [chalk.yellowBright("Skeleton"), chalk.greenBright("Alien"), chalk.redBright("Zombie")]
    }
]);
let player1 = new Player(player.name);
let opponent1 = new Opponent(player.selectedOpponent);
do {
    //Skeleton
    if (player.selectedOpponent === chalk.yellowBright("Skeleton")) {
        let ask = await inquirer.prompt({
            name: "option",
            type: "list",
            message: "Skeleton is approaching you.What would you like to do? ",
            choices: [chalk.cyanBright("Attack"), chalk.blueBright("Drink Potion"), chalk.redBright("Run for your Life")]
        });
        if (ask.option === chalk.cyanBright("Attack")) {
            let randomNum = Math.floor(Math.random() * 2);
            if (randomNum > 0) {
                player1.fuelDecrease();
                console.log(chalk.yellowBright.bold(`\n\tYour fuel is decreasing ${player1.name}. Its ${player1.fuel} now!!`));
                console.log(chalk.bold.greenBright(`\t${player.selectedOpponent} fuel is ${opponent1.fuel}!!`));
                if (player1.fuel <= 0) {
                    console.log(chalk.bold.redBright("\n\tOh NOO!! You Loose better Luck Next Time."));
                    process.exit();
                }
                ;
            }
            else {
                opponent1.fuelDecrease();
                console.log(chalk.yellowBright.bold(`\n\t${player.selectedOpponent} fuel is decreasing. Its ${opponent1.fuel} now!!`));
                console.log(chalk.bold.greenBright(`\tYour fuel is ${player1.fuel}!`));
                if (opponent1.fuel <= 0) {
                    console.log(chalk.bold.greenBright("\n\tYayyy!! You Won."));
                    process.exit();
                }
                ;
            }
            ;
        }
        else if (ask.option === chalk.blueBright("Drink Potion")) {
            player1.fuelIncrease();
            console.log(chalk.bold.greenBright(`\n\tYou Drank the Health Potion your fuel is ${player1.fuel}`));
        }
        else {
            console.log(chalk.bold.redBright("\n\tOh NOO!! You Loose better Luck Next Time."));
            process.exit();
        }
        ;
    }
    //Alien
    else if (player.selectedOpponent === chalk.greenBright("Alien")) {
        let ask = await inquirer.prompt({
            name: "option",
            type: "list",
            message: "Alien is approaching you.What would you like to do? ",
            choices: [chalk.cyanBright("Attack"), chalk.blueBright("Drink Potion"), chalk.redBright("Run for your Life")]
        });
        if (ask.option === chalk.cyanBright("Attack")) {
            let randomNum = Math.floor(Math.random() * 2);
            if (randomNum > 0) {
                player1.fuelDecrease();
                console.log(chalk.yellowBright.bold(`\n\tYour fuel is decreasing ${player1.name}. Its ${player1.fuel} now!!`));
                console.log(chalk.bold.greenBright(`\t${player.selectedOpponent} fuel is ${opponent1.fuel}!!`));
                if (player1.fuel <= 0) {
                    console.log(chalk.bold.redBright("\n\tOh NOO!! You Loose better Luck Next Time."));
                    process.exit();
                }
                ;
            }
            else {
                opponent1.fuelDecrease();
                console.log(chalk.yellowBright.bold(`\n\t${player.selectedOpponent} fuel is decreasing. Its ${opponent1.fuel} now!!`));
                console.log(chalk.bold.greenBright(`\tYour fuel is ${player1.fuel}!`));
                if (opponent1.fuel <= 0) {
                    console.log(chalk.bold.greenBright("\n\tYayyy!! You Won."));
                    process.exit();
                }
                ;
            }
            ;
        }
        else if (ask.option === chalk.blueBright("Drink Potion")) {
            player1.fuelIncrease();
            console.log(chalk.bold.greenBright(`\n\tYou Drank the Health Potion your fuel is ${player1.fuel}`));
        }
        else {
            console.log(chalk.bold.redBright("\n\tOh NOO!! You Loose better Luck Next Time."));
            process.exit();
        }
        ;
    }
    //Zombie
    else if (player.selectedOpponent === chalk.redBright("Zombie")) {
        let ask = await inquirer.prompt({
            name: "option",
            type: "list",
            message: "Zombie is just behind you!What would you like to do? ",
            choices: [chalk.cyanBright("Attack"), chalk.blueBright("Drink Potion"), chalk.redBright("Run for your Life")]
        });
        if (ask.option === chalk.cyanBright("Attack")) {
            let randomNum = Math.floor(Math.random() * 2);
            if (randomNum > 0) {
                player1.fuelDecrease();
                console.log(chalk.yellowBright.bold(`\n\tYour fuel is decreasing ${player1.name}. Its ${player1.fuel} now!!`));
                console.log(chalk.bold.greenBright(`\t${player.selectedOpponent} fuel is ${opponent1.fuel}!!`));
                if (player1.fuel <= 0) {
                    console.log(chalk.bold.redBright("\n\tOh NOO!! You Loose better Luck Next Time."));
                    process.exit();
                }
                ;
            }
            else {
                opponent1.fuelDecrease();
                console.log(chalk.yellowBright.bold(`\n\t${player.selectedOpponent} fuel is decreasing. Its ${opponent1.fuel} now!!`));
                console.log(chalk.bold.greenBright(`\tYour fuel is ${player1.fuel}!`));
                if (opponent1.fuel <= 0) {
                    console.log(chalk.bold.greenBright("\n\tYayyy!! You Won."));
                    process.exit();
                }
                ;
            }
            ;
        }
        else if (ask.option === chalk.blueBright("Drink Potion")) {
            player1.fuelIncrease();
            console.log(chalk.bold.greenBright(`\n\tYou Drank the Health Potion your fuel is ${player1.fuel}`));
        }
        else {
            console.log(chalk.bold.redBright("\n\tOh NOO!! You Loose better Luck Next Time."));
            process.exit();
        }
        ;
    }
} while (true);
