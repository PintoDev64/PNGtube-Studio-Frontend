import { useEffect, useRef, useState, useContext, Suspense } from "react";

// Contexts
import { AudioController } from "../../context/contexts";

// Hooks
import useAudioContext from "../../hooks/AudioControlsPropagator";
import useMicrophone from "../../hooks/AudioData";

export default function AudioControls() {

    const { AudioControllerPropagator } = useAudioContext();

    const { volume, AvarageLevels } = useMicrophone();

    const { state } = useContext(AudioController);

    const { volumeState, sensibility, capturerState } = state;

    const [Open, setOpen] = useState(false);
    const canvasLevelRef = useRef(null);
    const divEventRef = useRef(null);

    useEffect(() => {
        const eventAudio = new CustomEvent('AudioController', { detail: { volume, sensibility } });
        divEventRef.current.style.height = `${state.sensibility * 2}px`;
        if (state.capturerState) {
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
            <div id="AudioControls">
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
                                    <li className="AudioLevel">80%</li>
                                    <li className="AudioLevel">60%</li>
                                    <li className="AudioLevel">40%</li>
                                    <li className="AudioLevel">20%</li>
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