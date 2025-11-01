import { Type, Ability, Stat } from '../types/pokemon.interface';

export const getPokemonTypes = (types: []) => {

    return types.reduce((a: any, b: any) => {

        const { type: { name } } = b;

        a.push(name);

        return a;

    }, []);

};

export const getPokemonAbilities = (abilities: any) => {

    return abilities.reduce((a: any, b: any) => {

        const { ability: { name }, is_hidden: isHidden } = b;

        a.push({
            name: name.split("-").join(" "),
            isHidden
        });

        return a;

    }, []);
};

export const getPokemonStats = (stats: any) => {
    return stats.map((s: any) => {
        const { base_stat: value, stat: { name } } = s;

        return {
            name: name.toUpperCase(),
            value
        }
    });

};

export const toUpperCammelCase = (txt: string) => {
    if (!txt) return "";

    const splittedText: string[] = txt.split("");

    const [firstLetter, ...rest] = splittedText;

    return [firstLetter?.toUpperCase(), ...rest].join("");
};

export const statBar = (value: number): string => {
    const x: number = Math.ceil(value / 5);

    return "0".repeat(x);

};