import { Suspense } from "react";

export default function Ranges({ functionProp, props }) {

    return (
        <Suspense fallback={<h3>Cargando...</h3>}>
            <div className="ApareanceOptions_Input">
                <div className={`ExecutionInput_${props.type ? 'COLUMN' : 'ROW' }`}>
                    <div className={`text_${props.type ? 'COLUMN' : 'ROW' }`}>
                        <h4>{props.text}</h4>
                        <h6 className="DefinitionSelector">{props.definition}</h6>
                    </div>
                    <div className={`Inputs_${props.type ? 'COLUMN' : 'ROW' }`}>
                        <h3>{props.valueKey}</h3>
                        <input class="Range_Input" type="range" min={props.min} max={props.max} value={props.valueKey} step={props.steps} onChange={(event) => {
                            functionProp(event.target.value);
                        }} />
                    </div>
                </div>
            </div>
        </ Suspense>
    )
}