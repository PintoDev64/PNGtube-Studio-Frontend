import { useState, useEffect, useContext } from "react";

import { AudioController } from "../context/contexts";

export default function useMicrophone() {

    const { AudioState, functions, STATE_ACCESS } = useContext(AudioController);
    const [volume, setVolume] = useState(0);

    const AvarageLevels = Object.freeze({
        LOW: 0,
        HALF: 60,
        HIGH: 85
    })

    useEffect(() => {
        if (AudioState.capturerState) {

            let intervalTime;
            navigator.mediaDevices
                .getUserMedia({ audio: { autoGainControl: false } })
                .then((stream) => {
                    const audioContext = new AudioContext();
                    const source = audioContext.createMediaStreamSource(stream);
                    const analyser = audioContext.createAnalyser();
                    source.connect(analyser);
                    analyser.fftSize = 32;
                    const bufferLength = analyser.frequencyBinCount;
                    const dataArray = new Uint8Array(bufferLength);

                    const updateVolume = () => {
                        analyser.getByteFrequencyData(dataArray);
                        const average =
                            dataArray.reduce((acc, val) => acc + val, 0) / bufferLength;
                        if (parseInt(average) > AvarageLevels.LOW) {
                            functions.ChangeState({
                                action: STATE_ACCESS.volumeState,
                                value: "Bajo",
                            });
                        }
                        if (parseInt(average) > AvarageLevels.HALF) {
                            functions.ChangeState({
                                action: STATE_ACCESS.volumeState,
                                value: "Medio",
                            });
                        }
                        if (parseInt(average) > AvarageLevels.HIGH) {
                            functions.ChangeState({
                                action: STATE_ACCESS.volumeState,
                                value: "Alto",
                            });
                        }
                        setVolume(parseInt(average));
                    };

                    intervalTime = setInterval(updateVolume, 33);
                })
                .catch((error) => {
                    console.error("Error al obtener acceso al micrófono:", error);
                });
            return () => clearInterval(intervalTime);
        }
    }, [AudioState.capturerState, ]);

    return {
        volume,
        AvarageLevels
    };
};