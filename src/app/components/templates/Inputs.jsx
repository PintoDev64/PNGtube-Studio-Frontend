import { useContext, Suspense } from "react";
// Contexts
import { Global } from "../../context/contexts";

export default function Inputs({ functionProp, props }) {

    const { state } = useContext(Global);

    return (
        <Suspense fallback={<h3>Cargando...</h3>}>
            <div className="ApareanceOptions_Input">
                <div className={`ExecutionInput_${props.type ? 'COLUMN' : 'ROW' }`}>
                    <div className={`text_${props.type ? 'COLUMN' : 'ROW' }`}>
                        <h4>{props.text}</h4>
                        <h6 className="DefinitionSelector">{props.definition}</h6>
                    </div>
                    <div className={`Inputs_${props.type ? 'COLUMN' : 'ROW' }`}>
                        <input className="Color_Input" type="color" value={state.color} onChange={(event) => {
                            functionProp(event.target.value);
                        }}/>
                    </div>
                </div>
            </div>
        </ Suspense>
    )
}