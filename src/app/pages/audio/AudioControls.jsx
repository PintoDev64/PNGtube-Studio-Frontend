import { useEffect, useRef, useState, useContext, Suspense } from "react";

// Contexts
import { AudioController, Global } from "../../context/contexts";

// Hooks
import useAudioContext from "../../hooks/AudioControlsPropagator.hook";
import useMicrophone from "../../hooks/AudioData.hook";

export default function AudioControls() {

    const { GlobalState } = useContext(Global);

    const { AudioControllerPropagator } = useAudioContext();

    const { volume, AvarageLevels } = useMicrophone();

    const { AudioState } = useContext(AudioController);

    const { volumeState, sensibility, capturerState } = AudioState;

    const [Open, setOpen] = useState(false);
    const canvasLevelRef = useRef(null);
    const divEventRef = useRef(null);

    useEffect(() => {
        const eventAudio = new CustomEvent('AudioController', { detail: { volume, sensibility } });
        divEventRef.current.style.height = `${AudioState.sensibility * 2}px`;
        if (AudioState.capturerState) {
            window.dispatchEvent(eventAudio);
            let canvasLevel = canvasLevelRef.current;
            let ctxLevel = canvasLevel.getContext("2d");
            if (volume > AvarageLevels.LOW) {
                ctxLevel.fillStyle = "green";
            }
            if (volume > AvarageLevels.HALF) {
                ctxLevel.fillStyle = "yellow";
            }
            if (volume > AvarageLevels.HIGH) {
                ctxLevel.fillStyle = "red";
            }
            ctxLevel.clearRect(0, 0, canvasLevel.width, canvasLevel.height);
            ctxLevel.fillRect(0, canvasLevel.height - (canvasLevel.height * volume) / 100, canvasLevel.width, (canvasLevel.height * volume) / 100
            );
        };
    }, [volume]);

    return (
        <Suspense fallback={<h3>Cargando...</h3>}>
            <div id="AudioControls" style={{
                left: Open ? 0 : '-425px'
            }}>
                <button onClick={() => setOpen(!Open)} id="Op-CL_AudioControls">
                    <img src={Open ? GlobalState.resources['AudioControlsRow_Left.png'] : GlobalState.resources['AudioControlsRow_Right.png']} alt="Open/Close AudioControls" />
                </button>
                <div id="AudioInfo">
                    <h3>Opciones de Audio</h3>
                    <hr className="hr-titles" />
                    <ul id="AudioSections_UL">
                        <li className="AudioSections_LI">
                            <div id="CanvasDataMeasurer">
                                <div id="AudioEventLevel" ref={divEventRef} />
                                <div className="AudioPropSeparator"></div>
                                <canvas id="AudioReferenceLevel" ref={canvasLevelRef} width={20} height={200} />
                                <div className="AudioPropSeparator"></div>
                                <ul id="ListVolumeLevelReference">
                                    <li className="AudioLevel">◄&nbsp;80</li>
                                    <li className="AudioLevel">◄&nbsp;60</li>
                                    <li className="AudioLevel">◄&nbsp;40</li>
                                    <li className="AudioLevel">◄&nbsp;20</li>
                                </ul>
                                <div id="AudioData">
                                    <div className="AudioData_Sectors">
                                        <h5>{volume}</h5>
                                        <hr className="hr-separators" />
                                        <h5> Volumen </h5>
                                    </div>
                                    <div className="AudioData_Sectors">
                                        <h5>{sensibility}</h5>
                                        <hr className="hr-separators" />
                                        <h5> Captura </h5>
                                    </div>
                                    <div className="AudioData_Sectors">
                                        <h5>{volumeState}</h5>
                                        <hr className="hr-separators" />
                                        <h5> Estado </h5>
                                    </div>
                                    <div className="AudioData_Sectors">
                                        <h5>{capturerState ? 'Activo' : 'Inactivo'}</h5>
                                        <hr className="hr-separators" />
                                        <h5> Estado </h5>
                                    </div>
                                    <div id="AudioData_Button">
                                        <h5>Detectar Microfono</h5>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="AudioSections_LI">
                            <div id="AudioOptions">
                                {
                                    AudioControllerPropagator.Options.map(({ Id, Component, condition, functionsProp, Data }) => {
                                        return (
                                            <Component key={Id} functionProp={functionsProp} style={condition} props={Data} />
                                        )
                                    })
                                }
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Suspense>
    );
}