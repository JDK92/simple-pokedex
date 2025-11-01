"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statBar = exports.toUpperCammelCase = exports.getPokemonStats = exports.getPokemonAbilities = exports.getPokemonTypes = void 0;
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
        a.push({
            name: name.split("-").join(" "),
            isHidden
        });
        return a;
    }, []);
};
exports.getPokemonAbilities = getPokemonAbilities;
const getPokemonStats = (stats) => {
    return stats.map((s) => {
        const { base_stat: value, stat: { name } } = s;
        return {
            name: name.toUpperCase(),
            value
        };
    });
};
exports.getPokemonStats = getPokemonStats;
const toUpperCammelCase = (txt) => {
    if (!txt)
        return "";
    const splittedText = txt.split("");
    const [firstLetter, ...rest] = splittedText;
    return [firstLetter?.toUpperCase(), ...rest].join("");
};
exports.toUpperCammelCase = toUpperCammelCase;
const statBar = (value) => {
    const x = Math.ceil(value / 5);
    return "0".repeat(x);
};
exports.statBar = statBar;
