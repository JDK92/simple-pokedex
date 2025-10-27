import { Chalk } from 'chalk';
import { Type } from '../types/pokemon.interface';

const c = new Chalk({ level: 3 });

export const consoleStyles = {
    underline: (txt: string): string => {
        return c.underline(txt);
    },
    bold: (txt: string): string => {
        return c.bold(txt);
    },
    dim: (txt: string): string => {
        return c.dim(txt);
    },
    italic: (txt: string): string => {
        return c.italic(txt);
    },
    success: (txt: string): string => {
        return c.green(txt);
    },
    error: (txt: string): string => {
        return c.red(txt);
    },
    setColorType: (txt: string, pokemonTypes: Type[]): string => {
        const type: Type | undefined = pokemonTypes.find((t: Type) => t.name === txt);

        if (!type) {
            return "Error! Type not found"
        }

        const { name, color } = type;

        return c.bgHex(color).dim(name);
    }
}