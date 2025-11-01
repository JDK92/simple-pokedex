"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startPokedex = void 0;
// Import service
const pokemon_data_service_1 = require("../services/pokemon-data.service");
// Interactive interface
const readline_1 = require("readline");
const utils_1 = require("../utils/utils");
const plugins_1 = require("../plugins");
const rl = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout
});
// Question
const askQuestion = (question) => new Promise(res => rl.question(question, res));
const startPokedex = async () => {
    console.clear();
    let isRunning = true;
    console.log(plugins_1.consoleStyles.italic("============================"));
    console.log(plugins_1.consoleStyles.italic(" FIND POKEMON BY NAME OR ID "));
    console.log(plugins_1.consoleStyles.italic("============================"));
    console.log(plugins_1.consoleStyles.dim("\nPowered by pokeapi.co\n"));
    console.log("Enter EXIT if you want to quit the program.\n");
    while (isRunning) {
        const answer = await askQuestion("Enter the name or the dex number of a Pokémon:\n");
        if (answer.toUpperCase() === "EXIT") {
            isRunning = false;
            break;
        }
        try {
            const pokemon = await (0, pokemon_data_service_1.getPokemonData)(answer);
            const { abilities, baseStats, dexNumber, name, types } = pokemon;
            console.log(plugins_1.consoleStyles.success("Pokémon found!"));
            console.log(plugins_1.consoleStyles.italic("\n============================\n"));
            console.log(`${dexNumber}.${(0, utils_1.toUpperCammelCase)(name)} ${types.reduce((a, b) => a + plugins_1.consoleStyles.setColorType(b), "")}`);
            console.log();
            console.log(`${plugins_1.consoleStyles.bold("Abilities")}: ${abilities.reduce((a, b, index) => {
                const { name, isHidden } = b;
                const x = name.split(" ").map(w => (0, utils_1.toUpperCammelCase)(w)).join(" ");
                return a + `${x} ${(isHidden) ? "(Hidden)" : ""}${(abilities.length == index + 1) ? "" : "· "}`;
            }, "")}`);
            console.log();
            console.log(`Total Base Stats: ${baseStats.reduce((a, b) => a + b.value, 0)}`);
            baseStats.forEach(({ name, value }) => {
                console.log(`${name}: ${value}`);
            });
            console.log(plugins_1.consoleStyles.italic("\n============================\n"));
            await askQuestion("\nPress enter to continue...\n");
        }
        catch (error) {
            console.log(plugins_1.consoleStyles.error(`Pokémon not found with id or namer ${answer}. Try again.\n`));
            await askQuestion("\nPress enter to continue...\n");
        }
    }
    console.log("Closing in 3 seconds...");
    setTimeout(() => {
        console.log("Bye!");
        process.exit(0);
    }, 3000);
};
exports.startPokedex = startPokedex;
(0, exports.startPokedex)();
