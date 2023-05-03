import { useContext } from "react";

// Contexts
import { Global } from "../context/contexts";

export default function useSubmitConfig() {

    const currentConfigFile = window.pngtubeAPI.getAllConfig();

    const { state, functions } = useContext(Global);

    function SubmitConfig() {
        let current = {
            ...currentConfigFile,
            appConfig: {
                hardwareAcceleration: state.hardware,
                trayMenu: state.tray
            },
            appBackground: {
                type: state.type,
                colorBackground: state.color,
                wallpaper: state.name,
                brightness: state.brightness
            }
        };
        functions.editDefault({
            color: state.color,
            wallpaper: state.wallpaper,
            type: state.type,
            name: state.name,
            resources: state.resources,
            brightness: state.brightness,
            hardware: state.hardware,
            tray: state.tray
        })
        window.pngtubeAPI.setConfig(current)
    }

    return {
        SubmitConfig
    }
}