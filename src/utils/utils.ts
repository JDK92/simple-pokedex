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