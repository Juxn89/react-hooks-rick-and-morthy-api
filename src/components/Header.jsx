import React, { useContext, useReducer, useState } from 'react';
import { ModeContext } from '../context/ModeContext';

export const Header = () => {
    const { isDarkMode, ChangeThemeMode } = useContext(ModeContext);
    return (
        <div className='Header'>
            <h1>React hooks</h1>
            <button type='button' className='btn-LD-Mode' onClick={ () =>  ChangeThemeMode() }> { isDarkMode ? 'Light Mode' : 'Dark Mode' } </button>
        </div>
    )
}
