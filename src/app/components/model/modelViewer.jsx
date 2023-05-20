import { useContext, useEffect, useMemo, useState } from "react"

// Hooks
import useMicrophone from "../../hooks/AudioData";

// Contexts
import { AudioController } from "../../context/contexts"
import { Avatars } from "../../context/contexts";

// Functions
import getModelMap from "./getModels";
import { fixRoute } from "../../controllers/fixRoute";

export default function ModelViewer() {

	const { stateModels } = useContext(Avatars);

	const [Speak, setSpeak] = useState(false);

	const { volume } = useMicrophone();
	const { AudioState } = useContext(AudioController);
	const { select, router } = stateModels;
	const { sensibility, capturerState } = AudioState;

	useEffect(() => {
		if (volume >= sensibility && capturerState ) {
			setSpeak(true)
			return;
		}
		setSpeak(false)
	}, [volume])
	
	return (
		<div id="ModelViewer">
			<div id="ModelElements">
				<div id="ModelSprites">
					<img src={fixRoute(`${router}\\${select}\\${select}.png`)} alt="ModelSpritesManager" width={500} height={500} style={{
						position: 'relative',
						bottom: Speak ? 250 : 200,
						animation: Speak ? "0.8s ease 0s infinite normal none running shake" : "none"
					}} />
				</div>
			</div>
		</div>
	)
}