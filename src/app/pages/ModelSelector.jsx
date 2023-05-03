// Node Modules
import { Suspense, useContext } from "react"

// Contexts
import { Avatars } from "../context/contexts"

// Css
import './pages.css'

export default function ModelSelector() {

    const { stateModels, functions } = useContext(Avatars);

    function selectModel(id) {
        functions.changeModelSelected(id);
    };

    return (
        <Suspense fallback>
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
                                            <img src={modelImage} width={100} height={100} />
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