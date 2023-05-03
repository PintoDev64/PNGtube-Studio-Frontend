import { useContext, Suspense } from "react";

// Contexts
import { Global } from "../../context/contexts";

export default function Selectors({ functionProp, style, props }) {

    const { state } = useContext(Global);

    return (
        <Suspense fallback={<h3>Cargando...</h3>}>
            <div className="ApareanceOptions_Selector">
                <div className={`ExecutionSelector_${props.type ? 'COLUMN' : 'ROW' }`}>
                    <div className={`text_${props.type ? 'COLUMN' : 'ROW' }`}>
                        <h4>{props.text}</h4>
                        <h6 className="DefinitionSelector">{props.definition}</h6>
                    </div>
                    <div className={`Selectors_${props.type ? 'COLUMN' : 'ROW' }`}>
                        <select className="Selector_input" onChange={event => functionProp(event.target.value)}>
                            {
                                props.options.map(wallpaper => {
                                    return state.name === wallpaper
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