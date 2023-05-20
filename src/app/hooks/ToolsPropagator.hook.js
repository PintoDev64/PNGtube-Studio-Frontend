import { useContext, useEffect } from 'react';

// Components
import Button from '../components/templates/Button';

// Context
import { Avatars, Global } from "../context/contexts";

export default function useToolsPropagator() {

    const { GlobalState, STATE_ACCESS, functions, FullscreenMode } = useContext(Global);
    const { stateModels, MODEL_ACCESS, functionsModels } = useContext(Avatars);

    function handlerFullscreen() {
        functions.fullscreenMode();
        console.log(FullscreenMode);
        if (!FullscreenMode) {
            document.body.webkitRequestFullScreen();
        } else {
            document.webkitExitFullscreen();
        };
    }

    const TollsControllerPropagator = {
        Tools: [
            {
                Id: 1,
                Component: Button,
                execute: handlerFullscreen,
                Data: {
                    condition: FullscreenMode ? GlobalState.resources['Fullscreen_Disable.png'] : GlobalState.resources['Fullscreen_Enable.png']
                },
            }
        ],
        ModelOptions: [
            {
                Id: 1,
                Component: Button,
                execute: handlerFullscreen,
                Data: {
                    condition: FullscreenMode ? GlobalState.resources['Fullscreen_Disable.png'] : GlobalState.resources['Fullscreen_Enable.png']
                },
            }
        ]
    }

    return {
        TollsControllerPropagator
    }
};