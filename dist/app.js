"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("colors");
// Interactive interface
const readline_1 = require("readline");
const rl = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout
});
// Question
const askQuestion = (question) => new Promise(res => rl.question(question, res));
const startPokedex = async () => {
    console.clear();
    let isRunning = true;
    console.log("==========================".italic);
    console.log("FIND POKEMON BY NAME OR ID".italic);
    console.log("==========================".italic);
    console.log("\nPowered by pokeapi.co\n".grey);
    console.log("Enter EXIT if you want to quit the program.\n".cyan);
    while (isRunning) {
        const answer = await askQuestion("Enter the name or the dex number of a Pokémon:\n");
        if (answer === "EXIT") {
            isRunning = false;
        }
    }
    process.exit(0);
};
startPokedex();
