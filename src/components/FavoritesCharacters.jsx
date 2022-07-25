import React, { useContext } from 'react'
import { ModeContext } from '../context/ModeContext'

export const FavoritesCharacters = ({characters}) => {
    const { isDarkMode } = useContext(ModeContext);
    return (
        <>
            <h2 className={ `TitleAllCharacters ${ isDarkMode && 'TitleAllCharacters-DarkMode' }` }>My favorite(s) character(s)</h2>
            <div className='characters-favorites-container'>
            {
                characters.favorites.map( item => (
                    <img key={`favorite-character-${item.id}`} className='favorite-character-avatar' src={ `${item.image}` } alt={ item.name } title={item.name}/>
                ))
            }
            </div>
        </>
    )
}
