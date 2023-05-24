import { Suspense } from "react"

export default function Button({ functionProp, props }) {
    return (
        <Suspense>
            <button className="ApareanceOptions_Button" onClick={functionProp}>
                {
                    !props.imgNone ?
                    <img src={props.condition} alt="Close-Window-Buttom" width="30" height="30" />
                    :
                    <h2>{ props.imgNone }</h2>
                }
            </button>
        </Suspense>
    )
}