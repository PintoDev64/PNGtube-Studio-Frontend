import { useContext, Suspense } from "react";
// Contexts
import { Global } from "../../context/contexts";

export default function Inputs({ functionProp, props }) {

    const { color } = useContext(Global);

    return (
        <Suspense fallback={<h3>Cargando...</h3>}>
            <div className="ApareanceOptions_Input">
                <div className="ExecutionInput">
                    <div className="text">
                        <h4>{props.text}</h4>
                        <h6 className="DefinitionSelector">{props.definition}</h6>
                    </div>
                    <div className="Inputs">
                        <input className="Color_Input" type="color" value={color} onChange={(event) => {
                            functionProp(event.target.value);
                        }}/>
                    </div>
                </div>
            </div>
        </ Suspense>
    )
}