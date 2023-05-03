// Node Modules
import { useReducer, useState } from "react";

// Contexts
import { Avatars } from "../contexts";

// Reducer
import ModelReducer from "./reducer";

export default function ModelSettings({ children }) {

    const { userModel, Models } = window.pngtubeAPI.getModels();

    const [ModelsState, setModelsState] = useState({
        select: userModel,
        models: Models
    })

    const [state, dispatch] = useReducer(ModelReducer, ModelsState);

    const functions = {
        changeModelSelected: (value) => {
            dispatch({
                action: 'select',
                value: value
            })
        }
    }

    return (
        <Avatars.Provider value={{
            stateModels: state,
            functions
        }}>
            {children}
        </Avatars.Provider>
    )
}