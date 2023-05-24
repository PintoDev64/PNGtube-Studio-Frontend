import { useState, useContext, Suspense, useEffect } from "react";

// Imports
import SettingsSections from "./sectionsPropagator";

// Contexts
import { Global } from "../../context/contexts";

// Css
import './Settings.css'

// Components
import SaveSettings from "./components/screen/SaveSettings";
import Options from "./components/Options";

export default function Settings() {

    const { settings, GlobalState } = useContext(Global);

    const [Section, setSection] = useState(1);

    if (settings) {
        return (
            <Suspense fallback={<h3>Cargando...</h3>}>
                <div id="Settings">
                    <article id="SettingsSection">
                        <aside id="SettingsNav">
                            <h3>Configuracion</h3>
                            <img src={GlobalState.resources['Default.png']} alt="Aplication Logo" width={150} />
                            <hr className="hr-titles" />
                            <h3>Aplicacion</h3>
                            <ul>
                                {
                                    SettingsSections.map(({ id, name, value }) => {
                                        return (
                                            <li key={id} id={name} className="SettingsListOptions">
                                                <button className={`SettingsListButtons ${Section === id ? 'selected' : ''}`} onClick={() => {
                                                    setSection(id)
                                                }}>
                                                    <h4>
                                                        {value}
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