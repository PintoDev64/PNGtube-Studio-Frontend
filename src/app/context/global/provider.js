// Node Modules
import { useReducer, useState } from "react";

// Contexts
import { Global } from '../contexts';

// Reducer
import GlobalReducer from './reducer';

export default function GlobalComponent({ children }) {

    const { colorBackground, wallpaperBackground, typeBackground, wallpaperName, brightness, hardwareAcceleration, trayMenu } = window.pngtubeAPI.appConfig();

    const files = window.pngtubeAPI.appResources();

    const [Settings, setSettings] = useState(false);
    const [FullscreenMode, setFullscreenMode] = useState(false);

    const [defaultProps, setDefaultProps] = useState({
        color: colorBackground,
        wallpaper: wallpaperBackground,
        type: typeBackground,
        name: wallpaperName,
        resources: files,
        brightness: brightness,
        hardware: hardwareAcceleration,
        tray: trayMenu
    });

    const STATE_ACCESS = Object.freeze({
        color: 'color',
        wallpaper: 'wallpaper',
        type: 'type',
        name: 'name',
        brightness: 'brightness',
        hardware: 'hardware',
        tray: 'tray'
    })

    const [state, dispatch] = useReducer(GlobalReducer, defaultProps);

    const functions = {
        ChangeStateGlobal: ({ action, value }) => {
            dispatch({
                action: action,
                value: value
            })
        },
        settings: () => {
            setSettings(!Settings)
        },
        compararObjetos: (objeto1, objeto2) => {
            const objeto1Str = JSON.stringify(objeto1);
            const objeto2Str = JSON.stringify(objeto2);
            return objeto1Str === objeto2Str;
        },
        editDefault: (value) => {
            setDefaultProps(value);
        },
        fullscreenMode: () => {
            setFullscreenMode(!FullscreenMode)
        }
    }

    return (
        <Global.Provider value={{
            GlobalState: state,
            defaultProps,
            STATE_ACCESS,
            settings: Settings,
            FullscreenMode,
            functions
        }}>
            {children}
        </Global.Provider>
    );
}