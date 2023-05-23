import { Suspense } from "react"

export default function Button({ functionProp, props }) {
    return (
        <Suspense>
            <button className="ApareanceOptions_Button" onClick={functionProp}>
                <img src={props.condition} alt="Close-Window-Buttom" width="30" height="30" />
            </button>
        </Suspense>
    )
}