import { Suspense, useRef } from "react";

export default function SubmitFiles({ functionProp, style, props }) {

    const reference = useRef();

    function HandleUploadFile() {
        reference.current.click();
    }

    return (
        <Suspense fallback={<h3>Cargando...</h3>}>
            <div className="ApareanceOptions_Input">
                <div className={`ExecutionInput_${props.type ? 'COLUMN' : 'ROW' }`}>
                    <div className={`text_${props.type ? 'COLUMN' : 'ROW' }`}>
                        <h4>{props.text}</h4>
                        <h6 className="DefinitionSelector">{props.definition}</h6>
                    </div>
                    <div className={`Upload_${props.type ? 'COLUMN' : 'ROW' }`}>
                        <button className="UploadFile" onClick={HandleUploadFile}> Subir Fondo </button>
                        <input ref={reference} id="Upload_Input" hidden type="file" accept="image/png" onChange={(event) => {
                            if (event.target.files.length > 0) {
                                functionProp(event.target.files);
                            }
                        }}/>
                    </div>
                </div>
            </div>
        </ Suspense>
    )
}