import "colors";

// Import service
import { getPokemonData } from "./services/pokemon-data.service";

// Interactive interface
import { createInterface } from 'readline';
import { Pokemon } from "./types/pokemon.interface";

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

    console.log("==========================".italic);
    console.log("FIND POKEMON BY NAME OR ID".italic)
    console.log("==========================".italic);
    console.log("\nPowered by pokeapi.co\n".grey);

    console.log("Enter EXIT if you want to quit the program.\n".cyan)

    while (isRunning) {
        const answer: string = await askQuestion("Enter the name or the dex number of a Pokémon:\n");

        if (answer.toUpperCase() === "EXIT") {
            isRunning = false;
        }

        try {
            const pokemon: Pokemon = await getPokemonData(answer);
            const { abilities, baseStats, dexNumber, name, type } = pokemon;

            console.log("Pokémon found!\n".bgWhite.black);
            console.log(`${dexNumber} - ${name.toUpperCase()}`);
            console.log(`Type: ${type}`)
            console.log(`Abilities: ${abilities}`);


            await askQuestion("\nPress enter to continue...\n")

        } catch (error) {
            console.log(`Pokémon not found with id or namer ${answer}. Try again.\n`.red);
        }

    }

    process.exit(0);
}




startPokedex();