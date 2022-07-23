import React, { useContext, useEffect, useState } from 'react';
import { ModeContext } from '../context/ModeContext';
import { emojis } from '../helpers/emojis';

const STATUS = {
    alive: 'Alive',
    death: 'Death'
}

const SPECIES = {
    human: 'Human',
    alien: 'Humanoid'
}

export const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const {isDarkMode} = useContext(ModeContext);
    
    useEffect(() => {
      fetch('https://rickandmortyapi.com/api/character')
        .then(resp => resp.json())
        .then(data => setCharacters(data.results));
    }, []);
    
    return (
        <div className={ `Characters ${isDarkMode && 'Characters-DarkMode'}` }>
            <div className='Characters-grid-content'>
                {
                    characters.map(character => (
                        <div key={character.id} className={ `Character-item ${isDarkMode && 'Character-item-DarkMode'}`}>
                            <picture>
                                <img src={ character.image } alt={character.name}/>
                            </picture>
                            <div className='Character-descriptions'>
                                <span className='Character-title'>Name: <span className='Character-value'>{ character.name }</span> </span>
                                <span className='Character-title'>Status: <span className='Character-value'>{ `${ character.status } (${character.status === STATUS.alive ? emojis.alive : emojis.death})` }</span> </span>
                                <span className='Character-title'>Species: <span className='Character-value'>{ `${ character.species } (${ character.species ===  SPECIES.human ? emojis.human : emojis.alien })` }</span> </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
