import { useCallback, useContext, useEffect, useRef, useState } from "react"

// Hooks
import useMicrophone from "../../hooks/AudioData";

// Contexts
import { AudioController } from "../../context/contexts"
import { Avatars } from "../../context/contexts";

// Functions
import getModelMap from "./getModels";
import { fixRoute } from "../../controllers/fixRoute";

export default function ModelViewer() {

	const Viewer = useRef();
	const Model = useRef();
	const isClick = useRef(false);
	const coords = useRef({
		X: 0,
		Y: 0,
		lastX: 0,
		lastY: 0
	})
	const executionMoveImg = useCallback(() => {
		if (!Viewer.current || !Model.current) return;

		const Vista = document.getElementById('ActualModel'), Modelo = document.getElementById('ActualModel');
		//const Vista = Viewer.current, Modelo = Model.current;

		const onMouseDown = event => {
			isClick.current = true;
			coords.current.X = event.clientX;
			coords.current.Y = event.clientY;
		}
		const onMouseUp = () => {
			isClick.current = false;
			coords.current.lastX = Modelo.offsetLeft;
			coords.current.lastY = Modelo.offsetTop;
		}
		const onMouseMove = event => {
			if (!isClick.current) return;
			Modelo.style.top = `${event.clientY - coords.current.Y + coords.current.lastY}px`
			Modelo.style.left = `${event.clientX - coords.current.X + coords.current.lastX}px`
		}

		Modelo.addEventListener('mousedown', onMouseDown);
		Modelo.addEventListener('mouseup', onMouseUp);
		Vista.addEventListener('mousemove', onMouseMove);
		Vista.addEventListener('mouseleave', onMouseUp);
		
		return () => {
			Modelo.removeEventListener('mousedown', onMouseDown);
			Modelo.removeEventListener('mouseup', onMouseUp);
			Vista.removeEventListener('mousemove', onMouseMove);
			Vista.removeEventListener('mouseleave', onMouseUp);
		}
	})

	useEffect(() => {
		executionMoveImg()
	}, [])

	const { stateModels } = useContext(Avatars);

	const [Speak, setSpeak] = useState(false);

	const { volume } = useMicrophone();
	const { AudioState } = useContext(AudioController);
	const { select, router } = stateModels;
	const { sensibility, capturerState } = AudioState;

	useEffect(() => {
		if (volume >= sensibility && capturerState) {
			setSpeak(true)
			return;
		}
		setSpeak(false)
	}, [volume])

	return (
		<div ref={Viewer} id="ModelViewer">
			<img ref={Model} id="ActualModel" src={fixRoute(`${router}\\${select}\\${select}.png`)} alt="ModelSpritesManager" width={500} height={500} style={{
				animation: Speak ? '0.8s ease 0s infinite normal none running shake' : 'none'
			}} />
		</div>
	)
}