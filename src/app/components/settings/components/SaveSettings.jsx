export default function SaveSettings({ saveSettings }) {
    return (
        <div id="SaveConfig">
            <div className="text">
                <h4>Tienes cambios sin guardar</h4>
                <h6>los cambios se aplica al reiniciar</h6>
            </div>
            <button id="SaveSettingsButton" onClick={() => saveSettings()}>Guardar</button>
        </div>
    )
}