import { useContext, Suspense } from "react";

// Contexts
import { Global } from "../../context/contexts";

export default function Selectors({ functionProp, style, props }) {

    const { name } = useContext(Global);

    return (
        <Suspense fallback={<h3>Cargando...</h3>}>
            <div className="ApareanceOptions_Selector">
                <div className="ExecutionSelector">
                    <div className="text">
                        <h4>{props.text}</h4>
                        <h6 className="DefinitionSelector">{props.definition}</h6>
                    </div>
                    <div className="Selectors">
                        <select className="Selector_input">
                            {
                                props.options.map(wallpaper => {
                                    return name === wallpaper
                                        ? <option selected value={wallpaper}>{wallpaper}</option>
                                        : <option value={wallpaper}>{wallpaper}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>
        </ Suspense>
    )
}