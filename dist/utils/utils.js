"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonStats = exports.getPokemonAbilities = exports.getPokemonTypes = void 0;
const getPokemonTypes = (types) => {
    return types.reduce((a, b) => {
        const { type: { name } } = b;
        a.push(name);
        return a;
    }, []);
};
exports.getPokemonTypes = getPokemonTypes;
const getPokemonAbilities = (abilities) => {
    return abilities.reduce((a, b) => {
        const { ability: { name }, is_hidden: isHidden } = b;
        a.push({ name, isHidden });
        return a;
    }, []);
};
exports.getPokemonAbilities = getPokemonAbilities;
const getPokemonStats = (stats) => {
    return stats.map((s) => {
        const { base_stat: value, stat: { name } } = s;
        return {
            name,
            value
        };
    });
};
exports.getPokemonStats = getPokemonStats;
