import { Suspense, useRef } from "react";
// Contexts
import { Global } from "../../context/contexts";

export default function SubmitFiles({ functionProp, style, props }) {

    const reference = useRef();

    function HandleUploadFile() {
        reference.current.click();
    }

    return (
        <Suspense fallback={<h3>Cargando...</h3>}>
            <div className="ApareanceOptions_Input">
                <div className="ExecutionInput">
                    <div className="text">
                        <h4>{props.text}</h4>
                        <h6 className="DefinitionSelector">{props.definition}</h6>
                    </div>
                    <div className="Upload">
                        <button className="UploadFile" onClick={HandleUploadFile}> Subir Fondo </button>
                        <input ref={reference} id="Upload_Input" hidden type="file" accept="image/png" />
                    </div>
                </div>
            </div>
        </ Suspense>
    )
}