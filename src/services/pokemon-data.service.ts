import { Pokemon } from '../types/pokemon.interface';
import { httpClient } from '../plugins/http-client.plugin';

import { getPokemonAbilities, getPokemonStats, getPokemonTypes } from '../utils/utils';

export const getPokemonData = async (id: number | string) => {
    const pokemonData = await httpClient.get(id);

    const { id: dexNumber, name, types, stats, abilities } = pokemonData;

    const pokemon: Pokemon = {
        dexNumber,
        name,
        type: getPokemonTypes(types),
        abilities: getPokemonAbilities(abilities),
        baseStats: getPokemonStats(stats)
    }

    return pokemon;

}