function Close() {
    window.admintools.EventWindow('close');
}

function Minimize() {
    window.admintools.EventWindow('minimize');
}

function Restore() {
    window.admintools.EventWindow('restore');
}

export {
    Close,
    Minimize,
    Restore
}