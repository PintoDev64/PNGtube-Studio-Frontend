import { useContext, Suspense } from "react";
// Contexts
import { Global } from "../../../../context/contexts";

// Hooks
import useSettingsContentFunction from "../../../../hooks/componentsPropagator";

export default function Apareance() {

    const { color, wallpaper, type } = useContext(Global);

    const { SettingsContent } = useSettingsContentFunction();

    return (
        <Suspense fallback={<h3>Cargando...</h3>}>
            <aside id="ApareancePreview">
                <h3>Vista Previa</h3>
                {
                    type === 'Color'
                        ? <div style={{ background: color, width: 500, height: 312 }}></div>
                        : <img src={wallpaper} alt="Background Apareance Preview" width={500} height={280} />
                }
            </aside>
            <hr className="hr-titles" />
            <aside id="ApareanceOptions">
                {
                    SettingsContent.Apareance.map(({ Id, Component, functionsProp, Data }) => {
                        return (
                            <Component key={Id} functionProp={functionsProp} style={type === 'Color' ? 'flex-start' : 'flex-end'} props={Data} />
                        )
                    })
                }
                <div className="ApareanceOptions_Radio">
                </div>
            </aside>
        </Suspense>
    )
}