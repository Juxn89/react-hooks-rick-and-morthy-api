import React, { useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { FavoritesCharacters } from './FavoritesCharacters';
import { Search as SearchComponent } from './Search';

import { CharacterReducer } from '../reducers/CharactersReducer';
import { ModeContext } from '../context/ModeContext';

import { emojis } from '../helpers/emojis';
import { CharactersType } from '../types/CharactersType';

const STATUS = {
    alive: 'Alive',
    death: 'Dead',
    unknown: 'unknown'
}

const SPECIES = {
    human: 'Human',
    alien: 'Humanoid'
}

const INITIAL_STATE = {
    favorites: []
}

export const Characters = () => {
    const {isDarkMode} = useContext(ModeContext);
    const [characters, setCharacters] = useState([]);
    const [Search, setSearch] = useState('');
    const searchInput = useRef(null);

    const [favoritesCharacters, dispatch] = useReducer(CharacterReducer, INITIAL_STATE);

    const filteredCharacters = useMemo( () => 
        characters.filter(item => item.name.toLowerCase().includes(Search.toLowerCase()) ),
        [characters, Search]
    );
    
    useEffect(() => {
      fetch('https://rickandmortyapi.com/api/character')
        .then(resp => resp.json())
        .then(data => setCharacters(data.results));
    }, []);

    const handleClickAddToFavorite = (character) => {
        const existCharacterInFavorite = favoritesCharacters.favorites.find(item => item.id === character.id);

        if(existCharacterInFavorite === null || existCharacterInFavorite === undefined) {
            dispatch( { type: CharactersType.AddToFavorite, payload: character } );
        }
    }

    const handleSearch = () => {
        setSearch(searchInput.current.value);
    }

    const handleSearchUseCallback = useCallback( () => {
        setSearch(searchInput.current.value);
    }, [] );
    
    return (
        <>
            <div className={ `Characters ${isDarkMode && 'Characters-DarkMode'}` }>
                { favoritesCharacters.favorites.length > 0 && <FavoritesCharacters characters={ favoritesCharacters }/> }
                <h2 className={ `TitleAllCharacters ${ isDarkMode && 'TitleAllCharacters-DarkMode' }` }>All characters</h2>
                {/* <SearchComponent search={ Search } searchInput= { searchInput } handleSearch={ handleSearch } /> */}
                <SearchComponent search={ Search } searchInput= { searchInput } handleSearch={ handleSearchUseCallback } />
                <div className='Characters-grid-content'>
                    {
                        filteredCharacters.map(character => (
                            <div key={character.id} className={ `Character-item ${isDarkMode && 'Character-item-DarkMode'}`}>
                                <picture>
                                    <img src={ character.image } alt={character.name}/>
                                </picture>
                                <div className='Character-descriptions'>
                                    <span className='Character-title'>Name: <span className='Character-value'>{ character.name }</span> </span>
                                    <span className='Character-title'>Status: <span className='Character-value'>{ `${ character.status } (${character.status === STATUS.alive ? emojis.alive : character.status === STATUS.death ? emojis.death : emojis.questionMark})` }</span> </span>
                                    <span className='Character-title'>Species: <span className='Character-value'>{ `${ character.species } (${ character.species ===  SPECIES.human ? emojis.human : emojis.alien })` }</span> </span>
                                    <button type='button' className='btn-AddToFavorite' onClick={ () => handleClickAddToFavorite(character) } title="Add to favorite...">💟</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>        
        </>
    )
}
