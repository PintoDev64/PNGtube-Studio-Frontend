import { useContext } from "react";

// Contexts
import { Global } from "../context/contexts";

export default function useSubmitConfig() {

    const currentConfigFile = window.pngtubeAPI.getAllConfig();

    const { GlobalState, functions } = useContext(Global);

    function SubmitConfig() {
        let current = {
            ...currentConfigFile,
            appConfig: {
                hardwareAcceleration: GlobalState.hardware,
                trayMenu: GlobalState.tray
            },
            appBackground: {
                type: GlobalState.type,
                colorBackground: GlobalState.color,
                wallpaper: GlobalState.name,
                brightness: GlobalState.brightness
            }
        };
        functions.editDefault({
            color: GlobalState.color,
            wallpaper: GlobalState.wallpaper,
            type: GlobalState.type,
            name: GlobalState.name,
            resources: GlobalState.resources,
            brightness: GlobalState.brightness,
            hardware: GlobalState.hardware,
            tray: GlobalState.tray
        })
        window.pngtubeAPI.setConfig(current)
    }

    return {
        SubmitConfig
    }
}