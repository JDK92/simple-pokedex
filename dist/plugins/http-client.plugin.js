"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClient = void 0;
const axios_1 = __importDefault(require("axios"));
const getPokemonByNameOrIdUrl = (id) => {
    return `https://pokeapi.co/api/v2/pokemon/${id}`;
};
exports.httpClient = {
    get: async (id) => {
        const url = getPokemonByNameOrIdUrl(id);
        try {
            const { data } = await axios_1.default.get(url);
            return data;
        }
        catch (e) {
            throw new Error(`No Pokémon found with ${id} name or dex number.`);
        }
    }
};
