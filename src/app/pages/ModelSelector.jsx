// Node Modules
import { useContext } from "react"

// Contexts
import { Avatars } from "../context/contexts"

// Css
import './pages.css'

export default function ModelSelector() {

    const { state, select, models, functions } = useContext(Avatars);

    return (
        <>
            <div id="modelDetails">
                <h3>Avatares</h3>
                <hr className="hr-titles" />
                <ul>
                    {
                        models.map(avatar => {
                            return (
                                <li key={avatar.modelId}>
                                    <div className="modelMetadata">
                                        <div className="modelMetadata_IMG">
                                            <img src={avatar.modelImage} width={100} height={100} />
                                        </div>
                                        <div className="modelMetadata_INFO">
                                            <div className="modelMetadata__Name">
                                                <h4>{avatar.modelName}</h4>
                                            </div>
                                            <hr className="hr-titles" />
                                            <div className="modelMetadata__data">
                                                <h5>{avatar.modelOwner}</h5>
                                                <h5>{new Date(avatar.modelDate).getFullYear()} / {new Date(avatar.modelDate).getMonth()}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}