import { useContext, Suspense } from "react";
// Contexts
import { Global } from "../../context/contexts";

export default function Ranges({ functionProp, props }) {

    const { brightness, functions } = useContext(Global);

    return (
        <Suspense fallback={<h3>Cargando...</h3>}>
            <div className="ApareanceOptions_Input">
                <div className="ExecutionInput">
                    <div className="text">
                        <h4>{props.text}</h4>
                        <h6 className="DefinitionSelector">{props.definition}</h6>
                    </div>
                    <div className="Inputs">
                        <h3>{brightness}%</h3>
                        <input class="Range_Input" type="range" min="0" max="100" value={brightness} step="1" onChange={(event) => {
                            console.log(brightness);
                            functionProp(event.target.value);
                            functions.brightness(event.target.value);
                        }} />
                    </div>
                </div>
            </div>
        </ Suspense>
    )
}