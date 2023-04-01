// Node Modules
import { useReducer } from "react";

// Contexts
import { Global } from '../contexts';

// Reducer
import GlobalReducer from './reducer';

export default function Global({ children }) {

    const { colorBackground, wallpaperBackground, typeBackground, hardwareAcceleration, trayMenu } = window.pngtubeAPI.frontData();

    const defaultProps = {
        color: colorBackground,
        wallpaper: wallpaperBackground,
        type: typeBackground,
        hardware: hardwareAcceleration,
        tray: trayMenu
    }

    const [state, dispatch] = useReducer(GlobalReducer, defaultProps)

    return (
        <Global.Provider value={{
        }}>
            {children}
        </Global.Provider>
    )
}