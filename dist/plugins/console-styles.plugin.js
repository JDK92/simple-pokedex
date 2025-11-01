"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consoleStyles = void 0;
const chalk_1 = require("chalk");
const types_data_1 = require("../data/types.data");
const c = new chalk_1.Chalk({ level: 3 });
const types = types_data_1.pokemonTypes;
exports.consoleStyles = {
    underline: (txt) => {
        return c.underline(txt);
    },
    bold: (txt) => {
        return c.bold(txt);
    },
    dim: (txt) => {
        return c.dim(txt);
    },
    italic: (txt) => {
        return c.italic(txt);
    },
    success: (txt) => {
        return c.green(txt);
    },
    error: (txt) => {
        return c.red(txt);
    },
    setColorType: (txt) => {
        const type = types_data_1.pokemonTypes.find((t) => t.name === txt);
        if (!type)
            return "Error! Type not found";
        const { name, color } = type;
        const pokemonColorTypeStyle = c.black.bgHex(color);
        return pokemonColorTypeStyle(`[${name}]`.toUpperCase());
    }
};
