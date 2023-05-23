import { useContext, useState } from 'react';

// Components
import Types from "../components/templates/Types";
import Selectors from "../components/templates/Selectors";
import Inputs from "../components/templates/Inputs";
import Ranges from "../components/templates/Ranges";
import SubmitFiles from '../components/templates/UploadFile';
import Lists from '../components/templates/Lists';

// Context
import { Global } from "../context/contexts";
import { AppBackgrounds } from '../service/Services';

// Resources
const { wallpapers } = window.pngtubeAPI.getWallpapers();

export default function useSettingsContentFunction() {

    const { functions, GlobalState, STATE_ACCESS } = useContext(Global);
    const { AllWallpapersData } = AppBackgrounds();
    const [ReloadUI, setReloadUI] = useState(false);

    const typeComponents = Object.freeze({
        ROW: false,
        COLUMN: true
    }),
        TypesActived = Object.freeze({
            active: {
                flex: 'flex-end',
                color: '#000099'
            },
            disable: {
                flex: 'flex-start',
                color: '#535353'
            }
        })

    // General
    function conditionProp(stateCondition) {
        const { active, disable } = TypesActived;
        if (stateCondition) {
            return { justifyContent: disable.flex, backgroundColor: disable.color }
        } else {
            return { justifyContent: active.flex, backgroundColor: active.color }
        }
    }

    // Advanced
    function hardwareAccelerationAllow() {
        functions.ChangeStateGlobal({
            action: STATE_ACCESS.hardware,
            value: !GlobalState.hardware
        });
    };
    function TrayMenuAllow() {
        functions.ChangeStateGlobal({
            action: STATE_ACCESS.tray,
            value: !GlobalState.tray
        });
    };
    // Background
    async function submitFileBackground(BackgroundURL) {
        await window.pngtubeAPI.uploadBackground(BackgroundURL[0].path, BackgroundURL[0].name);
        functions.ForceReload();
        if (ReloadUI) window.location.reload();
    };
    function realoadUIAllow() {
        setReloadUI(!ReloadUI);
    };
    async function DeleteBakground(id) {
        await window.pngtubeAPI.removeBackground(id);
        console.log('Mensaje de eliminacion');
        functions.ForceReload();
    }
    // Apareance
    function typeApareance() {
        GlobalState.type === 'Color'
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

    const SettingsContent = {
        Apareance: [
            {
                Id: 1,
                Component: Types,
                functionsProp: typeApareance,
                condition: () => conditionProp(GlobalState.type === 'Color'),
                Data: {
                    type: typeComponents.ROW,
                    text: 'Tipo de fondo',
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
                    valueKey: GlobalState.brightness
                }
            }
        ],
        Backgrounds: [
            {
                Id: 1,
                Component: SubmitFiles,
                functionsProp: submitFileBackground,
                Data: {
                    type: typeComponents.ROW,
                    text: 'Subir Fondos ( PNG )',
                    definition: 'Sube tu fondo personalizado. Requiere reiniciar',
                }
            },
            {
                Id: 1,
                Component: Types,
                functionsProp: realoadUIAllow,
                condition: () => conditionProp(!ReloadUI),
                Data: {
                    type: typeComponents.ROW,
                    text: 'Reiniciar UI',
                    definition: 'la vista se reiniciara cuando se suba un fondo',
                }
            },
            {
                Id: 2,
                Component: Lists,
                functionsProp: DeleteBakground,
                Data: {
                    title: 'Fondos de Aplicacion',
                    elements: AllWallpapersData,
                }
            }
        ],
        Advanced: [
            {
                Id: 1,
                Component: Types,
                functionsProp: hardwareAccelerationAllow,
                condition: () => conditionProp(!GlobalState.hardware),
                Data: {
                    type: typeComponents.ROW,
                    text: 'Aceleracion por hardware',
                    definition: 'activa o desactiva la renderizacion por hardware'
                }
            },
            {
                Id: 2,
                Component: Types,
                functionsProp: TrayMenuAllow,
                condition: () => conditionProp(!GlobalState.tray),
                Data: {
                    type: typeComponents.ROW,
                    text: 'Minimizado',
                    definition: 'Muestra el icono de PNGtube en la bandeja',
                }
            }
        ]
    }

    return {
        SettingsContent
    }
};