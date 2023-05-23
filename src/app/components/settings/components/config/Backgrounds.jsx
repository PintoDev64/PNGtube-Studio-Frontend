import { Suspense } from "react";

// Hooks
import useSettingsContentFunction from "../../../../hooks/componentsPropagator.hook"

export default function Backgrounds() {

    const { SettingsContent } = useSettingsContentFunction();

    return (
        <Suspense fallback={<h3>Cargando...</h3>}>
            <aside id="ApareanceOptions">
                {
                    SettingsContent.Backgrounds.map(({ Id, Component, functionsProp, condition, Data }) => {
                        return (
                            <Component key={Id} functionProp={functionsProp} style={condition} props={Data} />
                        )
                    })
                }
            </aside>
        </Suspense>
    )
}