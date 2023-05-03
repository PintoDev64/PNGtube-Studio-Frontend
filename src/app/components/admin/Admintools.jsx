// Node Modules
import { useContext } from 'react';

// Contexts
import { Global } from "../../context/contexts";

// Functions
import { Close, Minimize, Restore } from './executes';

import './Admintools.css'

export default function AdminTool() {

    const { settings, functions, state, FullscreenMode } = useContext(Global);

    return (
        <header id="AdminTool" style={
            {
                visibility: FullscreenMode ? 'hidden' : 'visible',
                height: FullscreenMode ? 0 : 45,
                zIndex: FullscreenMode ? -1 : 10,
            }
        }>
            <div id="tolls">
                <button onClick={() => {
                    functions.settings(!settings);
                }} className='tolltip_bar_buttons' id='settings'>
                    <img src={state.resources['Settings-icon.png']} alt="Close-Window-Buttom" width="30" height="30" />
                </button>
            </div>
            <header id='topWindowTollbar'>
                <h3>PNGTube Studio</h3>
            </header>
            <div id="buttons">
                <button onClick={() => {
                    Minimize();
                }} className='tolltip_bar_buttons' id='minimize'>
                    <img src={state.resources['_-icon.png']} alt="Close-Window-Buttom" width="30" height="30" />
                </button>
                <button onClick={() => {
                    Restore();
                }} className='tolltip_bar_buttons' id='window'>
                    <img src={state.resources['H-icon.png']} alt="Close-Window-Buttom" width="18" height="18" />
                </button>
                <button onClick={() => {
                    Close();
                }} className='tolltip_bar_buttons' id='close'>
                    <img src={state.resources['X-icon.png']} alt="Close-Window-Buttom" width="18" height="18" />
                </button>
            </div>
        </header>
    );
};

