import { useContext } from "react";

// Contexts
import { Global } from "../context/contexts";

export default function useSubmitConfig() {

    const currentConfigFile = window.pngtubeAPI.getAllConfig();

    const { color, type, wallpaper, name, resources, brightness, hardware, trayMenu, functions } = useContext(Global);

    function SubmitConfig() {
        let current = {
            ...currentConfigFile,
            appConfig: {
                hardwareAcceleration: hardware,
                trayMenu: trayMenu
            },
            appBackground: {
                type: type,
                colorBackground: color,
                wallpaper: name,
                brightness: brightness
            }
        };
        functions.editDefault({
            color,
            wallpaper,
            type,
            name,
            resources,
            brightness,
            hardware,
            tray: trayMenu
        })
        window.pngtubeAPI.setConfig(current)
    }

    return {
        SubmitConfig
    }
}