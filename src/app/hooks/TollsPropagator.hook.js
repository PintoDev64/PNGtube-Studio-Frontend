import { useContext } from 'react';

// Components
import Button from '../components/templates/Button';

// Context
import { Avatars, Global } from "../context/contexts";

export default function useTollsPropagator() {

    const { GlobalState, functions, FullscreenMode } = useContext(Global);
    const { stateModels, MODEL_ACCESS, functionsModels } = useContext(Avatars);

    // Validation
    function ModelDataPropagator() {
        let responce = [];
        const { data } = stateModels;
        if (data.States.length > 1) {
            data.States.forEach((_, index) => {
                const SelectStateModel = () => setModelState(index);
                responce.push({
                    Id: index,
                    Component: Button,
                    execute: SelectStateModel,
                    Data: {
                        imgNone: `${index}`,
                        condition: GlobalState.resources['H-icon.png']
                    },
                });
            });
        }
        return responce;
    }

    // General
    function conditionProp(stateCondition) {
        if (stateCondition) {
            return GlobalState.resources['Fullscreen_Disable.png']
        } else {
            return GlobalState.resources['Fullscreen_Enable.png']
        }
    }

    // Tolls
    function handlerFullscreen() {
        functions.fullscreenMode();
        if (!FullscreenMode) {
            document.body.webkitRequestFullScreen();
        } else {
            document.webkitExitFullscreen();
        };
    }

    // ModelOptions
    function setModelState(id) {
        functionsModels.changeModelSelected(MODEL_ACCESS.spriteType, id)
    }

    const TollsControllerPropagator = {
        Tolls: [
            {
                Id: 1,
                Component: Button,
                execute: handlerFullscreen,
                Data: {
                    condition: conditionProp(FullscreenMode)
                },
            }
        ],
        ModelOptions: ModelDataPropagator()
    }

    return {
        TollsControllerPropagator
    }
};