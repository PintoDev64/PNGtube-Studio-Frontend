// Node Modules
import { useReducer, useState } from "react";

// Contexts
import { Avatars } from "../contexts";

// Reducer
import ModelReducer from "./reducer";
import { ModelData } from "../../service/Services";
import { getModelFind } from "../../tools/Tolls";

export default function ModelSettings({ children }) {

    const { data } = ModelData();
    const { userModel, Models, routeModels } = data;

    const responce = getModelFind(Models, userModel)

    const [ModelsState, setModelsState] = useState({
        select: userModel,
        spriteType: 0,
        router: routeModels,
        data: responce.modelData,
        models: Models,
        zoom: 250
    })

    const STATE_ACCESS = Object.freeze({
        select: 'select',
        spriteType: 'spriteType',
        data: 'data',
        zoom: 'zoom'
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
            const responce = getModelFind(Models, name);
            dispatch({
                action,
                value: responce.modelData
            });
        },
        getDataModel: () => {
            console.log(state)
        },
        setAll: (data) => {
            setModelsState(data)
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