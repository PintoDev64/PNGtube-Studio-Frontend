import { useContext, useEffect, useMemo, useState } from "react"

// Hooks
import useMicrophone from "../../hooks/AudioData";

// Contexts
import { AudioController } from "../../context/contexts"
import { Avatars } from "../../context/contexts";

// Functions
import getModelMap from "./getModels";

export default function ModelViewer() {

	const { stateModels, functions } = useContext(Avatars);

	const [Speak, setSpeak] = useState(false);
	const [ModelSelected, setModelSelected] = useState({})

	const { volume } = useMicrophone();
	const { state } = useContext(AudioController);
	const { select, models } = stateModels;
	const { sensibility, capturerState } = state;

	useEffect(() => {
		if (volume >= sensibility && capturerState ) {
			setSpeak(true)
			return;
		}
		setSpeak(false)
	}, [volume])

	useMemo(() => {
		let res = getModelMap(models, select);
		setModelSelected(res);
	}, [select])
	
	return (
		<div id="ModelViewer">
			{/* <div style={{
				width: 200,
				height: Speak ? 400 : 200,
				background: '#000000'
			}}/> */}
			<div id="ModelElements">
				<div id="ModelSprites">
					<img src={ModelSelected.modelImage} alt="ModelSpritesManager" width={500} height={500} style={{
						position: 'relative',
						bottom: Speak ? 400 : 200
					}} />
				</div>
			</div>
		</div>
	)
}