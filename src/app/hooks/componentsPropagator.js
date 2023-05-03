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

    const { functions, state, STATE_ACCESS } = useContext(Global);

    const typeComponents = Object.freeze({
        ROW: false,
        COLUMN: true
    })

    // Advanced
    function hardwareAccelerationAllow() {
        functions.ChangeStateGlobal({
            action: STATE_ACCESS.hardware,
            value: !state.hardware
        });
    };
    // Apareance
    function typeApareance() {
        state.type === 'Color'
            ? functions.ChangeStateGlobal({
                action: STATE_ACCESS.type,
                value: 'Image'
            })
            : functions.ChangeStateGlobal({
                action: STATE_ACCESS.type,
                value: 'Color'
            })
    };
    function backgroundApareance(nameBackground) {
        functions.ChangeStateGlobal({
            action: STATE_ACCESS.name,
            value: nameBackground
        });
    };
    function colorApareance(hex) {
        functions.ChangeStateGlobal({
            action: STATE_ACCESS.color,
            value: hex
        });
    };
    function changeBrightness(percent) {
        functions.ChangeStateGlobal({
            action: STATE_ACCESS.brightness,
            value: percent
        });
    };
    function submitFileBackground(BackgroundURL) {
        console.log(BackgroundURL[0].path, BackgroundURL[0].name);
        window.pngtubeAPI.uploadBackground(BackgroundURL[0].path, BackgroundURL[0].name);
    };
    function TrayMenuAllow() {
        functions.ChangeStateGlobal({
            action: STATE_ACCESS.tray,
            value: !state.tray
        });
    }

    const SettingsContent = {
        Apareance: [
            {
                Id: 1,
                Component: Types,
                functionsProp: typeApareance,
                condition: state.type === 'Color' ? 'flex-start' : 'flex-end',
                Data: {
                    type: typeComponents.ROW,
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
                    type: typeComponents.ROW,
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
                    type: typeComponents.ROW,
                    text: 'Color',
                    definition: 'Define que color de fondo usaras',
                }
            },
            {
                Id: 4,
                Component: Ranges,
                functionsProp: changeBrightness,
                Data: {
                    type: typeComponents.ROW,
                    min: 1,
                    max: 100,
                    steps: 1,
                    text: 'Brightness',
                    definition: 'Define el brillo del fondo',
                    valueKey: state.brightness
                }
            },
            {
                Id: 5,
                Component: SubmitFiles,
                functionsProp: submitFileBackground,
                Data: {
                    type: typeComponents.ROW,
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
                condition: !state.hardware ? 'flex-start' : 'flex-end',
                Data: {
                    type: typeComponents.ROW,
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
                condition: !state.tray ? 'flex-start' : 'flex-end',
                Data: {
                    type: typeComponents.ROW,
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