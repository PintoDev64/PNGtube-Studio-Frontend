import { useContext, Suspense } from "react";
// Contexts
import { Global } from "../../../../context/contexts";

// Hooks
import useSettingsContentFunction from "../../../../hooks/componentsPropagator";

export default function Advanced() {

    const { hardware } = useContext(Global);

    const { SettingsContent } = useSettingsContentFunction();

    return (
        <Suspense fallback={<h3>Cargando...</h3>}>
            <aside id="ApareanceOptions">
                {
                    SettingsContent.Advanced.map(({ Id, Component, functionsProp, Data }) => {
                        return (
                            <Component key={Id} functionProp={functionsProp} style={ !hardware ? 'flex-start' : 'flex-end'} props={Data} />
                        )
                    })
                }
                <div className="ApareanceOptions_Radio">
                </div>
            </aside>
        </Suspense>
    )
}