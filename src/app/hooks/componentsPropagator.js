import { useContext } from 'react';

// Components
import Types from "../components/templates/Types";
import Selectors from "../components/templates/Selectors";
import Inputs from "../components/templates/Inputs";
import Ranges from "../components/templates/Ranges";
import SubmitFiles from '../components/templates/UploadFile';

// Context
import { Global } from "../context/contexts";

// Resources
const { wallpapers } = window.pngtubeAPI.getWallpapers();

export default function useSettingsContentFunction() {

    const { type, functions, hardware, trayMenu } = useContext(Global);

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
        functions.wallpaperName(nameBackground);
    };
    function colorApareance(hex) {
        functions.color(hex);
    };
    function changeBrightness(percent) {
        functions.brightness(percent);
    };
    function submitFileBackground(percent) {
        functions.brightness(percent);
    };
    function TrayMenuAllow() {
        functions.trayMenu(!trayMenu);
    }

    const SettingsContent = {
        Apareance: [
            {
                Id: 1,
                Component: Types,
                functionsProp: typeApareance,
                condition: type === 'Color' ? 'flex-start' : 'flex-end',
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
            },
            {
                Id: 5,
                Component: SubmitFiles,
                functionsProp: submitFileBackground,
                Data: {
                    text: 'Subir Fondos ( PNG )',
                    definition: 'Sube tu fondo personalizado. Debe reiniciar',
                }
            }
        ],
        Advanced: [
            {
                Id: 1,
                Component: Types,
                functionsProp: hardwareAccelerationAllow,
                condition: !hardware ? 'flex-start' : 'flex-end',
                Data: {
                    text: 'Aceleracion por hardware',
                    definition: 'activa o desactiva la renderizacion por hardware',
                    selects: {
                        f: 'Off',
                        l: 'On'
                    },
                }
            },
            {
                Id: 2,
                Component: Types,
                functionsProp: TrayMenuAllow,
                condition: !trayMenu ? 'flex-start' : 'flex-end',
                Data: {
                    text: 'Minimizado',
                    definition: 'Muestra el icono de PNGtube en la bandeja',
                    selects: {
                        f: 'Off',
                        l: 'On'
                    },
                }
            }
        ]
    }

    return {
        SettingsContent
    }
};