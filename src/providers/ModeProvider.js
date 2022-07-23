import React, { useReducer } from 'react'
import { ModeContext } from '../context/ModeContext'
import { ModeReducer } from '../reducers/ModeReducer';
import { ModeType } from '../types/modeTypes';

const MODE_INITIAL_VALUE = {
  isDarkMode: false
}

export const ModeProvider = ({children}) => {
  const [state, dispatch] = useReducer(ModeReducer, MODE_INITIAL_VALUE);

  const ChangeThemeMode = () => {
    dispatch({type: ModeType.changeMode, payload: { isDarkMode: !state.isDarkMode }});
  }

  return (
    <ModeContext.Provider value={ { ...state, ChangeThemeMode } }>
      {children}
    </ModeContext.Provider>
  )
}
