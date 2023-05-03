// Node Modules
import { useReducer } from "react";

// Contexts
import { AudioController } from "../contexts";

// Reducer
import AudioReducer from "./reducer";

export default function AudioComponent({ children }) {

    let VolumeState = {
        volumeState: 'Bajo',
        sensibility: 50,
        capturerState: true
    }

    const STATE_ACCESS = Object.freeze({
        volumeState: 'volumeState',
        sensibility: 'sensibility',
        capturerState: 'capturerState',
    })

    const [state, dispatch] = useReducer(AudioReducer, VolumeState);

    const functions = {
        ChangeState: ({ action, value }) => {
            dispatch({
                action: action,
                value: value
            })
        }
    }

    return (
        <AudioController.Provider value={{
            state,
            STATE_ACCESS,
            functions
        }}>
            {children}
        </AudioController.Provider>
    )
}