// Node Modules
import { useContext, useState } from 'react';

// Components
import ModelSelector from './pages/modelSelector';

// Contexts
import { Global } from './context/contexts';
import ModelSettings from './context/content/provider';
import RouterComponent from './components/router/router';
import AudioControls from './AudioControls';
import { fixRoute } from './controllers/fixRoute';

export default function Main() {

    const { type, wallpaper, name, color, brightness } = useContext(Global);

    const [SectionState, setSectionState] = useState(0)

    function SetSection({ id }) {
        if (id === 1) return (<ModelSelector />);
        if (id === 2) return (<h1>Hola</h1>);
    }

    function imgURL() {
        let responceURLWallpaper = fixRoute(`${wallpaper}\\${name}.png`);
        let responceStyle;
        if (type === 'Color') {
            responceStyle = {
                background: color
            }
        } else {
            responceStyle = {
                backgroundImage: `url("${responceURLWallpaper}")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover'
            }
        }
        if (parseInt(brightness) !== 100) {
            responceStyle['filter'] = `brightness(${brightness}%)`
        }
        return responceStyle
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
                </ModelSettings>
            </div>
        </>
    )
}