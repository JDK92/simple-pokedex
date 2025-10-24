"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonData = void 0;
const http_client_plugin_1 = require("../plugins/http-client.plugin");
const utils_1 = require("../utils/utils");
const getPokemonData = async (id) => {
    const pokemonData = await http_client_plugin_1.httpClient.get(id);
    const { id: dexNumber, name, types, stats, abilities } = pokemonData;
    const pokemon = {
        dexNumber,
        name,
        type: (0, utils_1.getPokemonTypes)(types),
        abilities: (0, utils_1.getPokemonAbilities)(abilities),
        baseStats: (0, utils_1.getPokemonStats)(stats)
    };
    return pokemon;
};
exports.getPokemonData = getPokemonData;
