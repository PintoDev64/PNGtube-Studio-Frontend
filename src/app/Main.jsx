// Node Modules
import { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

// Contexts
import { Global } from './context/contexts';

export default function Main() {

    const { type, wallpaper, name, color, brightness } = useContext(Global);

    function fixRoute(route) {
        let newData,
            newVariable = route.split("\\");
        for (let i = 0; i < newVariable.length; i++) {
            newData += `/${newVariable[i]}`
        };
        return newData.split('undefined/')[1];
    };

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

    console.log(imgURL());

    return (
        <div id="MainSection"
            style={imgURL()}
        >
            <BrowserRouter>
            </BrowserRouter>
        </div>
    )
}