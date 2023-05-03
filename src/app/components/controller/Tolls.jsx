// Node Modules
import { useContext } from 'react';

// Contexts
import { Global } from '../../context/contexts';

export default function Tolls() {

    const { functions, state, FullscreenMode } = useContext(Global);

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
        <div id="ButtonTools" className='tolltip_bar_buttons'>
            <button onClick={() => handlerFullscreen()}>
                <img src={FullscreenMode ? state.resources['Fullscreen_Disable.png'] : state.resources['Fullscreen_Enable.png']} alt="Close-Window-Buttom" width="30" height="30" />
            </button>
        </div>
    )
}