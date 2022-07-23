import { ModeType } from "../types/modeTypes";

const INITIAL_VALUE = {
    isDarkMode: false
};

export const ModeReducer = (state = INITIAL_VALUE, action) => {
    switch (action.type) {
        case ModeType.changeMode:
            return {
                ...state,
                isDarkMode: action.payload.isDarkMode
            }
        default:
            return {
                ...state
            }
    }
}