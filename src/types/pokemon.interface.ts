export interface Ability {
    name: string;
    isHidden: boolean;
}

export interface Stat {
    name: string;
    value: number;
}

export interface Pokemon {
    dexNumber: number;
    name: string;
    type: string[];
    abilities: [];
    baseStats: [];
}

export interface Type {
    name: string;
    color: string;
}