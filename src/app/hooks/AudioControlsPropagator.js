import { useContext } from 'react';

// Components
import Types from "../components/templates/Types";
import Ranges from "../components/templates/Ranges";

// Context
import { AudioController } from "../context/contexts";

export default function useAudioContext() {

    const { state, STATE_ACCESS, functions } = useContext(AudioController);

    const typeComponents = Object.freeze({
        ROW: false,
        COLUMN: true
    })

    function capturerStateChange() {
        functions.ChangeState({
            action: STATE_ACCESS.capturerState,
            value: !state.capturerState
        })
    };
    function capturerVolumeEvent(value) {
        functions.ChangeState({
            action: STATE_ACCESS.sensibility,
            value: parseInt(value)
        })
    };

    const AudioControllerPropagator = {
        Options: [
            {
                Id: 1,
                Component: Types,
                functionsProp: capturerStateChange,
                condition: !state.capturerState ? 'flex-start' : 'flex-end',
                Data: {
                    type: typeComponents.COLUMN,
                    text: '¿Capturar audio?',
                    definition: 'habilita o desahibilita la captura de audio',
                    selects: {
                        f: 'Off',
                        l: 'On'
                    },
                }
            },
            {
                Id: 2,
                Component: Ranges,
                functionsProp: capturerVolumeEvent,
                Data: {
                    type: typeComponents.COLUMN,
                    min: 15,
                    max: 100,
                    steps: 1,
                    text: 'Nivel de captura',
                    definition: 'Envia datos al modelo al nivel especificado',
                    valueKey: state.sensibility
                }
            }
        ]
    }

    return {
        AudioControllerPropagator
    }
};