function Close() {
    window.pngtubeAPI.EventWindow('close');
}

function Minimize() {
    window.pngtubeAPI.EventWindow('minimize');
}

function Restore() {
    window.pngtubeAPI.EventWindow('restore');
}

export {
    Close,
    Minimize,
    Restore
}