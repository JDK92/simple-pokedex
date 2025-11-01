export interface Ability {
    name: string;
    isHidden: boolean;
}

export interface Stat {
    name: string;
    value: number;
}

export interface Type {
    name: string;
    color: string;
}

export interface Pokemon {
    dexNumber: number;
    name: string;
    types: string[];
    abilities: Ability[];
    baseStats: Stat[];
}

