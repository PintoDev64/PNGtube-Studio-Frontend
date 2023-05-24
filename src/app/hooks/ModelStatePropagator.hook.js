import { useContext, useState } from 'react';

// Components
import Types from "../components/templates/Types";
import Selectors from "../components/templates/Selectors";
import Inputs from "../components/templates/Inputs";
import Ranges from "../components/templates/Ranges";
import SubmitFiles from '../components/templates/UploadFile';
import Lists from '../components/templates/Lists';

// Context
import { Avatars } from "../context/contexts";

export default function useModelStateFunction() {

    const { stateModels, MODEL_ACCESS, functionsModels } = useContext(Avatars);

    const typeComponents = Object.freeze({
        ROW: false,
        COLUMN: true
    });

    // Main
    function setZoomState(value) {
        functionsModels.changeModelSelected(MODEL_ACCESS.zoom, value)
    };

    const ModelStateContent = {
        Main: [
            {
                Id: 1,
                Component: Ranges,
                functionsProp: setZoomState,
                Data: {
                    type: typeComponents.COLUMN,
                    min: 100,
                    max: 500,
                    steps: 10,
                    text: 'Zoom',
                    definition: 'Define el tamaño del modelo',
                    valueKey: stateModels.zoom
                }
            }
        ]
    }

    return {
        ModelStateContent
    }
};