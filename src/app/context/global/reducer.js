export default function GlobalReducer(state, { action, value }) {
    // Add dictionaries
    const dictionary = {
        color: {
            ...state,
            color: value
        },
        wallpaper: {
            ...state,
            wallpaper: value
        },
        name: {
            ...state,
            name: value
        },
        type: {
            ...state,
            type: value
        },
        settings: {
            ...state,
            settings: value
        },
        brightness: {
            ...state,
            brightness: value.toString()
        },
        hardwareAcceleration: {
            ...state,
            hardware: value
        },
        trayMenu: {
            ...state,
            tray: value
        },
        all: {
            ...state,
            color: value.colorBackground,
            wallpaper: value.wallpaper,
            type: value.type,
            name: value.name
        }
    }

    return dictionary[action];
}