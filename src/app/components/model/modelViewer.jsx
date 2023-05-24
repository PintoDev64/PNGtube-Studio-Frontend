import { useContext, useEffect, useRef, useState } from "react"

// Hooks
import useMicrophone from "../../hooks/AudioData.hook";

// Contexts
import { AudioController } from "../../context/contexts"
import { Avatars } from "../../context/contexts";

// Functions
import { fixRoute } from "../../tools/Tolls";

export default function ModelViewer() {

	const Viewer = useRef(),
		Model = useRef(),
		isClick = useRef(false),
		coords = useRef({
			X: 0,
			Y: 0,
			lastX: 0,
			lastY: 0
		})

	useEffect(() => {
		if (!Viewer.current || !Model.current) return;

		const Vista = Viewer.current,
			Modelo = Model.current;

		const onMouseDown = event => {
			isClick.current = true;
			coords.current.X = event.clientX;
			coords.current.Y = event.clientY;
			Modelo.style.cursor = 'move'
		}
		const onMouseUp = () => {
			isClick.current = false;
			coords.current.lastX = Modelo.offsetLeft;
			coords.current.lastY = Modelo.offsetTop;
			Modelo.style.cursor = 'default'
		}
		const validation = () => {
			if (Vista.offsetWidth < (Modelo.offsetLeft + Modelo.offsetWidth)) {
				Modelo.style.left = `${Vista.offsetWidth - Modelo.offsetWidth}px`;
			}
			if (Vista.offsetHeight < (Modelo.offsetTop + Modelo.offsetHeight)) {
				Modelo.style.top = `${Vista.offsetHeight - Modelo.offsetHeight}px`;
			}
			if (Modelo.offsetLeft < 0) {
				Modelo.style.left = `${0}px`;
			}
			if (Modelo.offsetTop < 0) {
				Modelo.style.top = `${0}px`;
			}
		}
		const onMouseMove = event => {
			if (!isClick.current) return;

			let nextX = event.clientX - coords.current.X + coords.current.lastX,
				nextY = event.clientY - coords.current.Y + coords.current.lastY;

			Modelo.style.left = `${nextX}px`;
			Modelo.style.top = `${nextY}px`;

			validation();
		}

		Modelo.addEventListener('mousedown', onMouseDown);
		Modelo.addEventListener('mouseup', onMouseUp);
		Vista.addEventListener('mousemove', onMouseMove);
		Vista.addEventListener('mouseleave', onMouseUp);
		window.addEventListener('resize', validation);

		return () => {
			Modelo.removeEventListener('mousedown', onMouseDown);
			Modelo.removeEventListener('mouseup', onMouseUp);
			Vista.removeEventListener('mousemove', onMouseMove);
			Vista.removeEventListener('mouseleave', onMouseUp);
			window.removeEventListener('resize', validation);
		}
	}, [])

	const { stateModels } = useContext(Avatars);

	const [Speak, setSpeak] = useState(false);

	const { volume } = useMicrophone();
	const { AudioState } = useContext(AudioController);
	const { select, router, data, spriteType } = stateModels;
	const { sensibility, capturerState } = AudioState;

	useEffect(() => {
		if (volume >= sensibility && capturerState) {
			setSpeak(true)
			return;
		}
		setSpeak(false)
	}, [volume, sensibility, capturerState])

	return (
		<div ref={Viewer} id="ModelViewer">
			<img ref={Model} id="ActualModel" src={
				!Speak ? fixRoute(`${router}\\${select}\\${data.States[spriteType].first}.png`) : fixRoute(`${router}\\${select}\\${data.States[spriteType].last}.png`)
			} alt="ModelSpritesManager" width={stateModels.zoom} height={stateModels.zoom} style={{
				animation: Speak ? '0.8s ease 0s infinite normal none running shake' : 'none'
			}} />
		</div>
	)
}