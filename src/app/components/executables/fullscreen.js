// Node Modules
import { useContext } from 'react';

// Contexts
import { Global } from '../../context/contexts';

export default function FullSreen() {

    const { functions, resources, FullscreenMode } = useContext(Global);

    function handlerFullscreen() {
        functions.fullscreenMode()
        console.log(FullscreenMode);
        if (!FullscreenMode) {
            document.body.webkitRequestFullScreen();
        } else {
            document.webkitExitFullscreen();
        };
    }

    return (
        <div id="FullScreenToggleButton" className='tolltip_bar_buttons' onClick={() => handlerFullscreen()}>
            <img src={FullscreenMode ? resources['Fullscreen_Disable.png'] : resources['Fullscreen_Enable.png']} alt="Close-Window-Buttom" width="30" height="30" />
        </div>
    )
}