import { useContext } from "react";

// Contexts
import { Global } from "../../context/contexts"

export default function Lists({ functionProp, props }) {

    const { GlobalState } = useContext(Global);

    return (
        <div className="ApareanceOptions_Lists">
            <header className="ListTitle">
                <h3>{props.title}</h3>
            </header>
            <hr class="hr-titles" />
            <main className="ListSection">
                <ul className="ListSection_Container">
                    {
                        props.elements.map(({ id, name, definition, preview }) => {
                            return (
                                <li key={id} className="listSection_Elements">
                                    <div className="ListElements">
                                        <div className="ListElementPreview">
                                            <img width={100} height={60} src={preview} alt={name} />
                                        </div>
                                        <div className="ListElementData">
                                            <h4>{name}</h4>
                                            <h6 className="TextDefinitionList">{definition}</h6>
                                        </div>
                                        <div className="ListElementActions">
                                            <button className="ListElementAction" onClick={() => functionProp(name)}>
                                                <img width={30} height={30} src={GlobalState.resources['X-icon.png']} alt="Element Action" />
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </main>
        </div>
    )
}