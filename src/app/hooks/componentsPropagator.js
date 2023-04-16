import { useContext } from 'react';

// Components
import Types from "../components/templates/Types";
import Selectors from "../components/templates/Selectors";
import Inputs from "../components/templates/Inputs";
import Ranges from "../components/templates/Ranges";

// Context
import { Global } from "../context/contexts";

// Resources
const { wallpapers } = window.pngtubeAPI.getWallpapers();

export default function useSettingsContentFunction() {

    const { type, functions, hardware } = useContext(Global);

    // Advanced
    function hardwareAccelerationAllow() {
        functions.hardwareAcceleration(!hardware);
    };
    // Apareance
    function typeApareance() {
        type === 'Color'
            ? functions.type('Image')
            : functions.type('Color')
    };
    function backgroundApareance(nameBackground) {
        functions.wallpaper(nameBackground);
    };
    function colorApareance(hex) {
        functions.color(hex);
    };
    function changeBrightness(percent) {
        functions.brightness(percent);
    };

    const SettingsContent = {
        Apareance: [
            {
                Id: 1,
                Component: Types,
                functionsProp: typeApareance,
                Data: {
                    text: 'Estilo/Tipo de fondo',
                    definition: 'Determinara entre usar una imagen o color solido de fondo',
                    selects: {
                        f: 'Color Solido',
                        l: 'Imagen/Gif'
                    },
                }
            },
            {
                Id: 2,
                Component: Selectors,
                functionsProp: backgroundApareance,
                Data: {
                    text: 'Fondo',
                    definition: 'Define cual imagen usar como fondo',
                    options: wallpapers,
                }
            },
            {
                Id: 3,
                Component: Inputs,
                functionsProp: colorApareance,
                Data: {
                    text: 'Color',
                    definition: 'Define que color de fondo usaras',
                }
            },
            {
                Id: 4,
                Component: Ranges,
                functionsProp: changeBrightness,
                Data: {
                    text: 'Brightness',
                    definition: 'Define el brillo del fondo',
                }
            }
        ],
        Advanced: [
            {
                Id: 1,
                Component: Types,
                functionsProp: hardwareAccelerationAllow,
                Data: {
                    text: 'Aceleracion por hardware',
                    definition: 'activa o desactiva la renderizacion por hardware',
                    selects: {
                        f: 'Off',
                        l: 'On'
                    },
                }
            },
        ]
    }

    return {
        SettingsContent
    }
};