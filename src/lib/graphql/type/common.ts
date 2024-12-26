// Common Types
export interface Dimension {
    minimum: string;
    maximum: string;
}

export interface PokemonBase {
    id: string;
    number: string;
    name: string;
    classification: string;
    types: string[];
    resistant: string[];
    weaknesses: string[];
    fleeRate: number;
    maxCP: number;
    maxHP: number;
    image: string;
    weight: Dimension;
    height: Dimension;
}

export interface Attack {
    name: string;
    type: string;
    damage: number;
}


export interface Evolution extends Omit<PokemonBase, 'weight' | 'height'> {
    evolutions?: Evolution[];
}
