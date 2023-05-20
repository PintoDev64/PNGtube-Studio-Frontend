// Node Modules
import { useContext, useState } from 'react';

// Components
import ModelSelector from './pages/ModelSelector';

// Contexts
import { Global } from './context/contexts';
import RouterComponent from './components/router/router';
import AudioControls from './service/Audio/AudioControls';
import { fixRoute } from './controllers/fixRoute';
import ModelViewer from './components/model/modelViewer';

export default function Main() {

    const { GlobalState } = useContext(Global);

    const [SectionState, setSectionState] = useState(0);

    function SetSection({ id }) {
        if (id === 1) return (<ModelSelector />);
    };

    function imgURL() {
        let responceURLWallpaper = fixRoute(`${GlobalState.wallpaper}\\${GlobalState.name}.png`);
        let responceStyle;
        if (GlobalState.type === 'Color') {
            responceStyle = {
                background: GlobalState.color
            }
        } else {
            responceStyle = {
                backgroundImage: `url("${responceURLWallpaper}")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover'
            }
        };
        if (parseInt(GlobalState.brightness) !== 100) {
            responceStyle['filter'] = `brightness(${GlobalState.brightness}%)`
        };
        return responceStyle;
    };

    return (
        <>
            <div id="MainSection" style={imgURL()} >
            </div>
            <div id="ModelOptionsSection">
                <RouterComponent functionProp={setSectionState} />
                <AudioControls />
                {
                    SectionState !== 0 && (
                        <aside id='AsideModelOptions'>
                            <SetSection id={SectionState} />
                        </aside>
                    )
                }
                <ModelViewer />
            </div>
        </>
    )
}