import { CharactersType } from '../types/CharactersType';

const FAVORITE_INITIAL_STATE = {
    favorites: []
}

export const CharacterReducer = (state = FAVORITE_INITIAL_STATE, action) => {
    switch (action.type) {
        case CharactersType.AddToFavorite:
            return { ...state, favorites: [...state.favorites, action.payload] }        
        default:
            return state
    }
}