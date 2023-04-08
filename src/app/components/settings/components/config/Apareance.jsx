// Contexts
import { useContext } from "react";
import { Global } from "../../../../context/contexts";

// Components
import SettingsContent from "../../componentsPropagator";

export default function Apareance() {

    const { color, wallpaper, type, functions } = useContext(Global);

    // Functions
    const TypeApreance = () => {
        type === 'Color'
        ? functions.type('Image')
        : functions.type('Color')
    }

    return (
        <>
            <aside id="ApareancePreview">
                {
                    type === 'Color'
                        ? <div style={{ background: color, width: 500, height: 312 }}></div>
                        : <img src={wallpaper} alt="Background Apareance Preview" width={500} height={312} />
                }
            </aside>
            <hr className="hr-titles" />
            <aside id="ApareanceOptions">
                {
                    SettingsContent.Apareance.map(({ Id, Component, Data }) => {
                        return (
                            <Component key={Id} functionProp={TypeApreance} style={type === 'Color' ? 'flex-start' : 'flex-end' } props={Data}/>
                        )
                    })
                }
                <div className="ApareanceOptions_Selector">
                    <div className="ExecutionOptions"></div>
                    <h4 className="DefinitionOptions">Def</h4>
                </div>
                <div className="ApareanceOptions_Radio">
                </div>
            </aside>
        </>
    )
}