import React from 'react'

export const FavoritesCharacters = ({characters}) => {
  return (
    <>
        <h2 className='TitleAllCharacters'>My favorite(s) character(s)</h2>
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
