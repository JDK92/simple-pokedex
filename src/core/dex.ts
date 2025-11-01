// Import service
import { getPokemonData } from "../services/pokemon-data.service";

// Interactive interface
import { createInterface } from 'readline';
import { Pokemon, Ability, Stat } from '../types/pokemon.interface';
import { toUpperCammelCase, statBar } from "../utils/utils";

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
            const { abilities, baseStats, dexNumber, name, types } = pokemon;

            console.log(cs.success("Pokémon found!"))

            console.log(cs.italic("\n============================\n"));

            console.log(`${dexNumber}.${toUpperCammelCase(name)} ${types.reduce((a, b) => a + cs.setColorType(b), "")}`);

            console.log();

            console.log(`${cs.bold("Abilities")}: ${abilities.reduce((a: string, b: Ability, index: number): string => {
                const { name, isHidden } = b;

                const x = name.split(" ").map(w => toUpperCammelCase(w)).join(" ");

                return a + `${x} ${(isHidden) ? "(Hidden)" : ""}${(abilities.length == index + 1) ? "" : "· "}`;
            }, "")}`)

            console.log();

            console.log(`Total Base Stats: ${baseStats.reduce((a, b) => a + b.value, 0)}`)

            baseStats.forEach(({ name, value }) => {
                console.log(`${name}: ${value}`);
            });

            console.log(cs.italic("\n============================\n"));


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