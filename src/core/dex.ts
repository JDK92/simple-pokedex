// Import service
import { getPokemonData } from "../services/pokemon-data.service";

// Interactive interface
import { createInterface } from 'readline';
import { Pokemon, Ability, Stat } from "../types/pokemon.interface";
import { createLogTable } from "../utils/utils";

import { consoleStyles as cs } from '../plugins';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

// Question
const askQuestion = (question: string): Promise<string> =>
    new Promise(res => rl.question(question, res));


export const startPokedex = async () => {
    console.clear();

    let isRunning: boolean = true;

    console.log(cs.italic("============================"));
    console.log(cs.italic(" FIND POKEMON BY NAME OR ID "))
    console.log(cs.italic("============================"));
    console.log(cs.dim("\nPowered by pokeapi.co\n"));

    console.log("Enter EXIT if you want to quit the program.\n")

    while (isRunning) {
        const answer: string = await askQuestion("Enter the name or the dex number of a Pokémon:\n");

        if (answer.toUpperCase() === "EXIT") {
            isRunning = false;
            break;
        }

        try {
            const pokemon: Pokemon = await getPokemonData(answer);
            const { abilities, baseStats, dexNumber, name, type } = pokemon;

            console.log(cs.success("Pokémon found!"))
            console.log(`${dexNumber}.${name}`);
            console.log(`${(type.length == 1) ? "TYPE:" : "TYPES:"}`);
            console.table(createLogTable(abilities));
            console.table(createLogTable(baseStats));

            await askQuestion("\nPress enter to continue...\n")

        } catch (error) {
            console.log(cs.error(`Pokémon not found with id or namer ${answer}. Try again.\n`));
            await askQuestion("\nPress enter to continue...\n")
        }

    }
    console.log("Closing in 3 seconds...")
    setTimeout(() => {
        console.log("Bye!");
        process.exit(0);
    }, 3000)
}


startPokedex();