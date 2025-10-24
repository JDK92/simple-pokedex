export const getPokemonTypes = (types: any) => {

    return types.reduce((a: any, b: any) => {

        const { type: { name } } = b;

        a.push(name);

        return a;

    }, []);

};

export const getPokemonAbilities = (abilities: any) => {

    return abilities.reduce((a: any, b: any) => {

        const { ability: { name }, is_hidden: isHidden } = b;

        a.push({ name, isHidden });

        return a;

    }, []);
};

export const getPokemonStats = (stats: any) => {
    return stats.map((s: any) => {
        const { base_stat: value, stat: { name } } = s;

        return {
            name,
            value
        }
    });

};