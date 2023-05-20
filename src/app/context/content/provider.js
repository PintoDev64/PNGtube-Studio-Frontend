// Node Modules
import { useReducer, useState } from "react";

// Contexts
import { Avatars } from "../contexts";

// Reducer
import ModelReducer from "./reducer";

export default function ModelSettings({ children }) {

    const { userModel, Models, routeModels } = window.pngtubeAPI.getModels();

    const responce = Models.find(({ modelName }) => modelName === userModel);

    const [ModelsState, setModelsState] = useState({
        select: userModel,
        spriteType: 0,
        router: routeModels,
        data: responce.modelData,
        models: Models
    })

    const STATE_ACCESS = Object.freeze({
        select: 'select',
        spriteType: 'spriteType',
        data: 'data'
    })

    const [state, dispatch] = useReducer(ModelReducer, ModelsState);

    const functionsModels = {
        changeModelSelected: (action, value) => {
            dispatch({
                action,
                value
            });
        },
        changeModelData: (action, name) => {
            const responce = Models.find(({ modelName }) => modelName === name);
            console.log(responce.modelData);
            dispatch({
                action,
                value: responce.modelData
            });
        }
    }

    return (
        <Avatars.Provider value={{
            stateModels: state,
            MODEL_ACCESS: STATE_ACCESS,
            functionsModels
        }}>
            {children}
        </Avatars.Provider>
    )
}