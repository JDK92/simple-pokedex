interface Pokemon {
    dexNumber: number;
    name: string;
    type: string[];
    abilities: { name: string, isHidden: boolean }[];
    baseStats: { name: string, value: number }[];
    firstAppearance: string;
}