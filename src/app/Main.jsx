// Node Modules
import { useContext, useState } from 'react';

// Components
import ModelSelector from './pages/modelSelector';

// Contexts
import { Global } from './context/contexts';
import ModelSettings from './context/content/provider';
import RouterComponent from './components/router/router';

export default function Main() {

    const { type, wallpaper, name, color, brightness } = useContext(Global);

    const [SectionState, setSectionState] = useState(0)

    function fixRoute(route) {
        let newData,
            newVariable = route.split("\\");
        for (let i = 0; i < newVariable.length; i++) {
            newData += `/${newVariable[i]}`
        };
        return newData.split('undefined/')[1];
    };

    function SetSection({ id }) {
        if (id === 1) return (<ModelSelector />)
        if (id === 2) return (<h4>Hola</h4>)
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
                backgroundAttachment: 'fixed'
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