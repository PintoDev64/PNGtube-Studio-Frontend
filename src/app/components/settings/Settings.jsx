import { useState, useContext, Suspense } from "react";

// Imports
import SettingsSections from "./sectionsPropagator";

// Components
import Apareance from "./components/config/Apareance";
import Advanced from "./components/config/Advanced";

// Contexts
import { Global } from "../../context/contexts";

// Hooks
import useSubmitConfig from "../../hooks/submitConfig";

// Css
import './Settings.css'

export default function Settings() {

    const { SubmitConfig } = useSubmitConfig();

    const { settings, resources, functions, state, defaultProps } = useContext(Global);

    const [Section, setSection] = useState(1);

    /// Pseudo-Component
    function Options({ StateSection }) {
        if (StateSection === 1) return (
            <Apareance />
        )
        if (StateSection === 2) return (
            <Advanced />
        )
    };

    /// Pseudo-Compoent
    function SaveSettings() {
        let settingsState = functions.compararObjetos(state, defaultProps);
        if (settingsState === false) {
            return (
                <article id="SettingsRestart">
                    <div className="text">
                        <h4>Tienes cambios sin guardar</h4>
                        <h6>los cambios se aplica al reiniciar</h6>
                    </div>
                    <button id="SaveSettingsButton" onClick={SubmitConfig}>Guardar</button>
                </article>
            )
        }
    }

    if (settings) {
        return (
            <Suspense fallback={<h3>Cargando...</h3>}>
                <div id="Settings">
                    <article id="SettingsSection">
                        <aside id="SettingsNav">
                            <h3>Configuracion</h3>
                            <img src={resources['Default.png']} alt="Aplication Logo" width={150} />
                            <hr className="hr-titles" />
                            <h3>Aplicacion</h3>
                            <ul>
                                {
                                    SettingsSections.map(section => {
                                        return (
                                            <li key={section.id} id={section.name} className="SettingsListOptions">
                                                <button className={`SettingsListButtons ${Section === section.id ? 'selected' : ''}`} onClick={() => {
                                                    setSection(section.id)
                                                }}>
                                                    <h4>
                                                        {section.value}
                                                    </h4>
                                                </button>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </aside>
                        <section id="SettingsOptions">
                            <Options StateSection={Section} />
                        </section>
                    </article>
                </div>
                <SaveSettings />
            </Suspense>
        )
    }
}