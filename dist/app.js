"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("colors");
// Import service
const pokemon_data_service_1 = require("./services/pokemon-data.service");
// Interactive interface
const readline_1 = require("readline");
const utils_1 = require("./utils/utils");
const rl = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout
});
// Question
const askQuestion = (question) => new Promise(res => rl.question(question, res));
const startPokedex = async () => {
    console.clear();
    let isRunning = true;
    console.log("============================".italic);
    console.log(" FIND POKEMON BY NAME OR ID ".italic);
    console.log("============================".italic);
    console.log("\nPowered by pokeapi.co\n".grey);
    console.log("Enter EXIT if you want to quit the program.\n".cyan);
    while (isRunning) {
        const answer = await askQuestion("Enter the name or the dex number of a Pokémon:\n");
        if (answer.toUpperCase() === "EXIT") {
            isRunning = false;
            break;
        }
        try {
            const pokemon = await (0, pokemon_data_service_1.getPokemonData)(answer);
            const { abilities, baseStats, dexNumber, name, type } = pokemon;
            console.log("NAME:".bold);
            console.log(`${dexNumber}.${name}`);
            console.log(`${(type.length == 1) ? "TYPE:" : "TYPES:"}`);
            type.forEach(utils_1.paintColorType);
            console.table((0, utils_1.createLogTable)(abilities));
            console.table((0, utils_1.createLogTable)(baseStats));
            await askQuestion("\nPress enter to continue...\n");
        }
        catch (error) {
            console.log(`Pokémon not found with id or namer ${answer}. Try again.\n`.red);
            await askQuestion("\nPress enter to continue...\n");
        }
    }
    console.log("Closing in 3 seconds...");
    setTimeout(() => {
        console.log("Bye!");
        process.exit(0);
    }, 3000);
};
startPokedex();
