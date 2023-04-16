// Node Modules
import { useReducer, useState } from "react";

// Contexts
import { Global } from '../contexts';

// Reducer
import GlobalReducer from './reducer';

export default function GlobalComponent({ children }) {

    const { colorBackground, wallpaperBackground, typeBackground,wallpaperName, brightness } = window.pngtubeAPI.appConfig();

    const files = window.pngtubeAPI.appResources();

    const [Settings, setSettings] = useState(false);

    const defaultProps = {
        color: colorBackground,
        wallpaper: wallpaperBackground,
        type: typeBackground,
        name: wallpaperName,
        resources: files,
        hardware: false,
        brightness: brightness
    };

    const [state, dispatch] = useReducer(GlobalReducer, defaultProps);

    const functions = {
        color: (hex) => {
            dispatch({
                action: 'color',
                value: hex
            })
        },
        wallpaper: (filePath) => {
            dispatch({
                action: 'wallpaper',
                value: filePath
            })
        },
        type: (typeBack) => {
            dispatch({
                action: 'type',
                value: typeBack
            })
        },
        hardwareAcceleration: (stateOF) => {
            dispatch({
                action: 'hardwareAcceleration',
                value: stateOF
            })
        },
        brightness: (value) => {
            dispatch({
                action: 'brightness',
                value: value
            })
        },
        settings: (open) => {
            setSettings(!Settings)
        },
        compararObjetos: (objeto1, objeto2) => {
            const objeto1Str = JSON.stringify(objeto1);
            const objeto2Str = JSON.stringify(objeto2);

            return objeto1Str === objeto2Str;
        }
    }

    return (
        <Global.Provider value={{
            state,
            defaultProps,
            color: state.color,
            wallpaper: state.wallpaper,
            type: state.type,
            name: state.name,
            settings: Settings,
            resources: state.resources,
            brightness: state.brightness,
            hardware: state.hardware,
            functions
        }}>
            {children}
        </Global.Provider>
    );
}