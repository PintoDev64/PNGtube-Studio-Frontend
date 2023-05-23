// Node Modules
import { useContext, useState } from 'react';

// Components
import ModelSelector from './pages/ModelSelector';

// Contexts
import { Global } from './context/contexts';
import AudioControls from './pages/audio/AudioControls';
import { fixRoute } from './tools/Tolls';
import ModelViewer from './components/model/modelViewer';
import ModelState from './pages/ModelState';

export default function Main() {

    const { GlobalState, section } = useContext(Global);

    function SetSection({ id }) {
        if (id === 1) return <ModelSelector />;
        if (id === 2) return <ModelState />
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
                <AudioControls />
                {
                    section !== 0 && (
                        <aside id='AsideModelOptions'>
                            <SetSection id={section} />
                        </aside>
                    )
                }
                <ModelViewer />
            </div>
        </>
    )
}