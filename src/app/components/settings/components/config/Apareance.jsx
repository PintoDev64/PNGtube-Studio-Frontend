import { useContext, Suspense } from "react";

// Contexts
import { Global } from "../../../../context/contexts";

// Hooks
import useSettingsContentFunction from "../../../../hooks/componentsPropagator";

export default function Apareance() {

    const { color, wallpaper, type, name, brightness } = useContext(Global);

    const { SettingsContent } = useSettingsContentFunction();

    return (
        <Suspense fallback={<h3>Cargando...</h3>}>
            <aside id="ApareancePreview">
                <h3>Vista Previa</h3>
                {
                    type === 'Color'
                        ? <div style={{ background: color, width: 500, height: 312, filter: `brightness(${brightness}%` }}></div>
                        : <img src={`${wallpaper}\\${name}.png`} alt="Background Apareance Preview" style={{
                            filter: `brightness(${brightness}%`
                        }} width={500} height={280} />
                }
            </aside>
            <hr className="hr-titles" />
            <aside id="ApareanceOptions">
                {
                    SettingsContent.Apareance.map(({ Id, Component, condition, functionsProp, Data }) => {
                        return (
                            <Component key={Id} functionProp={functionsProp} style={condition} props={Data} />
                        )
                    })
                }
                <div className="ApareanceOptions_Radio">
                </div>
            </aside>
        </Suspense>
    )
}