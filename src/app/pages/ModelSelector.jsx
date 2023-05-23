// Node Modules
import { Suspense, useContext } from "react"

// Contexts
import { Avatars } from "../context/contexts"

// Css
import './pages.css'

export default function ModelSelector() {

    const { stateModels, functionsModels, MODEL_ACCESS } = useContext(Avatars);

    function selectModel(id) {
        functionsModels.changeModelSelected(MODEL_ACCESS.select, id);
        functionsModels.changeModelData(MODEL_ACCESS.data, id);
    };

    return (
        <Suspense fallback={<h3>Cargando...</h3>}>
            <div id="modelDetails">
                <h3>Avatares</h3>
                <hr className="hr-titles" />
                <ul>
                    {
                        stateModels.models.map(({ modelId, modelImage, modelName, modelOwner, modelDate }) => {
                            return (
                                <li key={modelId} onClick={() => selectModel(modelName)}>
                                    <div className="modelMetadata">
                                        <div className="modelMetadata_IMG">
                                            <img src={modelImage} alt={modelName} width={100} height={100} />
                                        </div>
                                        <div className="modelMetadata_INFO">
                                            <div className="modelMetadata__Name">
                                                <h4>{modelName}</h4>
                                            </div>
                                            <hr className="hr-titles" />
                                            <div className="modelMetadata__data">
                                                <h5>{modelOwner}</h5>
                                                <h5>{new Date(modelDate).getFullYear()} / {new Date(modelDate).getMonth()}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </Suspense>
    )
}