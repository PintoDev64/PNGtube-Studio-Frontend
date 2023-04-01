// Node Modules
import React from 'react';

// Imagenes
import { Hicon, Settingsicon, Xicon, _icon } from '../../resources/exports'

// Functions
import { Close, Minimize, Restore } from './executes';

import './Admintools.css'

export default function AdminTool() {
    return (
        <header id="AdminTool">
            <div id="tolls">
                <button className='tolltip_bar_buttons' id='settings'>
                    <img src={Hicon} alt="Close-Window-Buttom" width="30" height="30" />
                </button>
            </div>
            <header id='topWindowTollbar'>
                <h3>PNGTube Studio</h3>
            </header>
            <div id="buttons">
                <button onClick={() => {
                    Minimize()
                }} className='tolltip_bar_buttons' id='minimize'>
                    <img src={_icon} alt="Close-Window-Buttom" width="30" height="30" />
                </button>
                <button onClick={() => {
                    Restore()
                }} className='tolltip_bar_buttons' id='window'>
                    <img src={Hicon} alt="Close-Window-Buttom" width="18" height="18" />
                </button>
                <button onClick={() => {
                    Close()
                }} className='tolltip_bar_buttons' id='close'>
                    <img src={Xicon} alt="Close-Window-Buttom" width="18" height="18" />
                </button>
            </div>
        </header>
    );
};

