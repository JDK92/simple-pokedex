export const paintColorType = (type: string) => {
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
}

export const createLogTable = (data: []): Record<number, any> => {
    return data.reduce((pv: Record<number, any>, cv: Record<string, any>, i: number) => {
        pv[i + 1] = { ...cv };
        return pv;
    }, {})
};

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
            name: name.split("-").join(" ").toUpperCase(),
            isHidden: (isHidden) ? "Yes" : "No"
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


