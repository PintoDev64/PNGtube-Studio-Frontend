import { useState, useContext, Suspense } from "react";

// Imports
import SettingsSections from "./sectionsPropagator";

// Components
import Apareance from "./components/config/Apareance";
import Advanced from "./components/config/Advanced";

// Contexts
import { Global } from "../../context/contexts";

// Css
import './Settings.css'
import SaveSettings from "./components/SaveSettings";

export default function Settings() {

    const { settings, resources, functions, state, defaultProps } = useContext(Global);

    const [Section, setSection] = useState(1)

    /// Pseudo-Component
    function Options({ StateSection }) {
        if (StateSection === 1) return <Apareance />
        if (StateSection === 2) return <Advanced />
    }

    function SaveConfig({ current, previus, update }) {
        if (current.color !== previus.color || current.type !== previus.type || current.wallpaper !== previus.wallpaper) {
            console.log(current.color, previus.color);
            console.log(current.type, previus.type);
            console.log(current.wallpaper, previus.wallpaper);
            console.log('cambio');
            return (<SaveSettings saveSettings={update} />)
        }
    }

    if (settings) {
        return (
            <Suspense fallback={<h3>Cargando...</h3>}>
                <div id="Settings">
                    <article id="SettingsSection">
                        <aside id="SettingsNav">
                            <img src={resources['Default.png']} alt="Aplication Logo" width={250} />
                            <hr className="hr-titles" />
                            <h3>Aplicacion</h3>
                            <ul>
                                {
                                    SettingsSections.map(section => {
                                        return (
                                            <li key={section.id} id={section.name} className="SettingsListOptions">
                                                <button className="SettingsListButtons" onClick={() => {
                                                    setSection(section.id);
                                                    console.log(Section);
                                                }}>
                                                    {section.value}
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
                    <SaveConfig current={state} previus={defaultProps} update={functions.uploadConfig} />
                </div>
            </Suspense>
        )
    }
}