// Node Modules
import { useContext, useState } from 'react';

// Components
import ModelSelector from './pages/modelSelector';

// Contexts
import { Global } from './context/contexts';
import ModelSettings from './context/content/provider';
import RouterComponent from './components/router/router';
import AudioControls from './service/Audio/AudioControls';
import { fixRoute } from './controllers/fixRoute';
import ModelViewer from './components/model/modelViewer';

export default function Main() {

    const { state } = useContext(Global);

    const [SectionState, setSectionState] = useState(0);

    function SetSection({ id }) {
        if (id === 1) return (<ModelSelector />);
        if (id === 2) return (<h1>Hola</h1>);
    };

    function imgURL() {
        let responceURLWallpaper = fixRoute(`${state.wallpaper}\\${state.name}.png`);
        let responceStyle;
        if (state.type === 'Color') {
            responceStyle = {
                background: state.color
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
        if (parseInt(state.brightness) !== 100) {
            responceStyle['filter'] = `brightness(${state.brightness}%)`
        };
        return responceStyle;
    };

    return (
        <>
            <div id="MainSection" style={imgURL()} >
            </div>
            <div id="ModelOptionsSection">
                <ModelSettings >
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
                </ModelSettings>
            </div>
        </>
    )
}