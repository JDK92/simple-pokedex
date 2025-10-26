"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonStats = exports.getPokemonAbilities = exports.getPokemonTypes = exports.createLogTable = exports.paintColorType = void 0;
const paintColorType = (type) => {
    switch (type) {
        case "normal":
            console.log(type.white);
            break;
        case "fighting":
            console.log(type.yellow);
            break;
        case "flying":
            console.log(type.white.bgCyan);
            break;
        case "poison":
            console.log(type.magenta.underline);
            break;
        case "ground":
            console.log(type.yellow.underline);
            break;
        case "rock":
            console.log(type.yellow.dim);
            break;
        case "bug":
            console.log(type.green);
            break;
        case "ghost":
            console.log(type.gray);
            break;
        case "steel":
            console.log(type.white.underline);
            break;
        case "fire":
            console.log(type.red.bold);
            break;
        case "water":
            console.log(type.blue.bold);
            break;
        case "grass":
            console.log(type.green.bold);
            break;
        case "electric":
            console.log(type.yellow.bold);
            break;
        case "psychic":
            console.log(type.magenta.bold);
            break;
        case "ice":
            console.log(type.cyan.bold);
            break;
        case "dragon":
            console.log(type.white.bgBlue);
            break;
        case "dark":
            console.log(type.grey.bold);
            break;
        case "fairy":
            console.log(type.white.bgMagenta);
            break;
        case "stellar":
            console.log(type.rainbow);
            break;
        case "unknown":
            console.log(type.black.bgWhite);
            break;
    }
};
exports.paintColorType = paintColorType;
const createLogTable = (data) => {
    return data.reduce((pv, cv, i) => {
        pv[i + 1] = { ...cv };
        return pv;
    }, {});
};
exports.createLogTable = createLogTable;
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
            name: name.split("-").join(" ").toUpperCase(),
            isHidden: (isHidden) ? "Yes" : "No"
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
