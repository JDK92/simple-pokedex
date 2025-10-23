import axios from 'axios';

const getPokemonByNameOrIdUrl = (id: number | string): string => {
    return `https://pokeapi.co/api/v2/pokemon/${id}`;
}

interface RequestResponse {

}

export const httpClient = {
    get: async (id: number | string) => {
        const url = getPokemonByNameOrIdUrl(id);
        try {
            const { data } = await axios.get(url)
            return data;
        } catch (e) {
            throw new Error(`No Pokémon found with ${id} name or dex number.`);
        }
    }
};