// Node Modules
import { useContext } from 'react';

// Contexts
import { Global } from "../../context/contexts";

// Functions
import { Close, Minimize, Restore } from './executes';

import './Admintools.css'
import RouterComponent from '../router/Router';

export default function AdminTool() {

    const { settings, functions, GlobalState } = useContext(Global);

    return (
        <header id="AdminTool">
            <div id="tolls">
                <button onClick={() => {
                    functions.settings(!settings);
                }} className='tolltip_bar_buttons' id='settings'>
                    <img src={GlobalState.resources['Settings-icon.png']} alt="Close-Window-Buttom" width="30" height="30" />
                </button>
            </div>
                <RouterComponent functionProp={functions.setSection} />
            <header id='topWindowTollbar'>
                <h3>PNGTube Studio</h3>
            </header>
            <div id="buttons">
                <button onClick={() => {
                    Minimize();
                }} className='tolltip_bar_buttons' id='minimize'>
                    <img src={GlobalState.resources['_-icon.png']} alt="Close-Window-Buttom" width="30" height="30" />
                </button>
                <button onClick={() => {
                    Restore();
                }} className='tolltip_bar_buttons' id='window'>
                    <img src={GlobalState.resources['H-icon.png']} alt="Close-Window-Buttom" width="18" height="18" />
                </button>
                <button onClick={() => {
                    Close();
                }} className='tolltip_bar_buttons' id='close'>
                    <img src={GlobalState.resources['X-icon.png']} alt="Close-Window-Buttom" width="18" height="18" />
                </button>
            </div>
        </header>
    );
};

