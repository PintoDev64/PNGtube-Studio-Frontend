import { useContext } from "react";

// Contexts
import { Global } from "../context/contexts";

export default function useSubmitConfig() {

    const currentConfigFile = window.pngtubeAPI.getAllConfig();

    const { color, type, name, brightness, hardware } = useContext(Global);

    function SubmitConfig() {
        let current = {
            ...currentConfigFile,
            appConfig: {
                hardwareAcceleration: hardware,
                trayMenu: currentConfigFile.appConfig.trayMenu
            },
            appBackground: {
                type: type,
                colorBackground: color,
                wallpaper: name,
                brightness: brightness
            }
        };
        console.log(current);
        window.pngtubeAPI.setConfig(current)
    }

    return {
        SubmitConfig
    }
}