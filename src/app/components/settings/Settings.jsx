import { useState, useContext } from "react";

// Imports
import SettingsSections from "./data";
import Default from './Default.png';

// Components
import Apareance from "./components/config/Apareance";
import Advanced from "./components/config/Advanced";

// Contexts
import { Global } from "../../context/contexts";

// Css
import './Settings.css'

export default function Settings() {

    const { settings, resources } = useContext(Global);

    const [Section, setSection] = useState(1)

    /// Pseudo-Component
    function Options() {
        if (Section === 1) return <Apareance />
        if (Section === 2) return <Advanced />
    }

    if (settings) {
        return (
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
                        {
                            Options()
                        }
                    </section>
                </article>
            </div>
        )
    }
}