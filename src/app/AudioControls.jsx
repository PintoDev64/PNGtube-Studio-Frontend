import { useEffect, useRef, useState } from "react";

export default function AudioControls() {
    const [Open, setOpen] = useState(false);
    const [audioVolume, setAudioVolume] = useState(0);
    const canvasRef = useRef(null);

    let intervalTime;

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                const audioContext = new AudioContext();
                const source = audioContext.createMediaStreamSource(stream);
                const analyser = audioContext.createAnalyser();
                source.connect(analyser);
                analyser.fftSize = 32;
                const bufferLength = analyser.frequencyBinCount;
                const dataArray = new Uint8Array(bufferLength);

                const updateVolume = () => {
                    analyser.getByteFrequencyData(dataArray);
                    const average = dataArray.reduce((acc, val) => acc + val, 0) / bufferLength;
                    setAudioVolume(parseInt(average));

                    const canvas = canvasRef.current;
                    const ctx = canvas.getContext('2d');
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    if (parseInt(average) > 0) ctx.fillStyle = 'green';
                    if (parseInt(average) > 60) ctx.fillStyle = 'yellow';
                    if (parseInt(average) > 80) ctx.fillStyle = 'red';
                    ctx.fillRect(0, canvas.height - (canvas.height * parseInt(average) / 100), canvas.width, canvas.height * parseInt(average) / 100);
                }

                intervalTime = setInterval(updateVolume, 16);
            })
            .catch(error => {
                console.error('Error al obtener acceso al micrófono:', error);
            });
        return () => {
            // Detenemos el análisis y liberamos los recursos utilizados por la API de Web Audio
            if (canvasRef.current) {
                canvasRef.current.close();
                canvasRef.current = null;
            }
            clearInterval(intervalTime);
        };
    }, []);

    return (
        <div id="AudioControls">
            <div id="AudioInfo">
                <h3>Opciones de Audio</h3>
                <hr className="hr-titles" />
                <ul>
                    <li>
                        <div id="CanvasDataMeasurer">
                            <canvas id="AudioReferenceLevel" ref={canvasRef} width={20} height={200} />
                            <div id="AudioPropSeparator"></div>
                            <ul id="ListVolumeLevelReference">
                                <li className="AudioLevel">80%</li>
                                <li className="AudioLevel">60%</li>
                                <li className="AudioLevel">40%</li>
                                <li className="AudioLevel">20%</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div id="AudioOptions">

                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}