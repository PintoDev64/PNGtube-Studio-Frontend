import { useContext, Suspense } from "react";

// Contexts
import { Global } from "../../../../context/contexts";

// Hooks
import useSettingsContentFunction from "../../../../hooks/componentsPropagator.hook";
import { fixRoute } from "../../../../tools/Tolls";

export default function Apareance() {

    const { GlobalState } = useContext(Global);

    const { SettingsContent } = useSettingsContentFunction();

    return (
        <Suspense fallback={<h3>Cargando...</h3>}>
            <aside id="ApareancePreview">
                <h3>Vista Previa</h3>
                {
                    GlobalState.type === 'Color'
                        ? <div style={{ background: GlobalState.color, width: 500, height: 312, filter: `brightness(${GlobalState.brightness}%`, outline: '2px solid #000000' }}></div>
                        : <div style={{
                            width: 500,
                            height: 312,
                            outline: '2px solid #000000',
                            backgroundImage: `url("${fixRoute(`${GlobalState.wallpaper}\\${GlobalState.name}.png`)}")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                            backgroundSize: 'cover',
                            filter: `brightness(${GlobalState.brightness}%)`
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