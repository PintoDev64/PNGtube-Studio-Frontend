import { useContext, Suspense } from "react";

// Contexts
import { Global } from "../../../../context/contexts";

// Hooks
import useSettingsContentFunction from "../../../../hooks/componentsPropagator";
import { fixRoute } from "../../../../controllers/fixRoute";

export default function Apareance() {

    const { state } = useContext(Global);

    const { SettingsContent } = useSettingsContentFunction();

    return (
        <Suspense fallback={<h3>Cargando...</h3>}>
            <aside id="ApareancePreview">
                <h3>Vista Previa</h3>
                {
                    state.type === 'Color'
                        ? <div style={{ background: state.color, width: 500, height: 312, filter: `brightness(${state.brightness}%`, outline: '2px solid #000000' }}></div>
                        : <div style={{
                            width: 500,
                            height: 312,
                            outline: '2px solid #000000',
                            backgroundImage: `url("${fixRoute(`${state.wallpaper}\\${state.name}.png`)}")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                            backgroundSize: 'cover',
                            filter: `brightness(${state.brightness}%)`
                        }}>
                        </div>
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