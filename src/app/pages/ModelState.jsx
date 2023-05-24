import { Suspense } from "react";
import useModelStateFunction from "../hooks/ModelStatePropagator.hook";

export default function ModelState() {

    const { ModelStateContent } = useModelStateFunction();

    return (
        <Suspense fallback={<h3>Cargando...</h3>}>
            <div className="AudioInfo">
                <h3>Estado del Modelo</h3>
                <hr className="hr-titles" />
                <ul className="AudioSections_UL">
                    {
                        ModelStateContent.Main.map(({ Id, Component, functionsProp, Data }) => {
                            return (
                                <li className="AudioSections_LI" key={Id}>
                                    <Component functionProp={functionsProp} props={Data} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </Suspense>
    )
}