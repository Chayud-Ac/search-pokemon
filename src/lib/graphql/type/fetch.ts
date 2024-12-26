import { Attack, Evolution, PokemonBase } from "./common";


export interface FetchPokemonsParams {
    first: number;
}

export interface FetchSinglePokemonParams {
    id?: string;
    name?: string;
}

export interface QueryEvoParams {
    id?: string;
    name ?: string;
}

export interface QueryAtkParams {
    id?: string;
    name ?: string;
}


export interface FetchPokemonsResponse {
    data: {
        pokemons: PokemonBase[] | null;
    };
}


export interface FetchSinglePokemonResponse {
    data: {
        pokemon: PokemonBase | null;
    };
}

export interface QueryEvoResponse {
    data: {
        pokemon: {
            id: string;
            name: string;
            evolutions: Evolution[];
        };
    };
}

export interface QueryAtkResponse {
    data: {
        pokemon: {
            id: string;
            name: string;
            attacks: {
                fast: Attack[];
                special: Attack[];
            };
        };
    };
}
