import "colors";

// Import service
import { getPokemonData } from "./services/pokemon-data.service";

// Interactive interface
import { createInterface } from 'readline';
import { Pokemon, Ability, Stat } from "./types/pokemon.interface";
import { paintColorType, createLogTable } from "./utils/utils";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

// Question
const askQuestion = (question: string): Promise<string> =>
    new Promise(res => rl.question(question, res));


const startPokedex = async () => {
    console.clear();

    let isRunning: boolean = true;

    console.log("============================".italic);
    console.log(" FIND POKEMON BY NAME OR ID ".italic)
    console.log("============================".italic);
    console.log("\nPowered by pokeapi.co\n".grey);

    console.log("Enter EXIT if you want to quit the program.\n".cyan)

    while (isRunning) {
        const answer: string = await askQuestion("Enter the name or the dex number of a Pokémon:\n");

        if (answer.toUpperCase() === "EXIT") {
            isRunning = false;
            break;
        }

        try {
            const pokemon: Pokemon = await getPokemonData(answer);
            const { abilities, baseStats, dexNumber, name, type } = pokemon;

            console.log("NAME:".bold)
            console.log(`${dexNumber}.${name}`);
            console.log(`${(type.length == 1) ? "TYPE:" : "TYPES:"}`);
            type.forEach(paintColorType);
            console.table(createLogTable(abilities));
            console.table(createLogTable(baseStats));

            await askQuestion("\nPress enter to continue...\n")

        } catch (error) {
            console.log(`Pokémon not found with id or namer ${answer}. Try again.\n`.red);
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