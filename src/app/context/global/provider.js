// Node Modules
import { useReducer, useState } from "react";

// Contexts
import { Global } from '../contexts';

// Reducer
import GlobalReducer from './reducer';
import { GlobalData } from "../../service/Services";

export default function GlobalComponent({ children }) {

    const { data } = GlobalData();
    const {
        files,
        colorBackground,
        wallpaperBackground,
        typeBackground,
        wallpaperName,
        brightness,
        hardwareAcceleration,
        trayMenu
    } = data;

    const [Settings, setSettings] = useState(false);
    const [FullscreenMode, setFullscreenMode] = useState(false);
    const [SectionState, setSectionState] = useState(0);

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
        },
        setSection: (id) => {
            setSectionState(id)
        },
        ForceReload: () => {
            const {
                colorBackground,
                wallpaperBackground,
                typeBackground,
                wallpaperName,
                brightness,
                hardwareAcceleration,
                trayMenu
            } = window.pngtubeAPI.appConfig();
            setDefaultProps({
                color: colorBackground,
                wallpaper: wallpaperBackground,
                type: typeBackground,
                name: wallpaperName,
                resources: files,
                brightness: brightness,
                hardware: hardwareAcceleration,
                tray: trayMenu
            })
        }
    }

    return (
        <Global.Provider value={{
            GlobalState: state,
            defaultProps,
            STATE_ACCESS,
            settings: Settings,
            FullscreenMode,
            section: SectionState,
            functions
        }}>
            {children}
        </Global.Provider>
    );
}