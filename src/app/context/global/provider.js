// Node Modules
import { useReducer } from "react";

// Contexts
import { Global } from '../contexts';

// Reducer
import GlobalReducer from './reducer';

export default function GlobalComponent({ children }) {

    const { colorBackground, wallpaperBackground, typeBackground } = window.pngtubeAPI.appConfig();

    const files = window.pngtubeAPI.appResources();

    const defaultProps = {
        color: colorBackground,
        wallpaper: wallpaperBackground,
        type: typeBackground,
        resources: files,
        settings: false
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
        settings: (open) => {
            dispatch({
                action: 'settings',
                value: open
            })
        }
    }

    return (
        <Global.Provider value={{
            color: state.color,
            wallpaper: state.wallpaper,
            type: state.type,
            settings: state.settings,
            resources: state.resources,
            functions
        }}>
            {children}
        </Global.Provider>
    );
}