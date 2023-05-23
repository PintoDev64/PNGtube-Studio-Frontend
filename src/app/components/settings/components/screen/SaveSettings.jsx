import { useContext } from "react";

// Contexts
import { Global } from "../../../../context/contexts";

// Hooks
import useSubmitConfig from "../../../../hooks/submitConfig.hook";

export default function SaveSettings() {

    const { SubmitConfig } = useSubmitConfig();

    const { functions, GlobalState, defaultProps } = useContext(Global);

    let settingsState = functions.compararObjetos(GlobalState, defaultProps);

    if (!settingsState) {
        return (
            <article id="SettingsRestart">
                <div className="text">
                    <h4>Tienes cambios sin guardar</h4>
                    <h6>Algunos cambios se reflejaran al reiniciar, si no guardas no se reflejaran en la proxima sesion</h6>
                </div>
                <button id="SaveSettingsButton" onClick={SubmitConfig}>Guardar</button>
            </article>
        )
    }
}