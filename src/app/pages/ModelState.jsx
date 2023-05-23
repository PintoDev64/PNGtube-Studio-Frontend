import { Suspense } from "react";

export default function ModelState() {
    return (
        <Suspense fallback={<h3>Cargando...</h3>}>
            <div id="modelDetails">
                <h3>Estado del Modelo</h3>
                <hr className="hr-titles" />
            </div>
        </Suspense>
    )
}