export default function Types({ functionProp, style, props }) {

    return (
        <div className="ApareanceOptions_Type">
            <div className="ExecutionOptions">
                <div className="text">
                    <h4>{props.text}</h4>
                    <h6 className="DefinitionOptions">{props.definition}</h6>
                </div>
                <div className="Switchs">
                    <h4>{props.selects.f}</h4>
                    <button style={{
                        justifyContent: style
                    }} onClick={() => functionProp()}>
                        <div />
                    </button>
                    <h4>{props.selects.l}</h4>
                </div>
            </div>
        </div>
    )
}