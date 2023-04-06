import { useState } from "react";

// Imports
import SettingsSections from "./data";

// Components
import Apareance from "./components/config/Apareance";

// Css
import './Settings.css'

export default function Settings() {

    const [Section, setSection] = useState(1)

    return (
        <article id="SettingsSection">
            <aside id="SettingsNav">
                <ul>
                    {
                        SettingsSections.map(section => {
                            <li key={section.id} id={section.name} onClick={() => {
                                setSection(section.id);
                                console.log(Section);
                            }}>{section.value}</li>
                        })
                    }
                </ul>
            </aside>
            <section id="SettingsOptions">
                <Apareance />
            </section>
        </article>
    )
}