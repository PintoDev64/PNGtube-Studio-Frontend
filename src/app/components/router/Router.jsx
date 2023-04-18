import RoutesContent from "./RouterData";

export default function RouterComponent({ functionProp }) {
    return (
        <nav id="RouterLinks">
            <ul>
                {
                    RoutesContent.map(buttonRoutes => {
                        return (
                            <li>
                                <button className="ButtonSection" key={buttonRoutes.id} onClick={() => {
                                    functionProp(buttonRoutes.id);
                                }}>
                                    <h3>{buttonRoutes.name}</h3>
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}