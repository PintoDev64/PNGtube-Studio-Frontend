import { useState } from "react";

// Data
import RoutesContent from "./RouterData";

export default function RouterComponent({ functionProp }) {

    const [Navigation, setNavigation] = useState(0)

    return (
        <nav id="RouterLinks">
            <ul>
                {
                    RoutesContent.map(({ id, name }) => {
                        return (
                            <li>
                                <button className={`ButtonSection ${Navigation === id ? 'selected' : ''}`} key={id} onClick={() => {
                                    setNavigation(id);
                                    functionProp(id);
                                }}>
                                    <h3>{name}</h3>
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}